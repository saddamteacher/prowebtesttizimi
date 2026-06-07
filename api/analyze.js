const GROQ_API_KEY = process.env.GROQ_API_KEY;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { subject, subjectName, lang, blocks, total, score } = req.body;
  if (!subject || !blocks) return res.status(400).json({ error: 'Missing data' });

  const isUz = lang !== 'ru';
  const pct = total > 0 ? Math.round(score / total * 100) : 0;

  const blockLines = Object.entries(blocks).map(([num, b]) => {
    const p = b.total > 0 ? Math.round(b.correct / b.total * 100) : 0;
    return `  Blok ${num}: ${b.correct}/${b.total} (${p}%)`;
  }).join('\n');

  const prompt = isUz
    ? `Sen ProWeb IT ta'lim markazi o'quvchisining saralash test natijalarini tahlil qiluvchi AI mutaxassissan.

Fan: ${subjectName}
Umumiy natija: ${score}/${total} (${pct}%)
Bloklar bo'yicha natijalar:
${blockLines}

Quyidagi formatda qisqa va aniq javob ber (uzbek tilida):
1. Qaysi blokdan boshlash tavsiya etiladi (konkret raqam)
2. Qaysi mavzular zaif (2-3 ta)
3. Rag'batlantiruvchi bir gap

JSON formatda qaytar:
{"start_block": <raqam>, "weak_topics": ["mavzu1", "mavzu2"], "message": "<tavsiya va rag'bat>"}`
    : `Ты AI-специалист по анализу результатов вступительного тестирования в IT-школе ProWeb.

Направление: ${subjectName}
Общий результат: ${score}/${total} (${pct}%)
Результаты по блокам:
${blockLines}

Дай краткий и точный ответ (на русском):
1. С какого блока рекомендуется начать (конкретный номер)
2. Какие темы слабые (2-3 темы)
3. Одна мотивирующая фраза

Верни в формате JSON:
{"start_block": <номер>, "weak_topics": ["тема1", "тема2"], "message": "<рекомендация и мотивация>"}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: 'Sen faqat JSON formatda javob beruvchi AI ssan. Boshqa matn yozma.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.5,
        max_tokens: 500
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'Groq error');

    const content = data.choices[0].message.content;
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('JSON topilmadi');

    const result = JSON.parse(jsonMatch[0]);
    return res.status(200).json(result);
  } catch (e) {
    console.error('Analyze error:', e.message);
    // Fallback: simple rule-based
    const blockKeys = Object.keys(blocks).sort((a,b) => +a - +b);
    let startBlock = 1;
    for (const bn of blockKeys) {
      const b = blocks[bn];
      const p = b.total > 0 ? b.correct / b.total : 0;
      if (p >= 0.6) startBlock = parseInt(bn) + 1;
    }
    startBlock = Math.min(startBlock, blockKeys.length);
    return res.status(200).json({
      start_block: startBlock,
      weak_topics: [],
      message: isUz
        ? `${startBlock}-blokdan boshlash tavsiya etiladi. Zo'r harakat qildingiz!`
        : `Рекомендуется начать с ${startBlock}-го блока. Отличная работа!`
    });
  }
}
