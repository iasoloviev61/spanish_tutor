// ============================================================
// IndexedDB wrapper + JSON export/import
// Глобальный API: window.App.db
// ============================================================
(function () {
  const DB_NAME = 'spanish-app';
  const DB_VERSION = 1;
  let _db = null;

  function open() {
    if (_db) return Promise.resolve(_db);
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('users')) {
          const s = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
          s.createIndex('name', 'name', { unique: true });
        }
        if (!db.objectStoreNames.contains('progress')) {
          const s = db.createObjectStore('progress', { keyPath: 'id', autoIncrement: true });
          s.createIndex('userId', 'userId');
          s.createIndex('userUnit', ['userId', 'unitId']);
          s.createIndex('userUnitEx', ['userId', 'unitId', 'exerciseId']);
        }
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: ['userId', 'key'] });
        }
      };
      req.onsuccess = () => { _db = req.result; resolve(_db); };
      req.onerror = () => reject(req.error);
    });
  }

  function tx(stores, mode = 'readonly') {
    return open().then((db) => db.transaction(stores, mode));
  }

  function reqAsPromise(req) {
    return new Promise((resolve, reject) => {
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  // ---------- users ----------
  const users = {
    list: async () => {
      const t = await tx('users');
      return reqAsPromise(t.objectStore('users').getAll());
    },
    get: async (id) => {
      const t = await tx('users');
      return reqAsPromise(t.objectStore('users').get(id));
    },
    add: async ({ name, avatar = null, pinHash = null }) => {
      const t = await tx('users', 'readwrite');
      const rec = { name, avatar, pinHash, createdAt: Date.now() };
      const id = await reqAsPromise(t.objectStore('users').add(rec));
      return { id, ...rec };
    },
    update: async (id, patch) => {
      const t = await tx('users', 'readwrite');
      const store = t.objectStore('users');
      const cur = await reqAsPromise(store.get(id));
      if (!cur) return null;
      const next = { ...cur, ...patch };
      await reqAsPromise(store.put(next));
      return next;
    },
    remove: async (id) => {
      const t = await tx(['users', 'progress', 'settings'], 'readwrite');
      await reqAsPromise(t.objectStore('users').delete(id));
      const pIdx = t.objectStore('progress').index('userId');
      const cur = await reqAsPromise(pIdx.openCursor(IDBKeyRange.only(id)));
      const dels = [];
      let c = cur;
      while (c) {
        dels.push(reqAsPromise(c.delete()));
        c = await reqAsPromise(c.continue());
      }
      await Promise.all(dels);
    },
  };

  // ---------- progress ----------
  const progress = {
    record: async ({ userId, unitId, exerciseId, questionId, isCorrect, userAnswer, durationMs = 0 }) => {
      const t = await tx('progress', 'readwrite');
      const store = t.objectStore('progress');
      const idx = store.index('userUnitEx');
      const range = IDBKeyRange.only([userId, unitId, exerciseId]);
      const cur = await reqAsPromise(idx.openCursor(range));
      let existing = null;
      let c = cur;
      while (c) {
        if (c.value.questionId === questionId) { existing = c.value; break; }
        c = await reqAsPromise(c.continue());
      }
      const now = Date.now();
      if (existing) {
        existing.attempts = (existing.attempts || 0) + 1;
        existing.lastAnswer = userAnswer;
        existing.lastAttemptAt = now;
        existing.lastIsCorrect = !!isCorrect;
        if (isCorrect && !existing.firstSolvedAt) existing.firstSolvedAt = now;
        existing.everCorrect = existing.everCorrect || !!isCorrect;
        existing.totalDurationMs = (existing.totalDurationMs || 0) + (durationMs || 0);
        await reqAsPromise(store.put(existing));
        return existing;
      }
      const rec = {
        userId, unitId, exerciseId, questionId,
        attempts: 1,
        lastAnswer: userAnswer,
        lastIsCorrect: !!isCorrect,
        everCorrect: !!isCorrect,
        firstSolvedAt: isCorrect ? now : null,
        lastAttemptAt: now,
        totalDurationMs: durationMs || 0,
      };
      const id = await reqAsPromise(store.add(rec));
      return { id, ...rec };
    },
    forUser: async (userId) => {
      const t = await tx('progress');
      const idx = t.objectStore('progress').index('userId');
      return reqAsPromise(idx.getAll(IDBKeyRange.only(userId)));
    },
    forUnit: async (userId, unitId) => {
      const t = await tx('progress');
      const idx = t.objectStore('progress').index('userUnit');
      return reqAsPromise(idx.getAll(IDBKeyRange.only([userId, unitId])));
    },
    forExercise: async (userId, unitId, exerciseId) => {
      const t = await tx('progress');
      const idx = t.objectStore('progress').index('userUnitEx');
      return reqAsPromise(idx.getAll(IDBKeyRange.only([userId, unitId, exerciseId])));
    },
    resetExercise: async (userId, unitId, exerciseId) => {
      const t = await tx('progress', 'readwrite');
      const store = t.objectStore('progress');
      const idx = store.index('userUnitEx');
      const cur = await reqAsPromise(idx.openCursor(IDBKeyRange.only([userId, unitId, exerciseId])));
      let c = cur;
      while (c) { await reqAsPromise(c.delete()); c = await reqAsPromise(c.continue()); }
    },
  };

  // ---------- settings ----------
  const settings = {
    get: async (userId, key) => {
      const t = await tx('settings');
      const v = await reqAsPromise(t.objectStore('settings').get([userId, key]));
      return v ? v.value : undefined;
    },
    set: async (userId, key, value) => {
      const t = await tx('settings', 'readwrite');
      await reqAsPromise(t.objectStore('settings').put({ userId, key, value }));
    },
  };

  // ---------- export / import ----------
  async function exportAll() {
    const t = await tx(['users', 'progress', 'settings']);
    const u = await reqAsPromise(t.objectStore('users').getAll());
    const p = await reqAsPromise(t.objectStore('progress').getAll());
    const s = await reqAsPromise(t.objectStore('settings').getAll());
    return {
      app: 'spanish-app',
      version: DB_VERSION,
      exportedAt: new Date().toISOString(),
      users: u,
      progress: p,
      settings: s,
    };
  }

  async function exportUser(userId) {
    const all = await exportAll();
    return {
      ...all,
      users: all.users.filter((x) => x.id === userId),
      progress: all.progress.filter((x) => x.userId === userId),
      settings: all.settings.filter((x) => x.userId === userId),
    };
  }

  async function importDump(dump, { mode = 'merge' } = {}) {
    if (!dump || dump.app !== 'spanish-app') throw new Error('Не похоже на дамп spanish-app');
    const t = await tx(['users', 'progress', 'settings'], 'readwrite');
    if (mode === 'replace') {
      await reqAsPromise(t.objectStore('users').clear());
      await reqAsPromise(t.objectStore('progress').clear());
      await reqAsPromise(t.objectStore('settings').clear());
    }
    const idMap = new Map();
    for (const u of (dump.users || [])) {
      const cur = await reqAsPromise(t.objectStore('users').index('name').get(u.name));
      if (cur && mode === 'merge') {
        idMap.set(u.id, cur.id);
      } else {
        const { id, ...rest } = u;
        const newId = await reqAsPromise(t.objectStore('users').add(rest));
        idMap.set(u.id, newId);
      }
    }
    for (const p of (dump.progress || [])) {
      const newUserId = idMap.get(p.userId);
      if (!newUserId) continue;
      const { id, ...rest } = p;
      await reqAsPromise(t.objectStore('progress').add({ ...rest, userId: newUserId }));
    }
    for (const s of (dump.settings || [])) {
      const newUserId = idMap.get(s.userId);
      if (!newUserId) continue;
      await reqAsPromise(t.objectStore('settings').put({ ...s, userId: newUserId }));
    }
  }

  window.App = window.App || {};
  window.App.db = { open, users, progress, settings, exportAll, exportUser, importDump };
})();
