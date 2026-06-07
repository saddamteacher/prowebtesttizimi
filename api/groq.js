const GROQ_API_KEY = process.env.GROQ_API_KEY;

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { topic, count = 5, lang = 'uz', model = 'llama-3.1-8b-instant' } = req.body || {};
    if (!topic) return res.status(400).json({ error: 'Mavzu kiritilmadi' });
    if (!GROQ_API_KEY) return res.status(503).json({ error: 'GROQ_API_KEY sozlanmagan' });

    const langName = lang === 'uz' ? "O'zbek" : 'Rus';
    const isRu = lang === 'ru';
    const systemMsg = isRu
        ? 'Ты генератор тестовых вопросов. Отвечай ТОЛЬКО JSON массивом на русском языке.'
        : 'Sen test savollari generatorisin. FAQAT JSON array qaytar, o\'zbek tilida.';
    const prompt = isRu
        ? `Создай ${count} тестовых вопроса по теме: "${topic}". Все тексты ТОЛЬКО на русском языке. JSON:\n[{"text":"вопрос","options":["А","Б","В","Г"],"correct":0}]`
        : `${count} ta test savoli yarat. Mavzu: "${topic}". Barcha matnlar O'ZBEK tilida. JSON:\n[{"text":"savol","options":["A","B","C","D"],"correct":0}]`;

    try {
        const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    { role: 'system', content: systemMsg },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 800
            })
        });

        const data = await r.json();
        if (!r.ok) throw new Error(data.error?.message || 'Groq xatosi');

        const content = data.choices[0].message.content;
        const match = content.match(/\[[\s\S]*\]/);
        if (!match) throw new Error('JSON topilmadi');

        const questions = JSON.parse(match[0]);
        return res.status(200).json({ questions });

    } catch (e) {
        console.error('Groq error:', e.message);
        return res.status(500).json({ error: e.message });
    }
}
