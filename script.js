// Configuration
const TELEGRAM_BOT_TOKEN = '8858840945:AAHjKeZ8O3rL5DG6QpS3O8vHvG4uAg99vZw';
const TELEGRAM_CHAT_ID = '-1003999561353';
const GROQ_API_KEY_SCRIPT = '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';
const TELEGRAM_BOT_USERNAME = '@prowebloginbot'; // @BotFather dan olingan bot username

// Telegram user data
let telegramUser = null;

// Data
const subjects = [
    { id: '3ds-max', uzName: '3ds Max va AutoCAD', ruName: '3ds max & autocad', img: '3ds max & autocad.png', color: '#00ccff' },
    { id: 'data-analyst', uzName: 'Data Analyst', ruName: 'Data Analyst', img: 'Data Analyst 2.png', color: '#ffdc0a' },
    { id: 'data-science', uzName: 'Data Science', ruName: 'Data Science', img: 'Data Sciense.png', color: '#2cacba' },
    { id: 'motion-design', uzName: 'Motion dizayn va Video montaj', ruName: 'Motion design & Видеомонтаж', img: 'Motion design & Видеомонтаж.png', color: '#942ae9' },
    { id: 'qa', uzName: "Dasturiy ta'minot testi (QA)", ruName: 'QA', img: 'QA.png', color: '#96a7b1' },
    { id: 'blender', uzName: 'Blender', ruName: 'Blender', img: 'blender.png', color: '#ff892d' },
    { id: 'mc-office', uzName: 'MS Office', ruName: 'MS Office', img: 'mc office.png', color: '#33b766' },
    { id: 'pro-design', uzName: 'Pro Dizayn', ruName: 'Pro Design', img: 'pro design.png', color: '#ff9000' },
    { id: 'pro-smm', uzName: 'Pro SMM', ruName: 'Pro SMM', img: 'pro smm.png', color: '#00aaa0' },
    { id: 'python', uzName: 'Python', ruName: 'Python', img: 'python.png', color: '#cbf729' },
    { id: 'basic', uzName: 'Baza kursi', ruName: 'Базовый курс', img: 'базовый курс.png', color: '#babaff' },
    { id: 'web-dev', uzName: 'Veb dasturlash', ruName: 'Веб программирование', img: 'веб программирование.png', color: '#2e2efb' },
    { id: 'marketing', uzName: 'Internet marketing', ruName: 'Интернет маркетинг', img: 'интернет маркетинг.png', color: '#ff0000' },
    { id: 'pc-build', uzName: "Kompyuter yig'ish", ruName: 'Компьютерная сборка', img: 'компьютерная сборка.png', color: '#50d636' },
    { id: 'mobilography', uzName: 'Mobilografiya', ruName: 'Мобилография', img: 'мобилография.png', color: '#a07aff' },
    { id: 'start-it', uzName: 'IT da start', ruName: 'Старт в IT', img: 'старт в it.png', color: '#00b3ce' },
    { id: 'young-dev', uzName: 'Yosh dasturchi', ruName: 'Юный программист', img: 'юный программист.png', color: '#ffff00' }
];

const translations = {
    uz: {
        pageTitle: "Yo'nalishni tanlang",
        pageSubtitle: "O'zingizga mos yo'nalishni tanlang va testni boshlang",
        backLink: "Orqaga",
        testTitle: "Test",
        userInfoTitle: "Ma'lumotlaringizni kiriting",
        labelName: "Ism va Familiya",
        labelPhone: "Telefon raqam",
        startTestBtn: "Testni boshlash",
        nextBtn: "Keyingi (O'tkazish)",
        finishBtn: "Testni yakunlash",
        resultTitle: "✅ Test Yakunlandi",
        resultMsg: "Qatnashganingiz uchun rahmat! Siz bilan tez orada bog'lanamiz.",
        homeBtn: "Bosh sahifaga qaytish",
        noQuestions: "Ushbu fan bo'yicha test savollari hozircha yo'q."
    },
    ru: {
        pageTitle: "Выберите направление",
        pageSubtitle: "Выберите подходящее направление и начните тест",
        backLink: "Назад",
        testTitle: "Тест",
        userInfoTitle: "Введите ваши данные",
        labelName: "Имя и Фамилия",
        labelPhone: "Номер телефона",
        startTestBtn: "Начать тест",
        nextBtn: "Следующий (Пропустить)",
        finishBtn: "Завершить тест",
        resultTitle: "✅ Тест Завершён",
        resultMsg: "Спасибо за участие! Мы скоро с вами свяжемся.",
        homeBtn: "Вернуться на главную",
        noQuestions: "Вопросов по этому предмету пока нет."
    }
};

