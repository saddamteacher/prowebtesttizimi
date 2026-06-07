const subjectsList = [
    { id: '3ds-max', uzName: '3ds Max va AutoCAD', ruName: '3ds max & autocad' },
    { id: 'data-analyst', uzName: 'Data Analyst', ruName: 'Data Analyst' },
    { id: 'data-science', uzName: 'Data Science', ruName: 'Data Science' },
    { id: 'motion-design', uzName: 'Motion dizayn va Video montaj', ruName: 'Motion design & Видеомонтаж' },
    { id: 'qa', uzName: "Dasturiy ta'minot testi (QA)", ruName: 'QA' },
    { id: 'blender', uzName: 'Blender', ruName: 'Blender' },
    { id: 'mc-office', uzName: 'MS Office', ruName: 'MS Office' },
    { id: 'pro-design', uzName: 'Pro Dizayn', ruName: 'Pro Design' },
    { id: 'pro-smm', uzName: 'Pro SMM', ruName: 'Pro SMM' },
    { id: 'python', uzName: 'Python', ruName: 'Python' },
    { id: 'basic', uzName: 'Baza kursi', ruName: 'Базовый курс' },
    { id: 'web-dev', uzName: 'Veb dasturlash', ruName: 'Веб программирование' },
    { id: 'marketing', uzName: 'Internet marketing', ruName: 'Интернет маркетинг' },
    { id: 'pc-build', uzName: "Kompyuter yig'ish", ruName: 'Компьютерная сборка' },
    { id: 'mobilography', uzName: 'Mobilografiya', ruName: 'Мобилография' },
    { id: 'start-it', uzName: 'IT da start', ruName: 'Старт в IT' },
    { id: 'young-dev', uzName: 'Yosh dasturchi', ruName: 'Юный программист' }
];

const ADMIN_PIN   = '7070';
// Groq — server orqali chaqiriladi (key Vercel env da)
const GROQ_MODEL = 'llama-3.1-8b-instant';

// Supabase funksiyalari questions_supabase.js dan keladi (SB_URL, SB_KEY u yerda)

// Admin panel tarjimalari
const adminTr = {
    uz: {
        title: '📋 Admin Panel', logout: '🚪 Chiqish', langLabel: 'Til',
        subjectLabel: 'Yo\'nalishni tanlang', aiLabel: '🤖 AI Yordamida Savol Yaratish',
        aiTopic: 'Mavzu nomi (masalan: Python asoslari)',
        aiBtn: '🤖 AI Generatsiya', aiLoading: 'AI savollarni tayyorlamoqda...',
        manualLabel: '✍️ Qo\'lda Savol Qo\'shish', qText: 'Savol matnini yozing...',
        optA: 'A variant', optB: 'B variant', optC: 'C variant', optD: 'D variant',
        addBtn: '➕ Savolni qo\'shish', qListLabel: '📝 Mavjud savollar', qCountUnit: 'ta',
        clearBtn: '🗑 Hammasini o\'chirish', emptyState: '👆 Yuqoridan yo\'nalish tanlang',
        emptyQ: '📭 Hozircha savol yo\'q. Yuqoridagi formadan qo\'shing!',
        aiNeedSubject: '⚠️ Avval yo\'nalishni tanlang!', aiNeedTopic: '⚠️ Mavzu nomini kiriting!',
        aiNoKey: '⚠️ Groq API kaliti sozlanmagan!', aiAdded: '✅ {n} ta savol qo\'shildi!',
        aiError: '❌ Xatolik: {msg}', manualAdded: '✅ Savol qo\'shildi!',
        manualFill: '⚠️ Barcha maydonlarni to\'ldiring!',
        confirmDelete: 'Shu savolni o\'chirmoqchimisiz?',
        confirmClear: '"{name}" ({lang}) dagi barcha savollarni o\'chirmoqchimisiz?',
    },
    ru: {
        title: '📋 Админ Панель', logout: '🚪 Выйти', langLabel: 'Язык',
        subjectLabel: 'Выберите направление', aiLabel: '🤖 Создать вопросы с помощью ИИ',
        aiTopic: 'Название темы (например: Основы Python)',
        aiBtn: '🤖 Сгенерировать', aiLoading: 'ИИ готовит вопросы...',
        manualLabel: '✍️ Добавить вопрос вручную', qText: 'Введите текст вопроса...',
        optA: 'Вариант A', optB: 'Вариант B', optC: 'Вариант C', optD: 'Вариант D',
        addBtn: '➕ Добавить вопрос', qListLabel: '📝 Существующие вопросы', qCountUnit: 'шт',
        clearBtn: '🗑 Удалить все', emptyState: '👆 Выберите направление выше',
        emptyQ: '📭 Пока нет вопросов. Добавьте через форму выше!',
        aiNeedSubject: '⚠️ Сначала выберите направление!', aiNeedTopic: '⚠️ Введите название темы!',
        aiNoKey: '⚠️ Groq API ключ не настроен!', aiAdded: '✅ Добавлено вопросов: {n}',
        aiError: '❌ Ошибка: {msg}', manualAdded: '✅ Вопрос добавлен!',
        manualFill: '⚠️ Заполните все поля!',
        confirmDelete: 'Удалить этот вопрос?',
        confirmClear: 'Удалить все вопросы по "{name}" ({lang})?',
    }
};
let pinInput = '';
let currentLang = 'uz';
let currentSubject = null;
let currentBlock = 1;

