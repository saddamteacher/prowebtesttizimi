/**
 * GitHub JSON dan savollarni yuklash
 * Raw URL: https://raw.githubusercontent.com/USER/REPO/main/questions.json
 */

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/saddamteacher/prowebtesttizimi/master/questions.json';

async function loadFromGitHub() {
    try {
        const res = await fetch(GITHUB_RAW_URL + '?t=' + Date.now());
        if (!res.ok) return null;
        const data = await res.json();
        if (!data || !data.uz) return null;
        console.log('✅ GitHub JSON dan savollar yuklandi');
        return data;
    } catch (e) {
        console.warn('GitHub yuklanmadi, seed ishlatiladi:', e.message);
        return null;
    }
}

async function initQuestions() {
    const seed   = window.QUESTIONS_SEED || { uz: {} };
    const github = await loadFromGitHub();

    if (github && Object.keys(github.uz || {}).length > 0) {
        localStorage.setItem('testDB', JSON.stringify(github));
    } else {
        const existing = localStorage.getItem('testDB');
        if (!existing || existing === '{}') {
            localStorage.setItem('testDB', JSON.stringify(seed));
        }
    }
}

document.addEventListener('DOMContentLoaded', initQuestions);