let currentLang = localStorage.getItem('lang') || 'uz';
let currentSubject = localStorage.getItem('currentSubject') || null;

// Test state
let testQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;
let blockScores = {};
let timerInterval;
let timeLeft = 15;
const TIMER_SECONDS = 15;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Inject neon orbs
    const orbs = [
        { cls: 'neon-orb neon-orb-1' },
        { cls: 'neon-orb neon-orb-2' },
        { cls: 'neon-orb neon-orb-3' }
    ];
    orbs.forEach(o => {
        const div = document.createElement('div');
        div.className = o.cls;
        document.body.appendChild(div);
    });

    initLang();
    
    if (document.getElementById('subjects-container')) {
        renderSubjects();
    }
    
    if (document.getElementById('test-container')) {
        initTestPage();
        checkAutoLogin();
    }
});

// Language Logic
let logoClicks = 0;
let logoClickTimer = null;

function initLang() {
    updateLangUI();
    
    // Logo 3-click admin access
    const mainLogo = document.getElementById('main-logo');
    if (mainLogo) {
        mainLogo.style.cursor = 'pointer';
        mainLogo.title = '';
        mainLogo.addEventListener('click', (e) => {
            e.preventDefault();
            logoClicks++;
            clearTimeout(logoClickTimer);
            logoClickTimer = setTimeout(() => { logoClicks = 0; }, 1500);
            if (logoClicks >= 3) {
                logoClicks = 0;
                clearTimeout(logoClickTimer);
                window.location.href = 'admin.html';
            }
        });
    }
    
    const langUzBtn = document.getElementById('lang-uz-btn');
    const langRuBtn = document.getElementById('lang-ru-btn');
    
    if (langUzBtn) {
        langUzBtn.addEventListener('click', () => {
            currentLang = 'uz';
            localStorage.setItem('lang', currentLang);
            updateLangUI();
            applyTranslations();
            if (document.getElementById('subjects-container')) renderSubjects();
        });
    }
    
    if (langRuBtn) {
        langRuBtn.addEventListener('click', () => {
            currentLang = 'ru';
            localStorage.setItem('lang', currentLang);
            updateLangUI();
            applyTranslations();
            if (document.getElementById('subjects-container')) renderSubjects();
        });
    }
    
    applyTranslations();
}

function updateLangUI() {
    const langUzBtn = document.getElementById('lang-uz-btn');
    const langRuBtn = document.getElementById('lang-ru-btn');
    const mainLogo = document.getElementById('main-logo');
    
    if (langUzBtn && langRuBtn) {
        if (currentLang === 'uz') {
            langUzBtn.classList.add('active');
            langRuBtn.classList.remove('active');
            if(mainLogo) mainLogo.src = 'files/logo uzb.png';
        } else {
            langRuBtn.classList.add('active');
            langUzBtn.classList.remove('active');
            if(mainLogo) mainLogo.src = 'files/logo ru.png';
        }
    }
}

function applyTranslations() {
    const t = translations[currentLang];
    
    const elements = {
        'page-title': t.pageTitle,
        'page-subtitle': t.pageSubtitle,
        'back-link': t.backLink,
        'user-info-title': t.userInfoTitle,
        'label-name': t.labelName,
        'label-phone': t.labelPhone,
        'start-test-btn': t.startTestBtn,
        'next-q-btn': t.nextBtn,
        'finish-early-btn': t.finishBtn,
        'result-title': t.resultTitle,
        'result-message': t.resultMsg,
        'home-btn': t.homeBtn
    };

    for (const [id, text] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }
}