// Yordamchi: mavjud DB ni yangi formatga o'tkazish
function migrateDB() {
    const db = JSON.parse(localStorage.getItem('testDB')) || {};
    let changed = false;
    ['uz', 'ru'].forEach(lang => {
        if (!db[lang]) return;
        Object.keys(db[lang]).forEach(subj => {
            const val = db[lang][subj];
            // Eski format: array. Yangi format: { blockCount, blocks: { '1': [...] } }
            if (Array.isArray(val)) {
                db[lang][subj] = { blockCount: 1, blocks: { '1': val } };
                changed = true;
            }
        });
    });
    if (changed) localStorage.setItem('testDB', JSON.stringify(db));
}

function getDB() {
    migrateDB();
    return JSON.parse(localStorage.getItem('testDB')) || {};
}

function saveDB(db) {
    localStorage.setItem('testDB', JSON.stringify(db));
}

function getSubjectData() {
    const db = getDB();
    if (!db[currentLang]) db[currentLang] = {};
    if (!db[currentLang][currentSubject]) db[currentLang][currentSubject] = { blockCount: 1, blocks: { '1': [] } };
    return db[currentLang][currentSubject];
}

function getBlockQuestions(blockNum) {
    const data = getSubjectData();
    if (!data.blocks) data.blocks = {};
    if (!data.blocks[blockNum]) data.blocks[blockNum] = [];
    return data.blocks[blockNum];
}

// ============ INIT (panel.html tomonidan chaqiriladi) ============
function initApp() {
    migrateDB();
    // Til tablari
    document.querySelectorAll('.lang-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentLang = tab.dataset.lang;
            document.getElementById('stat-lang').textContent = currentLang.toUpperCase();
            renderSubjectGrid();
            renderBlockTabs();
            renderQuestions();
        });
    });
    renderSubjectGrid();
    updateStats();
}

// ============ STATS ============
function updateStats() {
    const db = getDB();
    const uz = db['uz'] || {};
    let total = 0;
    let subjects = 0;
    Object.values(uz).forEach(s => {
        if (!s.blocks) return;
        let cnt = Object.values(s.blocks).reduce((a, b) => a + b.length, 0);
        if (cnt > 0) subjects++;
        total += cnt;
    });
    const el = document.getElementById('stat-total');
    const sel = document.getElementById('stat-subjects');
    if (el) el.textContent = total;
    if (sel) sel.textContent = subjects;
}

