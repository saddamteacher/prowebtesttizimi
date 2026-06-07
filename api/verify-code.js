import { createHmac } from 'crypto';

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

function timeWindow() {
    return Math.floor(Date.now() / (5 * 60 * 1000));
}

// Vercel KV REST API (Vercel dashboard dan bir click bilan yoqiladi)
const KV_URL   = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

async function kvGet(key) {
    if (!KV_URL) return null;
    const r = await fetch(`${KV_URL}/get/${encodeURIComponent(key)}`, {
        headers: { Authorization: `Bearer ${KV_TOKEN}` }
    });
    const d = await r.json();
    return d.result ? JSON.parse(d.result) : null;
}

async function kvDel(key) {
    if (!KV_URL) return;
    await fetch(`${KV_URL}/del/${encodeURIComponent(key)}`, {
        headers: { Authorization: `Bearer ${KV_TOKEN}` }
    });
}

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { code } = req.body || {};
    if (!code) return res.status(400).json({ error: 'Kod kiritilmadi' });

    const clean = String(code).trim();

    try {
        // KV dan foydalanuvchi ma'lumotini olish
        const user = await kvGet(`tgcode:${clean}`);

        if (!user) {
            return res.status(404).json({ error: 'Kod noto\'g\'ri yoki 5 daqiqa o\'tib ketdi' });
        }

        // Bir martalik — o'chiramiz
        await kvDel(`tgcode:${clean}`);

        return res.status(200).json({ ok: true, user });

    } catch (e) {
        console.error('verify-code:', e.message);
        return res.status(500).json({ error: 'Server xatosi' });
    }
}
