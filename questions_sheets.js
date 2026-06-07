/**
 * Google Sheets dan savollarni yuklash
 * Sheet format (1-qator sarlavha):
 * subject | block | question | opt1 | opt2 | opt3 | opt4 | correct
 *
 * correct = 0,1,2,3 (qaysi variant to'g'ri)
 */

const SHEET_ID  = '1ae7NPmE1q9_jpJfKmvxbnJtOCbCysBWnXlL7uuhB8a0';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

function parseCSV(text) {
    const rows = [];
    const lines = text.trim().split('\n');
    for (const line of lines) {
        // CSV parsing: qo'shtirnoq ichidagi vergullarni hisobga oladi
        const cols = [];
        let cur = '', inQ = false;
        for (let i = 0; i < line.length; i++) {
            const ch = line[i];
            if (ch === '"') { inQ = !inQ; continue; }
            if (ch === ',' && !inQ) { cols.push(cur.trim()); cur = ''; continue; }
            cur += ch;
        }
        cols.push(cur.trim());
        rows.push(cols);
    }
    return rows;
}

async function loadFromSheets() {
    try {
        const res = await fetch(SHEET_URL + '&t=' + Date.now());
        if (!res.ok) return null;

        const text = await res.text();
        const rows = parseCSV(text);
        if (rows.length < 2) return null;

        // 1-qator sarlavha — o'tkazib yuboramiz
        const db = { uz: {} };

        for (let i = 1; i < rows.length; i++) {
            const [subject, block, question, opt1, opt2, opt3, opt4, correct] = rows[i];
            if (!subject || !block || !question) continue;

            const subj = subject.trim().toLowerCase();
            const blk  = String(parseInt(block) || 1);
            const corr = parseInt(correct) || 0;

            if (!db.uz[subj]) db.uz[subj] = { blockCount: 0, blocks: {} };
            if (!db.uz[subj].blocks[blk]) db.uz[subj].blocks[blk] = [];

            db.uz[subj].blocks[blk].push({
                text:    question.trim(),
                options: [opt1, opt2, opt3, opt4].map(o => (o || '').trim()),
                correct: corr
            });

            // blockCount ni yangilaymiz
            const bn = parseInt(blk);
            if (bn > db.uz[subj].blockCount) db.uz[subj].blockCount = bn;
        }

        return db;
    } catch (e) {
        console.warn('Sheets yuklanmadi:', e.message);
        return null;
    }
}

// Seed bilan birlashtirish: sheet da bo'lsa sheet ustunlik qiladi
async function initQuestions() {
    const seed   = window.QUESTIONS_SEED || { uz: {} };
    const sheets = await loadFromSheets();

    let finalDB = JSON.parse(JSON.stringify(seed)); // seed nusxasi

    if (sheets && sheets.uz && Object.keys(sheets.uz).length > 0) {
        console.log('✅ Google Sheets dan savollar yuklandi');
        // Sheet da mavjud fanlarni almashtir
        for (const subj of Object.keys(sheets.uz)) {
            finalDB.uz[subj] = sheets.uz[subj];
        }
    } else {
        console.log('📦 Seed savollar ishlatilmoqda');
    }

    localStorage.setItem('testDB', JSON.stringify(finalDB));
}

// Sahifa ochilganda yukla
document.addEventListener('DOMContentLoaded', initQuestions);
