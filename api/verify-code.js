const KV_URL   = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { code } = req.body || {};
    if (!code) return res.status(400).json({ error: 'Kod kiritilmadi' });

    if (!KV_URL || !KV_TOKEN) {
        return res.status(503).json({ error: 'Vercel KV ulanmagan — admin sozlashi kerak' });
    }

    const clean = String(code).trim();

    try {
        const r = await fetch(
            `${KV_URL}/get/${encodeURIComponent('tgcode:' + clean)}`,
            { headers: { Authorization: `Bearer ${KV_TOKEN}` } }
        );
        const data = await r.json();

        if (!data.result) {
            return res.status(404).json({ error: 'Kod noto\'g\'ri yoki 5 daqiqa o\'tib ketdi' });
        }

        const user = JSON.parse(data.result);

        // Bir martalik — o'chiramiz
        await fetch(
            `${KV_URL}/del/${encodeURIComponent('tgcode:' + clean)}`,
            { headers: { Authorization: `Bearer ${KV_TOKEN}` } }
        );

        return res.status(200).json({ ok: true, user });

    } catch (e) {
        console.error('verify-code:', e.message);
        return res.status(500).json({ error: 'Server xatosi' });
    }
}