// Render Subjects
function renderSubjects() {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    subjects.forEach(subject => {
        const name = currentLang === 'uz' ? subject.uzName : subject.ruName;
        
        const a = document.createElement('a');
        a.href = 'test.html';
        a.className = 'subject-card';
        a.addEventListener('click', () => {
            localStorage.setItem('currentSubject', subject.id);
            localStorage.setItem('currentSubjectNameUz', subject.uzName);
            localStorage.setItem('currentSubjectNameRu', subject.ruName);
            localStorage.setItem('currentSubjectImg', subject.img);
        });
        
        a.innerHTML = `
            <img src="files/${subject.img}" alt="${name}">
            <div class="subject-title">${name}</div>
        `;
        
        a.style.setProperty('--brand-color', subject.color);
        
        container.appendChild(a);
    });
}

// Test Logic
function initTestPage() {
    const subjectName = currentLang === 'uz' ? localStorage.getItem('currentSubjectNameUz') : localStorage.getItem('currentSubjectNameRu');
    const subjectImg = localStorage.getItem('currentSubjectImg');
    
    const titleEl = document.getElementById('subject-title');
    if (titleEl && subjectName) {
        titleEl.textContent = subjectName + ' — ' + (currentLang === 'uz' ? 'Saralash Testi' : 'Отборочный Тест');
    }

    const logoEl = document.getElementById('selected-subject-logo');
    if (logoEl && subjectImg) {
        logoEl.src = `files/${subjectImg}`;
        logoEl.style.display = 'block';
    }

    const startBtn = document.getElementById('start-test-btn');
    if (startBtn) startBtn.addEventListener('click', startTest);
    const nextBtn = document.getElementById('next-q-btn');
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    const finishBtn = document.getElementById('finish-early-btn');
    if (finishBtn) finishBtn.addEventListener('click', endTest);
}

