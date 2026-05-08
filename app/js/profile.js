// ============================================================
// Профили пользователей: создание, переключение, опциональный PIN.
// Активный пользователь хранится в localStorage (только pointer),
// данные — в IndexedDB.
// Глобальный API: window.App.profile
// ============================================================
(function () {
  const ACTIVE_KEY = 'spanish_app_active_user_v1';

  function getActiveId() {
    const v = localStorage.getItem(ACTIVE_KEY);
    return v ? Number(v) : null;
  }
  function setActiveId(id) {
    if (id == null) localStorage.removeItem(ACTIVE_KEY);
    else localStorage.setItem(ACTIVE_KEY, String(id));
  }

  async function sha256(s) {
    const buf = new TextEncoder().encode(s);
    const h = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(h)).map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  async function createProfile({ name, avatar = null, pin = null }) {
    name = (name || '').trim();
    if (!name) throw new Error('Имя обязательно');
    let pinHash = null;
    if (pin) pinHash = await sha256(String(pin));
    const u = await App.db.users.add({ name, avatar, pinHash });
    return u;
  }

  async function verifyPin(userId, pin) {
    const u = await App.db.users.get(userId);
    if (!u || !u.pinHash) return true;
    const h = await sha256(String(pin));
    return h === u.pinHash;
  }

  async function setPin(userId, pin) {
    const pinHash = pin ? await sha256(String(pin)) : null;
    return App.db.users.update(userId, { pinHash });
  }

  async function getActive() {
    const id = getActiveId();
    if (!id) return null;
    const u = await App.db.users.get(id);
    if (!u) { setActiveId(null); return null; }
    return u;
  }

  async function ensureActive() {
    let u = await getActive();
    if (u) return u;
    const list = await App.db.users.list();
    if (list.length > 0) {
      // молча выбираем первого, чтобы UX был мягким; пользователь увидит шапку и может переключиться
      setActiveId(list[0].id);
      return list[0];
    }
    return null;
  }

  // ---------- UI ----------
  const AVATARS = ['🦊', '🐻', '🐼', '🦁', '🐱', '🐶', '🦉', '🐯', '🐨', '🦄', '🐺', '🦝', '🦔', '🐝', '🌻', '⭐', '🌙', '🔥', '🌊', '📚'];

  function el(tag, attrs = {}, children = []) {
    const e = document.createElement(tag);
    for (const k of Object.keys(attrs)) {
      if (k === 'class') e.className = attrs[k];
      else if (k === 'html') e.innerHTML = attrs[k];
      else if (k.startsWith('on') && typeof attrs[k] === 'function') e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    if (typeof children === 'string') e.textContent = children;
    else for (const c of (children || [])) if (c) e.appendChild(c);
    return e;
  }

  let _root = null;

  async function mount(target = '#profile-bar') {
    _root = typeof target === 'string' ? document.querySelector(target) : target;
    if (!_root) return;
    await render();
  }

  async function render() {
    if (!_root) return;
    _root.innerHTML = '';
    const list = await App.db.users.list();
    const active = await ensureActive();

    if (list.length === 0) {
      _root.appendChild(renderWelcome());
      return;
    }
    if (!active) {
      _root.appendChild(renderPicker(list));
      return;
    }
    _root.appendChild(renderBar(active, list));
  }

  function renderWelcome() {
    const wrap = el('div', { class: 'profile-bar profile-welcome' });
    wrap.appendChild(el('div', { class: 'profile-welcome-title', html: 'Кто учится?' }));
    wrap.appendChild(el('div', {
      class: 'profile-welcome-sub',
      html: 'Создайте профиль — прогресс по упражнениям и слабые темы будут привязаны к нему.',
    }));
    wrap.appendChild(buildCreateForm(true));
    return wrap;
  }

  function renderPicker(list) {
    const wrap = el('div', { class: 'profile-bar profile-welcome' });
    wrap.appendChild(el('div', { class: 'profile-welcome-title', html: 'Выберите профиль' }));
    const grid = el('div', { class: 'profile-grid' });
    for (const u of list) {
      grid.appendChild(el('button', {
        class: 'profile-card',
        onclick: () => switchTo(u.id),
      }, [
        el('div', { class: 'profile-avatar' }, u.avatar || '👤'),
        el('div', { class: 'profile-name' }, u.name),
        u.pinHash ? el('div', { class: 'profile-locked', html: '🔒' }) : null,
      ]));
    }
    wrap.appendChild(grid);
    wrap.appendChild(el('details', { class: 'profile-add-details' }, [
      el('summary', {}, '+ Создать ещё'),
      buildCreateForm(false),
    ]));
    return wrap;
  }

  function renderBar(active, list) {
    const wrap = el('div', { class: 'profile-bar' });
    const trigger = el('button', { class: 'profile-trigger', type: 'button' }, [
      el('span', { class: 'profile-avatar-sm' }, active.avatar || '👤'),
      el('span', { class: 'profile-name-sm' }, active.name),
      el('span', { class: 'profile-caret' }, '▾'),
    ]);
    const menu = el('div', { class: 'profile-menu', hidden: 'hidden' });
    trigger.addEventListener('click', () => {
      const open = !menu.hasAttribute('hidden');
      if (open) menu.setAttribute('hidden', 'hidden');
      else menu.removeAttribute('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) menu.setAttribute('hidden', 'hidden');
    });

    menu.appendChild(el('div', { class: 'profile-menu-section' }, 'Переключить профиль'));
    for (const u of list) {
      const isActive = u.id === active.id;
      menu.appendChild(el('button', {
        class: 'profile-menu-item' + (isActive ? ' is-active' : ''),
        type: 'button',
        onclick: () => { if (!isActive) switchTo(u.id); },
      }, [
        el('span', { class: 'profile-avatar-sm' }, u.avatar || '👤'),
        el('span', {}, u.name),
        u.pinHash ? el('span', { class: 'profile-pin-mark' }, '🔒') : null,
        isActive ? el('span', { class: 'profile-active-dot' }, '●') : null,
      ]));
    }
    menu.appendChild(el('hr', { class: 'profile-menu-sep' }));
    menu.appendChild(el('button', {
      class: 'profile-menu-item',
      type: 'button',
      onclick: () => openCreateModal(),
    }, '+ Создать профиль'));
    menu.appendChild(el('button', {
      class: 'profile-menu-item',
      type: 'button',
      onclick: () => openExportModal(),
    }, '⤓ Экспорт / импорт'));
    menu.appendChild(el('button', {
      class: 'profile-menu-item',
      type: 'button',
      onclick: () => openManageModal(),
    }, '⚙ Управление профилями'));

    wrap.appendChild(trigger);
    wrap.appendChild(menu);
    return wrap;
  }

  function buildCreateForm(autofocus) {
    const form = el('form', { class: 'profile-form' });
    const nameInput = el('input', { type: 'text', class: 'profile-input', placeholder: 'Имя', maxlength: '40' });
    const pinInput = el('input', { type: 'password', class: 'profile-input', placeholder: 'PIN (опц.)', inputmode: 'numeric', pattern: '[0-9]*', maxlength: '6' });
    const avatarPicker = el('div', { class: 'profile-avatar-picker' });
    let chosen = AVATARS[Math.floor(Math.random() * AVATARS.length)];
    AVATARS.forEach((a) => {
      const b = el('button', {
        type: 'button',
        class: 'profile-avatar-opt' + (a === chosen ? ' is-active' : ''),
        onclick: () => {
          chosen = a;
          avatarPicker.querySelectorAll('.profile-avatar-opt').forEach((x) => x.classList.toggle('is-active', x.textContent === a));
        },
      }, a);
      avatarPicker.appendChild(b);
    });
    const submit = el('button', { type: 'submit', class: 'profile-btn' }, 'Создать');
    form.appendChild(nameInput);
    form.appendChild(pinInput);
    form.appendChild(avatarPicker);
    form.appendChild(submit);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const u = await createProfile({ name: nameInput.value, avatar: chosen, pin: pinInput.value || null });
        setActiveId(u.id);
        location.reload();
      } catch (err) {
        alert(err.message || 'Не получилось создать профиль');
      }
    });
    if (autofocus) setTimeout(() => nameInput.focus(), 50);
    return form;
  }

  async function switchTo(id) {
    const u = await App.db.users.get(id);
    if (!u) return;
    if (u.pinHash) {
      const pin = prompt(`PIN для «${u.name}»:`);
      if (pin == null) return;
      const ok = await verifyPin(id, pin);
      if (!ok) { alert('Неверный PIN'); return; }
    }
    setActiveId(id);
    location.reload();
  }

  // ---------- модалки ----------
  function openModal(content) {
    const back = el('div', { class: 'profile-modal-back' });
    const card = el('div', { class: 'profile-modal' });
    card.appendChild(content);
    back.appendChild(card);
    back.addEventListener('click', (e) => { if (e.target === back) back.remove(); });
    document.body.appendChild(back);
    return back;
  }

  function openCreateModal() {
    const wrap = el('div', {});
    wrap.appendChild(el('div', { class: 'profile-modal-title' }, 'Новый профиль'));
    wrap.appendChild(buildCreateForm(true));
    openModal(wrap);
  }

  function openExportModal() {
    const wrap = el('div', {});
    wrap.appendChild(el('div', { class: 'profile-modal-title' }, 'Экспорт / импорт прогресса'));
    const desc = el('p', { class: 'profile-modal-desc' },
      'JSON-файл с профилями и прогрессом. Используйте для резервной копии или переноса между браузерами/устройствами.');
    wrap.appendChild(desc);

    const btnAll = el('button', { class: 'profile-btn', type: 'button' }, 'Скачать все профили');
    btnAll.addEventListener('click', async () => {
      const dump = await App.db.exportAll();
      downloadJson(dump, `spanish-progress-${todayStr()}.json`);
    });
    const btnMine = el('button', { class: 'profile-btn profile-btn-secondary', type: 'button' }, 'Скачать только текущий');
    btnMine.addEventListener('click', async () => {
      const u = await getActive();
      if (!u) return;
      const dump = await App.db.exportUser(u.id);
      downloadJson(dump, `spanish-progress-${slug(u.name)}-${todayStr()}.json`);
    });
    wrap.appendChild(el('div', { class: 'profile-btn-row' }, [btnAll, btnMine]));

    wrap.appendChild(el('hr', { class: 'profile-modal-sep' }));
    wrap.appendChild(el('div', { class: 'profile-modal-subtitle' }, 'Импорт'));
    const importInput = el('input', { type: 'file', accept: 'application/json' });
    importInput.addEventListener('change', async () => {
      const f = importInput.files[0];
      if (!f) return;
      try {
        const text = await f.text();
        const dump = JSON.parse(text);
        await App.db.importDump(dump, { mode: 'merge' });
        alert('Импорт завершён');
        location.reload();
      } catch (e) {
        alert('Ошибка импорта: ' + e.message);
      }
    });
    wrap.appendChild(importInput);

    openModal(wrap);
  }

  function openManageModal() {
    const wrap = el('div', {});
    wrap.appendChild(el('div', { class: 'profile-modal-title' }, 'Управление профилями'));

    const list = el('div', { class: 'profile-manage-list' });
    wrap.appendChild(list);

    (async () => {
      const users = await App.db.users.list();
      const active = await getActive();
      list.innerHTML = '';
      for (const u of users) {
        const row = el('div', { class: 'profile-manage-row' });
        row.appendChild(el('span', { class: 'profile-avatar-sm' }, u.avatar || '👤'));
        row.appendChild(el('span', { class: 'profile-manage-name' }, u.name + (active && u.id === active.id ? ' (вы)' : '')));
        row.appendChild(el('button', {
          class: 'profile-btn-ghost',
          type: 'button',
          onclick: async () => {
            const pin = prompt('Новый PIN (пусто — снять):');
            if (pin == null) return;
            await setPin(u.id, pin || null);
            alert('PIN обновлён');
          },
        }, u.pinHash ? '🔒 PIN' : '+ PIN'));
        row.appendChild(el('button', {
          class: 'profile-btn-ghost danger',
          type: 'button',
          onclick: async () => {
            if (!confirm(`Удалить профиль «${u.name}» и весь его прогресс?`)) return;
            await App.db.users.remove(u.id);
            if (active && active.id === u.id) setActiveId(null);
            location.reload();
          },
        }, '🗑'));
        list.appendChild(row);
      }
    })();

    openModal(wrap);
  }

  function downloadJson(obj, filename) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  function slug(s) {
    return s.toLowerCase().replace(/[^a-zа-я0-9]+/gi, '-').replace(/^-+|-+$/g, '');
  }

  window.App = window.App || {};
  window.App.profile = {
    mount, render, getActive, ensureActive,
    createProfile, verifyPin, setPin,
    getActiveId, setActiveId,
  };
})();