// ============ SUBJECT GRID ============
function renderSubjectGrid() {
    const container = document.getElementById('subject-grid');
    if (!container) return;
    container.innerHTML = '';
    const db = getDB();

    subjectsList.forEach(s => {
        const chip = document.createElement('button');
        chip.className = 'subject-chip' + (s.id === currentSubject ? ' active' : '');

        const subjData = db[currentLang]?.[s.id] || null;
        let totalQ = 0;
        if (subjData?.blocks) Object.values(subjData.blocks).forEach(arr => totalQ += arr.length);

        chip.innerHTML = `${currentLang === 'uz' ? s.uzName : s.ruName}${totalQ > 0 ? `<span class="chip-count">${totalQ}</span>` : ''}`;

        chip.addEventListener('click', () => {
            document.querySelectorAll('.subject-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentSubject = s.id;
            currentBlock = 1;
            // Block card va editor ko'rsatish
            document.getElementById('block-card').style.display = 'block';
            document.getElementById('editor-section').style.display = 'block';
            const data = getSubjectData();
            document.getElementById('block-count').value = data.blockCount || 1;
            document.getElementById('stat-block').textContent = 'Blok 1';
            renderBlockTabs();
            renderQuestions();
        });

        container.appendChild(chip);
    });
}

function saveBlockCount() {
    const newCount = parseInt(document.getElementById('block-count').value) || 1;
    const db = getDB();
    if (!db[currentLang]) db[currentLang] = {};
    if (!db[currentLang][currentSubject]) db[currentLang][currentSubject] = { blockCount: 1, blocks: {} };
    const oldCount = db[currentLang][currentSubject].blockCount || 1;
    db[currentLang][currentSubject].blockCount = newCount;
    // Yangi bloklar uchun bo'sh array
    if (!db[currentLang][currentSubject].blocks) db[currentLang][currentSubject].blocks = {};
    for (let i = 1; i <= newCount; i++) {
        if (!db[currentLang][currentSubject].blocks[i]) db[currentLang][currentSubject].blocks[i] = [];
    }
    saveDB(db);
    if (currentBlock > newCount) currentBlock = newCount;
    renderBlockTabs();
    renderQuestions();
    showFeedback('✅ Bloklar soni yangilandi!', '#4ade80');
}

function renderBlockTabs() {
    const container = document.getElementById('block-tabs');
    if (!container || !currentSubject) return;
    const data = getSubjectData();
    const count = data.blockCount || 1;
    container.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        const tab = document.createElement('button');
        tab.className = 'block-tab' + (i === currentBlock ? ' active' : '');
        const qs = getBlockQuestions(i);
        tab.innerHTML = `Blok ${i}${qs.length > 0 ? `<span class="block-count">${qs.length}</span>` : ''}`;
        tab.addEventListener('click', () => {
            currentBlock = i;
            document.getElementById('stat-block').textContent = `Blok ${i}`;
            renderBlockTabs();
            renderQuestions();
        });
        container.appendChild(tab);
    }
}

// ============ SAVOL QO'SHISH ============
async function addQuestion() {
    const t = adminTr[currentLang];
    if (!currentSubject) { showFeedback(t.aiNeedSubject, '#ff4444'); return; }
    
    const qText = document.getElementById('q-text').value.trim();
    const opts = [0, 1, 2, 3].map(i => document.getElementById(`opt-${i}`).value.trim());
    const correctEl = document.querySelector('input[name="ca"]:checked') || document.querySelector('input[name="correct-answer"]:checked');
    const correct = correctEl ? parseInt(correctEl.value) : 0;

    if (!qText || opts.some(o => !o)) { showFeedback(t.manualFill, '#ff4444'); return; }

    const db = getDB();
    if (!db[currentLang]) db[currentLang] = {};
    if (!db[currentLang][currentSubject]) db[currentLang][currentSubject] = { blockCount: 1, blocks: {} };
    if (!db[currentLang][currentSubject].blocks) db[currentLang][currentSubject].blocks = {};
    if (!db[currentLang][currentSubject].blocks[currentBlock]) db[currentLang][currentSubject].blocks[currentBlock] = [];
    
    // Supabase ga yozish — ID ni qaytaradi
    const saved = await sbAdd({
        subject:  currentSubject,
        block:    parseInt(currentBlock),
        question: qText,
        opt1: opts[0], opt2: opts[1], opt3: opts[2], opt4: opts[3],
        correct,
        lang: currentLang
    });

    const newQ = { text: qText, options: opts, correct, id: saved?.id };
    db[currentLang][currentSubject].blocks[currentBlock].push(newQ);
    saveDB(db);

    document.getElementById('q-text').value = '';
    opts.forEach((_, i) => document.getElementById(`opt-${i}`).value = '');
    document.querySelector('input[name="correct-answer"][value="0"]').checked = true;

    showFeedback('✅ Savol qo\'shildi!', '#22c55e');
    renderSubjectGrid();
    renderBlockTabs();
    renderQuestions();
    updateStats();
}