// ============ TELEGRAM AUTH ============
function checkAutoLogin() {
    const params = new URLSearchParams(window.location.search);

    // Yangi: imzolangan token
    const token = params.get('t');
    if (token) {
        fetch('/api/verify-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        })
        .then(r => r.json())
        .then(data => {
            if (data.ok) {
                onTelegramAuth(data.user);
                // URL ni tozalaymiz
                history.replaceState({}, '', window.location.pathname);
            }
        })
        .catch(() => {});
        return true;
    }

    // Eski: tg_id URL parametri
    const tgId = params.get('tg_id');
    if (tgId) {
        onTelegramAuth({
            id: parseInt(tgId),
            first_name: params.get('tg_name') || 'User',
            username: params.get('tg_username') || ''
        });
        return true;
    }

    return false;
}

function onTelegramAuth(user) {
    telegramUser = user;
    
    const name = user.first_name || 'User';
    
    localStorage.setItem('testUser', JSON.stringify({
        name: name,
        phone: '@' + (user.username || 'ID' + user.id),
        telegramId: user.id,
        telegramUsername: user.username || '',
        telegramPhoto: user.photo_url || ''
    }));
    
    const statusEl = document.getElementById('telegram-status');
    if (statusEl) {
        statusEl.textContent = '✅ ' + name;
        statusEl.style.display = 'block';
    }
    
    const loginLink = document.getElementById('telegram-login-link');
    if (loginLink) loginLink.style.display = 'none';
    
    setTimeout(() => startTestLogic(), 600);
}

function startTest() {
    startTestAfterAuth();
}

function startTestAfterAuth() {
    currentSubject = localStorage.getItem('currentSubject');
    startTestLogic();
}

function startTest() {
    startTestAfterAuth();
}

function startTestAfterAuth() {
    currentSubject = localStorage.getItem('currentSubject');
    startTestLogic();
}

function startTest() {
    startTestAfterAuth();
}

function startTestAfterAuth() {
    currentSubject = localStorage.getItem('currentSubject');
    startTestLogic();
}

function startTestLogic() {
    const userData = JSON.parse(localStorage.getItem('testUser'));
    if (!userData || !userData.name) return;
    
    // Placement test: har bir blokdan 2-3 tadan savol
    const db = JSON.parse(localStorage.getItem('testDB')) || {};
    // uz ga fallback: agar ru da savol bo'lmasa uz dan olish
    let langDB = db[currentLang] || {};
    if (!langDB[currentSubject] && db['uz']?.[currentSubject]) {
        langDB = db['uz'];
    }
    const subjectData = langDB[currentSubject];
    
    testQuestions = [];
    blockScores = {};
    
    if (subjectData && subjectData.blocks) {
        const blockKeys = Object.keys(subjectData.blocks).sort((a, b) => parseInt(a) - parseInt(b));
        blockKeys.forEach(blockNum => {
            const qs = subjectData.blocks[blockNum] || [];
            blockScores[blockNum] = { correct: 0, total: 0 };
            const shuffled = [...qs].sort(() => Math.random() - 0.5);
            const selected = shuffled.slice(0, Math.min(5, shuffled.length));
            selected.forEach(q => {
                testQuestions.push({ ...q, blockNum: parseInt(blockNum) });
                blockScores[blockNum].total++;
            });
        });
    } else if (Array.isArray(subjectData)) {
        testQuestions = subjectData;
    }
    
    if (testQuestions.length === 0) {
        document.getElementById('user-info-form').style.display = 'none';
        document.getElementById('test-container').style.display = 'block';
        document.getElementById('single-question-wrapper').innerHTML = `<p style="text-align:center; padding: 20px;">${translations[currentLang].noQuestions}</p>`;
        document.getElementById('next-q-btn').style.display = 'none';
        document.getElementById('finish-early-btn').style.display = 'none';
        document.getElementById('timer-display').style.display = 'none';
        return;
    }
    
    document.getElementById('user-info-form').style.display = 'none';
    document.getElementById('test-container').style.display = 'block';
    
    currentQuestionIndex = 0;
    userScore = 0;
    renderSingleQuestion();
}

function renderSingleQuestion() {
    const wrapper = document.getElementById('single-question-wrapper');
    const q = testQuestions[currentQuestionIndex];

    // Parse code blocks marked with ```
    function parseQuestionText(text) {
        const parts = text.split('```');
        if (parts.length < 3) {
            return `<div class="question-main-text">${text}</div>`;
        }
        let html = `<div class="question-main-text">${parts[0]}</div>`;
        for (let i = 1; i < parts.length; i++) {
            if (i % 2 === 1) {
                // code block — strip leading lang hint (python, js, etc)
                const code = parts[i].replace(/^(python|js|javascript|html|css|sql|bash)\n/, '');
                html += `<pre class="code-block">${escapeHtml(code.trim())}</pre>`;
            } else if (parts[i]) {
                html += `<div class="question-main-text" style="margin-top:8px;">${parts[i]}</div>`;
            }
        }
        return html;
    }

    function escapeHtml(s) {
        return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    const letters = ['A','B','C','D'];
    const optionsHTML = q.options.map((opt, i) => `
        <div class="option-item">
            <label>
                <input type="radio" name="current-q" value="${i}">
                <span style="font-size:0.78rem;font-weight:700;color:rgba(255,255,255,0.4);margin-right:4px;">${letters[i]}.</span>
                ${opt}
            </label>
        </div>`).join('');

    wrapper.innerHTML = `
        <div class="question-label">${currentQuestionIndex + 1} / ${testQuestions.length}</div>
        ${parseQuestionText(q.text)}
        <div class="options-list" style="margin-top:18px;">${optionsHTML}</div>
    `;

    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 15;
    document.getElementById('timer-display').textContent = timeLeft;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    clearInterval(timerInterval);
    
    const selectedOpt = document.querySelector('input[name="current-q"]:checked');
    const q = testQuestions[currentQuestionIndex];
    if (selectedOpt) {
        const answer = parseInt(selectedOpt.value);
        if (answer === q.correct) {
            userScore++;
            if (q.blockNum && blockScores[q.blockNum]) {
                blockScores[q.blockNum].correct++;
            }
        }
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < testQuestions.length) {
        renderSingleQuestion();
    } else {
        endTest();
    }
}

function endTest() {
    clearInterval(timerInterval);
    
    if (currentQuestionIndex < testQuestions.length) {
        const selectedOpt = document.querySelector('input[name="current-q"]:checked');
        const q = testQuestions[currentQuestionIndex];
        if (selectedOpt) {
            const answer = parseInt(selectedOpt.value);
            if (answer === q.correct) {
                userScore++;
                if (q.blockNum && blockScores[q.blockNum]) {
                    blockScores[q.blockNum].correct++;
                }
            }
        }
    }
    
    const percentage = testQuestions.length > 0 ? Math.round((userScore / testQuestions.length) * 100) : 0;
    
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    const resultTitle = document.getElementById('result-title');
    const resultMsg = document.getElementById('result-message');
    const isUz = currentLang === 'uz';
    
    resultTitle.textContent = isUz ? 'Test Yakunlandi' : 'Тест Завершён';

    // Score display
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) scoreDisplay.textContent = `${percentage}%`;

    // Block progress bars
    const blockResultsEl = document.getElementById('block-results');
    if (blockResultsEl && Object.keys(blockScores).length > 0) {
        const blockKeys = Object.keys(blockScores).sort((a,b) => parseInt(a)-parseInt(b));
        blockResultsEl.innerHTML = blockKeys.map(bn => {
            const bs = blockScores[bn];
            const pct = bs.total > 0 ? Math.round(bs.correct / bs.total * 100) : 0;
            const cls = pct >= 60 ? 'bar-pass' : pct >= 40 ? 'bar-mid' : 'bar-fail';
            return `<div class="block-result-row">
                <span class="block-result-label">${isUz ? 'Blok' : 'Блок'} ${bn}</span>
                <div class="block-result-bar-wrap">
                    <div class="block-result-bar ${cls}" style="width:${pct}%"></div>
                </div>
                <span class="block-result-pct">${bs.correct}/${bs.total}</span>
            </div>`;
        }).join('');
    }

    // Show AI recommendation box and fetch analysis
    const aiBox = document.getElementById('ai-recommendation');
    if (aiBox) {
      aiBox.style.display = 'block';
      fetchAIAnalysis(isUz, subjectName, percentage);
    }

    resultMsg.innerHTML = isUz
        ? 'Qatnashganingiz uchun rahmat!<br>Siz bilan tez orada bog\'lanamiz.'
        : 'Спасибо за участие!<br>Мы скоро с вами свяжемся.';
    
    sendToTelegram(userScore, testQuestions.length, percentage);
}

async function verifyCode() {
    const input = document.getElementById('code-input');
    const btn   = document.getElementById('verify-btn');
    const errEl = document.getElementById('code-error');
    const code  = (input?.value || '').replace(/\s/g, '');

    if (code.length < 4) {
        if (errEl) { errEl.textContent = 'Kodni to\'liq kiriting'; errEl.style.display = 'block'; }
        return;
    }

    btn.disabled   = true;
    btn.textContent = '...';
    if (errEl) errEl.style.display = 'none';

    try {
        const res = await fetch('/api/verify-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code })
        });
        const data = await res.json();

        if (!res.ok || !data.ok) {
            if (errEl) {
                errEl.textContent = data.error || 'Kod noto\'g\'ri yoki muddati o\'tgan';
                errEl.style.display = 'block';
            }
            btn.disabled   = false;
            btn.textContent = '✓';
            input.value    = '';
            input.focus();
            return;
        }

        onTelegramAuth(data.user);
    } catch (e) {
        if (errEl) { errEl.textContent = 'Ulanish xatosi'; errEl.style.display = 'block'; }
        btn.disabled   = false;
        btn.textContent = '✓';
    }
}

