import { createHmac } from 'crypto';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const KV_URL    = process.env.KV_REST_API_URL;
const KV_TOKEN  = process.env.KV_REST_API_TOKEN;

function tg(method, body) {
    return fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}

// KV mavjud bo'lsa saqlaydi, bo'lmasa o'tkazib yuboradi
async function trySave(code, userData) {
    if (!KV_URL || !KV_TOKEN) return false;
    try {
        const r = await fetch(
            `${KV_URL}/set/${encodeURIComponent('tgcode:' + code)}/${encodeURIComponent(JSON.stringify(userData))}/EX/300`,
            { headers: { Authorization: `Bearer ${KV_TOKEN}` } }
        );
        return r.ok;
    } catch { return false; }
}

// HMAC asosida deterministik kod (KV bo'lmasa ham ishlaydi)
function hmacCode(userId) {
    const window = Math.floor(Date.now() / 300000); // 5 daqiqalik oyna
    return createHmac('sha256', BOT_TOKEN)
        .update(`${userId}:${window}`)
        .digest('hex')
        .replace(/\D/g, '')
        .slice(0, 6)
        .padStart(6, '1');
}

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(200).send('OK');

    try {
        const msg = req.body?.message;
        if (!msg) return res.status(200).send('OK');

        const chatId = msg.chat.id;
        const user   = msg.from;
        const text   = (msg.text || '').trim();
        const name   = [user.first_name, user.last_name].filter(Boolean).join(' ') || 'Foydalanuvchi';

        if (text === '/start' || text === '/kod') {
            const code = hmacCode(user.id);

            const userData = { id: user.id, name, username: user.username || '' };
            await trySave(code, userData);

            await tg('sendMessage', {
                chat_id:    chatId,
                parse_mode: 'Markdown',
                text: `👋 Salom, *${name}*!\n\nSizning kirish kodingiz:\n\n🔑  \`${code}\`\n\nSaytga kiriting: prowebexam\\.vercel\\.app\n⏱ Kod *5 daqiqa* amal qiladi\\.`
            });
        }

        return res.status(200).send('OK');
    } catch (e) {
        console.error('Bot error:', e.message);
        return res.status(200).send('OK');
    }
}