function showFeedback(msg, color) {
    const el = document.getElementById('add-feedback');
    if (!el) return;
    el.textContent = msg;
    el.style.color = color;
    el.style.background = color === '#22c55e' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)';
    el.style.display = 'block';
    setTimeout(() => { if (el) el.style.display = 'none'; }, 2500);
}

// ============ SAVOLLAR RO'YXATI ============
function renderQuestions() {
    const list = document.getElementById('q-list');
    const countEl = document.getElementById('q-count');
    if (!list) return;

    if (!currentSubject) {
        list.innerHTML = `<div class="empty-state">👆 Fan tanlang</div>`;
        if (countEl) countEl.textContent = '0';
        return;
    }

    const questions = getBlockQuestions(currentBlock);
    if (countEl) countEl.textContent = questions.length;

    if (questions.length === 0) {
        list.innerHTML = `<div class="empty-state">Blok ${currentBlock} da savol yo'q</div>`;
        return;
    }

    const L = ['A','B','C','D'];
    list.innerHTML = `<div class="q-list">${questions.map((q, i) => `
        <div class="q-item">
            <span class="q-num">${i+1}</span>
            <div class="q-body">
                <div class="q-text">${q.text.replace(/```[\s\S]*?```/g, '<code style="font-family:monospace;background:rgba(255,255,255,0.06);padding:2px 6px;border-radius:4px;font-size:0.82em">···code···</code>')}</div>
                <div class="q-opts">${q.options.map((o,oi)=>`<span class="q-opt${oi===q.correct?' correct':''}">${L[oi]}: ${o}</span>`).join('')}</div>
            </div>
            <button class="q-del" onclick="deleteQ(${i})">🗑</button>
        </div>`).join('')}</div>`;
}

// ============ O'CHIRISH ============
function deleteQ(index) {
    const t = adminTr[currentLang];
    if (!confirm(t.confirmDelete)) return;
    const db = getDB();
    if (db[currentLang]?.[currentSubject]?.blocks?.[currentBlock]) {
        const q = db[currentLang][currentSubject].blocks[currentBlock][index];
        // Supabase dan o'chirish
        if (q.id) sbDelete(q.id);
        db[currentLang][currentSubject].blocks[currentBlock].splice(index, 1);
        saveDB(db);
        renderSubjectGrid();
        renderBlockTabs();
        renderQuestions();
        updateStats();
    }
}

function clearAll() {
    if (!currentSubject) return;
    const t = adminTr[currentLang];
    if (confirm(currentLang === 'uz' ? `Blok ${currentBlock} dagi barcha savollarni o'chirmoqchimisiz?` : `Удалить все вопросы в блоке ${currentBlock}?`)) {
        const db = getDB();
        if (db[currentLang]?.[currentSubject]?.blocks) {
            sbDeleteBlock(currentSubject, currentBlock, currentLang);
            db[currentLang][currentSubject].blocks[currentBlock] = [];
            saveDB(db);
            renderSubjectGrid();
            renderBlockTabs();
            renderQuestions();
            updateStats();
        }
    }
}