// Enter tugmasi bilan ham yuborish
document.addEventListener('DOMContentLoaded', () => {
    const ci = document.getElementById('code-input');
    if (ci) ci.addEventListener('keydown', e => { if (e.key === 'Enter') verifyCode(); });
});

async function fetchAIAnalysis(isUz, subjectName, percentage) {
    const aiTextEl = document.getElementById('ai-recommendation-text');
    if (!aiTextEl) return;

    try {
        const res = await fetch('/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                subject: currentSubject,
                subjectName: subjectName,
                lang: currentLang,
                blocks: blockScores,
                total: testQuestions.length,
                score: userScore
            })
        });
        const data = await res.json();
        const startBlock = data.start_block || 1;
        const weakTopics = (data.weak_topics || []).join(', ');
        const msg = data.message || '';

        aiTextEl.innerHTML = `
            <strong style="color:#fff;">${isUz ? startBlock + '-blokdan boshlash tavsiya etiladi' : 'Рекомендуется начать с ' + startBlock + '-го блока'}</strong>
            ${weakTopics ? `<br><span style="color:rgba(255,255,255,0.5);font-size:0.82rem;">${isUz ? 'Kuchaytirish kerak:' : 'Следует улучшить:'} ${weakTopics}</span>` : ''}
            ${msg ? `<br><span style="color:#a5b4fc;font-size:0.88rem;margin-top:6px;display:block;">${msg}</span>` : ''}
        `;
    } catch(e) {
        aiTextEl.innerHTML = `<span style="color:rgba(255,255,255,0.4);font-size:0.85rem;">${isUz ? 'Tahlil yuklanmadi' : 'Анализ недоступен'}</span>`;
    }
}

