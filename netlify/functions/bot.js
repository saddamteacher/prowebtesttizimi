const TELEGRAM_TOKEN = '8858840945:AAHjKeZ8O3rL5DG6QpS3O8vHvG4uAg99vZw';
const SITE_URL = 'https://prowebexam.netlify.app';

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 200, body: 'OK' };
    }
    
    try {
        let body = event.body;
        if (event.isBase64Encoded) {
            body = Buffer.from(body, 'base64').toString('utf-8');
        }
        
        const data = JSON.parse(body);
        
        if (data.message) {
            const chatId = data.message.chat.id;
            const user = data.message.from;
            const text = data.message.text || '';
            
            if (text === '/start' || text.startsWith('/start ')) {
                const userName = [user.first_name, user.last_name].filter(Boolean).join(' ') || 'User';
                const webAppUrl = `${SITE_URL}/test.html?tg_id=${user.id}&tg_name=${encodeURIComponent(userName)}&tg_username=${encodeURIComponent(user.username || '')}`;
                
                await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: `👋 Salom, ${userName}!\n\nTestga kirish uchun pastdagi tugmani bosing:`,
                        reply_markup: {
                            inline_keyboard: [[{
                                text: '🚀 Testni Boshlash',
                                web_app: { url: webAppUrl }
                            }]]
                        }
                    })
                });
            }
        }
        
        return { statusCode: 200, body: 'OK' };
    } catch (e) {
        console.error('Bot error:', e.message);
        return { statusCode: 200, body: 'OK' };
    }
};
