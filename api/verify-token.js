import { createHmac } from 'crypto';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { token } = req.body || {};
    if (!token) return res.status(400).json({ error: 'Token yo\'q' });

    try {
        const [payload, sig] = token.split('.');
        if (!payload || !sig) return res.status(400).json({ error: 'Token noto\'g\'ri' });

        // Imzoni tekshirish
        const expected = createHmac('sha256', BOT_TOKEN)
            .update(payload)
            .digest('base64url')
            .slice(0, 20);

        if (sig !== expected) {
            return res.status(401).json({ error: 'Token soxta' });
        }

        const data = JSON.parse(Buffer.from(payload, 'base64url').toString());

        // Muddati tekshirish
        if (data.exp < Math.floor(Date.now() / 1000)) {
            return res.status(401).json({ error: 'Token muddati o\'tgan' });
        }

        return res.status(200).json({
            ok: true,
            user: { id: data.id, name: data.n, username: data.u }
        });

    } catch (e) {
        return res.status(400).json({ error: 'Token xato' });
    }
}
