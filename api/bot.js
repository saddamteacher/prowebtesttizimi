import { createHmac } from 'crypto';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const SITE_URL  = process.env.SITE_URL || 'https://prowebexam.vercel.app';

function tg(method, body) {
    return fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}

function makeToken(user) {
    const payload = Buffer.from(JSON.stringify({
        id:  user.id,
        n:   user.name,
        u:   user.username || '',
        exp: Math.floor(Date.now() / 1000) + 3600  // 1 soat
    })).toString('base64url');

    const sig = createHmac('sha256', BOT_TOKEN)
        .update(payload)
        .digest('base64url')
        .slice(0, 20);

    return `${payload}.${sig}`;
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
            const token   = makeToken({ ...user, name });
            const testUrl = `${SITE_URL}/test.html?t=${token}`;

            await tg('sendMessage', {
                chat_id:    chatId,
                parse_mode: 'Markdown',
                text: `👋 Salom, *${name}*!\n\nTestni boshlash uchun pastdagi tugmani bosing:`,
                reply_markup: {
                    inline_keyboard: [[{
                        text: '🚀 Testni Boshlash',
                        url:  testUrl
                    }]]
                }
            });
        }

        return res.status(200).send('OK');
    } catch (e) {
        console.error('Bot error:', e.message);
        return res.status(200).send('OK');
    }
}
