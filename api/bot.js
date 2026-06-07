const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const KV_URL         = process.env.KV_REST_API_URL;
const KV_TOKEN       = process.env.KV_REST_API_TOKEN;

function tg(method, body) {
    return fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}

async function kvSet(key, value, ttlSeconds) {
    await fetch(`${KV_URL}/set/${encodeURIComponent(key)}/${encodeURIComponent(JSON.stringify(value))}/ex/${ttlSeconds}`, {
        headers: { Authorization: `Bearer ${KV_TOKEN}` }
    });
}

function genCode() {
    return String(Math.floor(100000 + Math.random() * 900000));
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
            const code = genCode();

            // KV ga 5 daqiqalik TTL bilan saqlash
            await kvSet(`tgcode:${code}`, {
                id:       user.id,
                name:     name,
                username: user.username || ''
            }, 300);

            await tg('sendMessage', {
                chat_id:    chatId,
                parse_mode: 'Markdown',
                text:
`👋 Salom, *${name}*\\!

Sizning kirish kodingiz:

🔑  \`${code}\`

Saytga kiriting: _prowebexam\\.vercel\\.app_
⏱ Kod *5 daqiqa* amal qiladi\\.`
            });
        }

        return res.status(200).send('OK');
    } catch (e) {
        console.error('Bot error:', e.message);
        return res.status(200).send('OK');
    }
}