function sendToTelegram(score, total, percentage) {
    const user = JSON.parse(localStorage.getItem('testUser'));
    const isRu = currentLang === 'ru';
    const subjectName = isRu ? localStorage.getItem('currentSubjectNameRu') : localStorage.getItem('currentSubjectNameUz');
    
    // Telegram user qo'shimcha info
    let tgInfo = '';
    if (user.telegramId) {
        tgInfo = `\n🆔 TG: ${user.telegramUsername ? '@' + user.telegramUsername : 'ID:' + user.telegramId}`;
    }
    
    // Tavsiya qilingan blokni aniqlash
    let recommendation = '';
    if (Object.keys(blockScores).length > 0) {
        const blockKeys = Object.keys(blockScores).sort((a, b) => parseInt(a) - parseInt(b));
        let lastPassed = 0;
        blockKeys.forEach(blockNum => {
            const bs = blockScores[blockNum];
            const pct = bs.total > 0 ? Math.round((bs.correct / bs.total) * 100) : 0;
            if (pct >= 60) lastPassed = parseInt(blockNum);
        });
        
        const maxBlock = parseInt(blockKeys[blockKeys.length - 1]);
        if (lastPassed >= maxBlock) {
            recommendation = isRu ? '✅ Прошёл все блоки — продвинутый уровень' : '✅ Barcha bloklardan o\'tdi — yuqori daraja';
        } else {
            recommendation = isRu ? `🎯 Рекомендуется начать с ${lastPassed + 1} блока` : `🎯 ${lastPassed + 1}-blokdan boshlash tavsiya etiladi`;
        }
    }
    
    const title = isRu ? '📝 Новый тест' : '📝 Yangi test';
    const message = `${title}\n\n👤 ${user.name}\n📱 ${user.phone}${tgInfo}\n📚 ${subjectName}\n🌐 ${currentLang.toUpperCase()}\n📊 ${score}/${total} (${percentage}%)\n${recommendation}`;

    if (TELEGRAM_BOT_TOKEN !== 'YOUR_TELEGRAM_BOT_TOKEN') {
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message })
        }).catch(err => console.error("Telegram error:", err));
    }
}
