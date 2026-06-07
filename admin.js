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
const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL   = 'llama-3.3-70b-versatile';

// ── GitHub JSON ──────────────────────────────────────────────────
const GITHUB_REPO  = 'saddamteacher/prowebtesttizimi';
const GITHUB_FILE  = 'questions.json';
const GITHUB_BRANCH = 'master';

function getGithubToken() {
    return localStorage.getItem('githubToken') || '';
}

function saveGithubToken() {
    const input  = document.getElementById('github-token');
    const status = document.getElementById('github-status');
    const token  = (input?.value || '').trim();
    if (!token) { if (status) { status.textContent = '⚠️ Token kiriting'; status.style.color = '#ff6060'; } return; }
    localStorage.setItem('githubToken', token);
    if (status) { status.textContent = '✅ Token saqlandi'; status.style.color = '#4ade80'; }
}

async function pushToGithub() {
    const token  = getGithubToken();
    const btn    = document.getElementById('push-btn');
    const status = document.getElementById('github-status');

    if (!token) {
        if (status) { status.textContent = '⚠️ Avval token kiriting'; status.style.color = '#ff6060'; }
        return;
    }

    if (btn) { btn.textContent = '⏳ Yuklanmoqda...'; btn.disabled = true; }

    try {
        const db      = getDB();
        const content = btoa(unescape(encodeURIComponent(JSON.stringify(db, null, 2))));
        const apiUrl  = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE}`;

        // Mavjud faylning SHA sini olish
        let sha = '';
        const getRes = await fetch(apiUrl + `?ref=${GITHUB_BRANCH}`, {
            headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' }
        });
        if (getRes.ok) {
            const fileData = await getRes.json();
            sha = fileData.sha || '';
        }

        // Fayl yaratish yoki yangilash
        const body = {
            message: `Admin: savollar yangilandi (${new Date().toLocaleString('uz')})`,
            content,
            branch: GITHUB_BRANCH
        };
        if (sha) body.sha = sha;

        const putRes = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                Authorization: `token ${token}`,
                Accept: 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (putRes.ok) {
            if (status) { status.textContent = '✅ GitHub ga muvaffaqiyatli yuklandi!'; status.style.color = '#4ade80'; }
        } else {
            const err = await putRes.json();
            if (status) { status.textContent = '❌ Xato: ' + (err.message || 'Noma\'lum'); status.style.color = '#ff6060'; }
        }
    } catch (e) {
        if (status) { status.textContent = '❌ ' + e.message; status.style.color = '#ff6060'; }
    } finally {
        if (btn) { btn.textContent = '🚀 GitHub ga yuklash'; btn.disabled = false; }
    }
}

// Eski Sheets funksiyalarini stub qilib qoldiramiz (xato bo'lmasin)
async function sheetsAPI() { return null; }

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

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
    // Neon orbs
    [{ cls: 'neon-orb neon-orb-1' }, { cls: 'neon-orb neon-orb-2' }, { cls: 'neon-orb neon-orb-3' }]
        .forEach(o => { const d = document.createElement('div'); d.className = o.cls; document.body.appendChild(d); });

    if (sessionStorage.getItem('adminLoggedIn') === 'true') showAdminPanel();

    // PIN keypad
    document.querySelectorAll('.pin-key').forEach(btn => {
        btn.addEventListener('click', () => handlePinKey(btn.dataset.key));
    });
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('admin-panel').style.display === 'block') return;
        if (e.key >= '0' && e.key <= '9') handlePinKey(e.key);
        else if (e.key === 'Backspace') handlePinKey('clear');
        else if (e.key === 'Enter') handlePinKey('submit');
    });
});

// ============ PIN LOGIN ============
function handlePinKey(key) {
    if (key === 'clear') pinInput = pinInput.slice(0, -1);
    else if (key === 'submit') { checkPin(); return; }
    else if (pinInput.length < 4) pinInput += key;
    
    updatePinDisplay();
    if (pinInput.length === 4) setTimeout(checkPin, 300);
}

function updatePinDisplay() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(`dot-${i}`).classList.toggle('filled', i < pinInput.length);
    }
}

function checkPin() {
    if (pinInput === ADMIN_PIN) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        showAdminPanel();
    } else {
        document.getElementById('login-error').style.display = 'block';
        document.getElementById('pin-display').classList.add('shake');
        setTimeout(() => document.getElementById('pin-display').classList.remove('shake'), 500);
        pinInput = '';
        updatePinDisplay();
    }
}

// ============ ADMIN PANEL ============
function showAdminPanel() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    migrateDB();
    renderSubjectChips();
    setupListeners();
    // Token bor bo'lsa ko'rsatish
    const token = getGithubToken();
    const sts   = document.getElementById('github-status');
    if (sts && token) { sts.textContent = '✅ Token saqlangan — GitHub ga yuklashga tayyor'; sts.style.color = '#4ade80'; }
}

function setupListeners() {
    document.querySelectorAll('.lang-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentLang = tab.dataset.lang;
            updateAdminLang();
            renderSubjectChips();
            renderBlockTabs();
            renderQuestions();
        });
    });

    document.getElementById('add-q-btn').addEventListener('click', addQuestion);
    document.getElementById('clear-all-btn').addEventListener('click', clearAll);
    document.getElementById('logout-btn').addEventListener('click', () => {
        sessionStorage.removeItem('adminLoggedIn');
        location.reload();
    });
    document.getElementById('ai-generate-btn').addEventListener('click', generateAIQuestions);
    document.getElementById('save-blocks-btn').addEventListener('click', saveBlockCount);
}

// ============ SUBJECT CHIPS + BLOK ============
function renderSubjectChips() {
    const container = document.getElementById('subject-chips');
    if (!container) return;
    container.innerHTML = '';
    const db = getDB();
    
    subjectsList.forEach(s => {
        const chip = document.createElement('button');
        chip.className = 'subject-chip';
        chip.textContent = currentLang === 'uz' ? s.uzName : s.ruName;
        chip.dataset.id = s.id;
        
        const subjData = (db[currentLang] && db[currentLang][s.id]) || null;
        let totalQ = 0;
        if (subjData && subjData.blocks) {
            Object.values(subjData.blocks).forEach(arr => totalQ += arr.length);
        }
        if (totalQ > 0) {
            const badge = document.createElement('span');
            badge.className = 'chip-badge';
            badge.textContent = totalQ;
            chip.appendChild(badge);
        }
        
        if (s.id === currentSubject) chip.classList.add('active');
        
        chip.addEventListener('click', () => {
            document.querySelectorAll('.subject-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentSubject = s.id;
            currentBlock = 1;
            showBlockConfig();
            renderBlockTabs();
            renderQuestions();
        });
        
        container.appendChild(chip);
    });
}

function showBlockConfig() {
    const configDiv = document.getElementById('block-config');
    const blockSection = document.getElementById('block-select-section');
    if (!currentSubject) {
        if (configDiv) configDiv.style.display = 'none';
        if (blockSection) blockSection.style.display = 'none';
        return;
    }
    if (configDiv) configDiv.style.display = 'block';
    if (blockSection) blockSection.style.display = 'block';
    const data = getSubjectData();
    document.getElementById('block-count').value = data.blockCount || 1;
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
        tab.textContent = `Blok ${i}`;
        const qs = getBlockQuestions(i);
        if (qs.length > 0) {
            const badge = document.createElement('span');
            badge.className = 'chip-badge';
            badge.textContent = qs.length;
            tab.appendChild(badge);
        }
        tab.addEventListener('click', () => {
            currentBlock = i;
            renderBlockTabs();
            renderQuestions();
        });
        container.appendChild(tab);
    }
}

// ============ SAVOL QO'SHISH ============
function addQuestion() {
    const t = adminTr[currentLang];
    if (!currentSubject) { showFeedback(t.aiNeedSubject, '#ff4444'); return; }
    
    const qText = document.getElementById('q-text').value.trim();
    const opts = [0, 1, 2, 3].map(i => document.getElementById(`opt-${i}`).value.trim());
    const correctEl = document.querySelector('input[name="correct-answer"]:checked');
    const correct = correctEl ? parseInt(correctEl.value) : 0;

    if (!qText || opts.some(o => !o)) { showFeedback(t.manualFill, '#ff4444'); return; }

    const db = getDB();
    if (!db[currentLang]) db[currentLang] = {};
    if (!db[currentLang][currentSubject]) db[currentLang][currentSubject] = { blockCount: 1, blocks: {} };
    if (!db[currentLang][currentSubject].blocks) db[currentLang][currentSubject].blocks = {};
    if (!db[currentLang][currentSubject].blocks[currentBlock]) db[currentLang][currentSubject].blocks[currentBlock] = [];
    
    const newQ = { text: qText, options: opts, correct };
    db[currentLang][currentSubject].blocks[currentBlock].push(newQ);
    saveDB(db);

    // Sheets ga ham yozish
    sheetsAPI('add', {
        subject:  currentSubject,
        block:    currentBlock,
        question: qText,
        opt1: opts[0], opt2: opts[1], opt3: opts[2], opt4: opts[3],
        correct
    });

    document.getElementById('q-text').value = '';
    opts.forEach((_, i) => document.getElementById(`opt-${i}`).value = '');
    document.querySelector('input[name="correct-answer"][value="0"]').checked = true;

    showFeedback(t.manualAdded, '#4ade80');
    renderSubjectChips();
    renderBlockTabs();
    renderQuestions();
}

function showFeedback(msg, color) {
    const el = document.getElementById('add-feedback');
    if (!el) return;
    el.textContent = msg;
    el.style.color = color;
    el.style.display = 'block';
    setTimeout(() => { if (el) el.style.display = 'none'; }, 2000);
}

// ============ SAVOLLAR RO'YXATI ============
function renderQuestions() {
    const list = document.getElementById('questions-list');
    const countEl = document.getElementById('q-count');
    if (!list) return;
    const t = adminTr[currentLang];

    if (!currentSubject) {
        list.innerHTML = `<p class="empty-state">${t.emptyState}</p>`;
        if (countEl) countEl.textContent = '0';
        return;
    }

    const questions = getBlockQuestions(currentBlock);
    if (countEl) countEl.textContent = questions.length;

    if (questions.length === 0) {
        list.innerHTML = `<p class="empty-state">${currentLang === 'uz' ? '📭 Blok ' + currentBlock + ' da savol yo\'q' : '📭 В блоке ' + currentBlock + ' нет вопросов'}</p>`;
        return;
    }

    list.innerHTML = questions.map((q, i) => {
        const letters = ['A', 'B', 'C', 'D'];
        const optsHtml = q.options.map((o, oi) => 
            `<span class="q-opt${oi === q.correct ? ' q-correct' : ''}">${letters[oi]}: ${o}</span>`
        ).join(' ');
        return `
            <div class="admin-q-card">
                <div class="q-card-body">
                    <span class="q-number">#${i + 1}</span>
                    <span class="q-text-display">${q.text}</span>
                    <div class="q-opts">${optsHtml}</div>
                </div>
                <button class="q-delete" onclick="deleteQ(${i})" title="${currentLang === 'uz' ? 'O\'chirish' : 'Удалить'}">🗑</button>
            </div>
        `;
    }).join('');
}

// ============ O'CHIRISH ============
function deleteQ(index) {
    const t = adminTr[currentLang];
    if (!confirm(t.confirmDelete)) return;
    const db = getDB();
    if (db[currentLang]?.[currentSubject]?.blocks?.[currentBlock]) {
        const q = db[currentLang][currentSubject].blocks[currentBlock][index];
        // Sheets dan o'chirish
        sheetsAPI('delete', { subject: currentSubject, block: currentBlock, question: q.text });
        db[currentLang][currentSubject].blocks[currentBlock].splice(index, 1);
        saveDB(db);
        renderSubjectChips();
        renderBlockTabs();
        renderQuestions();
    }
}

function clearAll() {
    if (!currentSubject) return;
    const t = adminTr[currentLang];
    if (confirm(currentLang === 'uz' ? `Blok ${currentBlock} dagi barcha savollarni o'chirmoqchimisiz?` : `Удалить все вопросы в блоке ${currentBlock}?`)) {
        const db = getDB();
        if (db[currentLang]?.[currentSubject]?.blocks) {
            sheetsAPI('clear', { subject: currentSubject, block: currentBlock });
            db[currentLang][currentSubject].blocks[currentBlock] = [];
            saveDB(db);
            renderSubjectChips();
            renderBlockTabs();
            renderQuestions();
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

    if (GROQ_API_KEY === 'YOUR_GROQ_API_KEY') {
        showAIFeedback(t.aiNoKey, '#ff4444');
        return;
    }

    document.getElementById('ai-loading').style.display = 'block';
    document.getElementById('ai-feedback').style.display = 'none';
    document.getElementById('ai-generate-btn').disabled = true;

    const langName = currentLang === 'uz' ? 'O\'zbek' : 'Rus';

    const prompt = `Sen test savollarini yaratuvchi mutaxassissan. Quyidagi mavzu bo'yicha ${count} ta test savoli yarat. Har bir savol 4 ta variantdan (A, B, C, D) iborat bo'lsin va faqat bittasi to'g'ri bo'lsin.

Mavzu: ${topic}
Til: ${langName}

Javobni FAQAT JSON formatda qaytar, boshqa hech qanday matn yozma. Format:
[{"text": "Savol matni", "options": ["A variant", "B variant", "C variant", "D variant"], "correct": 0}]

correct - to'g'ri javob indeksi (0=A, 1=B, 2=C, 3=D).`;

    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                messages: [
                    { role: 'system', content: 'Sen test savollarini JSON formatda qaytaruvchi botsan. Har doim faqat JSON array qaytar, boshqa hech narsa yozma.' },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 4000
            })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || 'API xatosi');

        const content = data.choices[0].message.content;
        const jsonMatch = content.match(/\[[\s\S]*\]/);
        if (!jsonMatch) throw new Error('AI JSON formatda javob bermadi');

        const questions = JSON.parse(jsonMatch[0]);
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
        showAIFeedback(t.aiAdded.replace('{n}', added), '#4ade80');
        renderSubjectChips();
        renderBlockTabs();
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
