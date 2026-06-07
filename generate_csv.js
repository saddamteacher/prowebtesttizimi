// Node.js script: seed dan CSV yasaydi
const fs = require('fs');

// questions_seed.js ni o'qib, window.QUESTIONS_SEED ni olish
let content = fs.readFileSync('./questions_seed.js', 'utf8');
content = content
  .replace('window.QUESTIONS_SEED =', 'const SEED =')
  .replace(/\(function\(\)[\s\S]*?\}\)\(\);/, '') // auto-load blokni o'chirish
  .replace(/window\.QUESTIONS_SEED/g, 'SEED');

eval(content);

function csvEscape(s) {
  s = String(s || '').replace(/\n/g, ' ').replace(/\r/g, '');
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

const rows = ['subject,block,question,opt1,opt2,opt3,opt4,correct'];

const uz = SEED.uz;
for (const subject of Object.keys(uz)) {
  const subData = uz[subject];
  const blocks  = subData.blocks || {};
  for (const blockNum of Object.keys(blocks).sort((a,b)=>+a-+b)) {
    for (const q of blocks[blockNum]) {
      const cols = [
        subject,
        blockNum,
        q.text,
        q.options[0] || '',
        q.options[1] || '',
        q.options[2] || '',
        q.options[3] || '',
        q.correct
      ].map(csvEscape);
      rows.push(cols.join(','));
    }
  }
}

fs.writeFileSync('./questions.csv', rows.join('\n'), 'utf8');
console.log(`✅ questions.csv tayyor: ${rows.length - 1} ta savol`);