// ============ ADMIN UI TILINI YANGILASH ============
function updateAdminLang() {
    const t = adminTr[currentLang];
    
    // Sarlavha va knopkalar
    const titleEl = document.getElementById('admin-title');
    if (titleEl) titleEl.textContent = t.title;
    
    const logoutEl = document.getElementById('logout-btn');
    if (logoutEl) logoutEl.textContent = t.logout;
    
    // Label'lar (data-uz bo'yicha, OPTION va INPUT larni tashlab)
    document.querySelectorAll('[data-uz]').forEach(el => {
        if (el.tagName === 'OPTION') return;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
        if (el.hasAttribute('data-uz-placeholder')) return;
        const val = currentLang === 'uz' ? el.getAttribute('data-uz') : el.getAttribute('data-ru');
        if (val) el.textContent = val;
    });
    
    // Input placeholderlar
    document.querySelectorAll('[data-uz-placeholder]').forEach(el => {
        const val = currentLang === 'uz' ? el.getAttribute('data-uz-placeholder') : el.getAttribute('data-ru-placeholder');
        if (val && el.placeholder !== undefined) el.placeholder = val;
    });

    // Select optionlar
    const aiCount = document.getElementById('ai-count');
    if (aiCount) {
        aiCount.querySelectorAll('option').forEach(opt => {
            const val = currentLang === 'uz' ? opt.getAttribute('data-uz') : opt.getAttribute('data-ru');
            if (val) opt.textContent = val;
        });
    }

    // AI loading matni
    const aiLoadingP = document.querySelector('#ai-loading p');
    if (aiLoadingP) {
        const val = currentLang === 'uz' ? aiLoadingP.getAttribute('data-uz') : aiLoadingP.getAttribute('data-ru');
        if (val) aiLoadingP.textContent = val;
    }
}

// ============ GROQ AI SAVOL GENERATORI ============
async function generateAIQuestions() {
    const t = adminTr[currentLang];
    const topic = document.getElementById('ai-topic').value.trim();
    const count = parseInt(document.getElementById('ai-count').value);

    if (!topic) {
        showAIFeedback(t.aiNeedTopic, '#ff4444');
        return;
    }

    if (!currentSubject) {
        showAIFeedback(t.aiNeedSubject, '#ff4444');
        return;
    }

    document.getElementById('ai-loading').style.display = 'block';
    document.getElementById('ai-feedback').style.display = 'none';
    document.getElementById('ai-generate-btn').disabled = true;

    try {
        // Server orqali chaqirish (key Vercel env da)
        const response = await fetch('/api/groq', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic, count, lang: currentLang, model: GROQ_MODEL })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'API xatosi');

        const questions = data.questions;
        if (!Array.isArray(questions) || questions.length === 0) throw new Error('AI savol yarata olmadi');

        const db = getDB();
        if (!db[currentLang]) db[currentLang] = {};
        if (!db[currentLang][currentSubject]) db[currentLang][currentSubject] = { blockCount: 1, blocks: {} };
        if (!db[currentLang][currentSubject].blocks) db[currentLang][currentSubject].blocks = {};
        if (!db[currentLang][currentSubject].blocks[currentBlock]) db[currentLang][currentSubject].blocks[currentBlock] = [];

        let added = 0;
        questions.forEach(q => {
            if (q.text && Array.isArray(q.options) && q.options.length === 4 && typeof q.correct === 'number') {
                db[currentLang][currentSubject].blocks[currentBlock].push({ text: q.text, options: q.options, correct: q.correct });
                added++;
            }
        });

        saveDB(db);
        showAIFeedback(`✅ ${added} ta savol qo'shildi!`, '#22c55e');
        renderSubjectGrid();
        renderBlockTabs();
        updateStats();
        renderQuestions();

    } catch (err) {
        console.error('AI error:', err);
        showAIFeedback(t.aiError.replace('{msg}', err.message), '#ff4444');
    } finally {
        const loadingEl = document.getElementById('ai-loading');
        const btnEl = document.getElementById('ai-generate-btn');
        if (loadingEl) loadingEl.style.display = 'none';
        if (btnEl) btnEl.disabled = false;
    }
}

function showAIFeedback(msg, color) {
    const el = document.getElementById('ai-feedback');
    if (!el) return;
    el.textContent = msg;
    el.style.color = color;
    el.style.display = 'block';
    setTimeout(() => { if (el) el.style.display = 'none'; }, 4000);
}
