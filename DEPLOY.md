# ProWeb — Vercel Deploy Yo'riqnomasi

## 1. Vercel ga deploy

```bash
# Vercel CLI orqali (yoki GitHub orqali)
npx vercel --prod
```

---

## 2. Vercel KV yoqish (Vercel dashboard)

1. vercel.com → Loyiha → **Storage** tab
2. **Create Database** → **KV** tanlang
3. **Connect to Project** bosing
4. Avtomatik qo'shiladi: `KV_REST_API_URL` va `KV_REST_API_TOKEN`

---

## 3. Environment Variables (Vercel → Settings → Environment Variables)

| O'zgaruvchi | Qiymat |
|-------------|--------|
| `TELEGRAM_BOT_TOKEN` | `8858840945:AAHjKeZ8O3rL5DG6QpS3O8vHvG4uAg99vZw` |
| `TELEGRAM_CHAT_ID` | `-1003999561353` |
| `GROQ_API_KEY` | `gsk_dYMv4cr...` |
| `KV_REST_API_URL` | (Vercel KV dan avtomatik) |
| `KV_REST_API_TOKEN` | (Vercel KV dan avtomatik) |
| `SITE_URL` | `https://prowebexam.vercel.app` |

---

## 4. Telegram Webhook o'rnatish (bir marta)

Brauzerda bu URL ni oching:

```
https://api.telegram.org/bot8858840945:AAHjKeZ.../setWebhook?url=https://prowebexam.vercel.app/api/bot
```

Javob: `{"ok":true,"description":"Webhook was set"}`

---

## 5. Ishlashini tekshirish

1. `@prowebloginbot` ga `/start` yozing
2. Kod keldi → saytga kiriting → test boshlanadi ✅

---

## Login flow

```
O'quvchi saytda → "@prowebloginbot ga /start yozing"
        ↓
Bot: "Kodingiz: 🔑 482931"
        ↓
O'quvchi 482931 kiritadi → ✓
        ↓
Ismi olinadi → test boshlanadi
        ↓
Natija → Telegram guruhga yuboriladi
```
