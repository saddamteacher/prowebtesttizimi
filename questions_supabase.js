const SB_URL = 'https://efctnllxysvxujxfwqbq.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmY3RubGx4eXN2eHVqeGZ3cWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjMwNTIsImV4cCI6MjA5NjM5OTA1Mn0.WasEqDGMzIY45dkYp6eqSYrHNw8CjU30PBzHADMLgr0';

const SB_HEADERS = {
    'apikey': SB_KEY,
    'Authorization': 'Bearer ' + SB_KEY,
    'Content-Type': 'application/json'
};

// ── O'qish ──────────────────────────────────────────────────────
async function sbGetAll() {
    const r = await fetch(`${SB_URL}/rest/v1/questions?select=*&order=subject,block,id`, {
        headers: SB_HEADERS
    });
    if (!r.ok) return null;
    return await r.json();
}

// ── Yozish ──────────────────────────────────────────────────────
async function sbAdd(q) {
    const r = await fetch(`${SB_URL}/rest/v1/questions`, {
        method: 'POST',
        headers: { ...SB_HEADERS, 'Prefer': 'return=representation' },
        body: JSON.stringify(q)
    });
    return r.ok ? await r.json() : null;
}

// ── O'chirish ────────────────────────────────────────────────────
async function sbDelete(id) {
    const r = await fetch(`${SB_URL}/rest/v1/questions?id=eq.${id}`, {
        method: 'DELETE',
        headers: SB_HEADERS
    });
    return r.ok;
}

async function sbDeleteBlock(subject, block, lang = 'uz') {
    const r = await fetch(
        `${SB_URL}/rest/v1/questions?subject=eq.${subject}&block=eq.${block}&lang=eq.${lang}`,
        { method: 'DELETE', headers: SB_HEADERS }
    );
    return r.ok;
}

// ── Supabase dan testDB ga yuklash ───────────────────────────────
async function loadFromSupabase() {
    try {
        const rows = await sbGetAll();
        if (!rows || rows.length === 0) return null;

        const db = { uz: {}, ru: {} };

        for (const row of rows) {
            const lang  = row.lang || 'uz';
            const subj  = row.subject;
            const blk   = String(row.block);

            if (!db[lang]) db[lang] = {};
            if (!db[lang][subj]) db[lang][subj] = { blockCount: 0, blocks: {} };
            if (!db[lang][subj].blocks[blk]) db[lang][subj].blocks[blk] = [];

            db[lang][subj].blocks[blk].push({
                id:      row.id,
                text:    row.question,
                options: [row.opt1, row.opt2, row.opt3, row.opt4],
                correct: row.correct || 0
            });

            const bn = parseInt(blk);
            if (bn > db[lang][subj].blockCount) db[lang][subj].blockCount = bn;
        }

        return db;
    } catch (e) {
        console.warn('Supabase yuklanmadi:', e.message);
        return null;
    }
}

// ── Sahifa ochilganda ────────────────────────────────────────────
async function initQuestions() {
    const supabase = await loadFromSupabase();
    if (supabase && Object.keys(supabase.uz).length > 0) {
        localStorage.setItem('testDB', JSON.stringify(supabase));
        console.log('✅ Supabase dan yuklandi');
    } else {
        const seed = window.QUESTIONS_SEED;
        if (seed && !localStorage.getItem('testDB')) {
            localStorage.setItem('testDB', JSON.stringify(seed));
            console.log('📦 Seed savollar yuklandi');
        }
    }
}

document.addEventListener('DOMContentLoaded', initQuestions);
