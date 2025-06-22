# 💌 Valea

_“Letters from your past, delivered just in time.”_

**Valea** is a time-capsule messaging system for the emotionally chaotic, the soft-hearted, and the temporally curious.  
Write a letter to yourself (or someone else) during moments of clarity, chaos, love, or grief — and let it go.  
You don’t pick the delivery time. The system does. And when the time is right, the letter returns — quietly — like a whisper from the past.

---

## 🪄 Features

- 🌸 **Anonymous Letter Writing** — No logins. No tracking. Just you and your words.
- ⏳ **Randomized Future Delivery** — Letters are delivered between 7-365 days from submission.
- 📎 **Optional Attachments** — Upload a file or image to send with your message.
- 💌 **Email Delivery Engine** — Letters arrive directly in the recipient’s inbox when the moment is right.
- 🛠️ **Admin Stats Dashboard** — View real-time stats on sent, pending, and total letters.

---

## 🧠 Tech Stack

- **Frontend**: Next.js App Router, TailwindCSS, ShadCN/UI
- **Backend**: API Routes with Mongoose + MongoDB
- **Email Delivery**: Nodemailer
- **File Uploads**: Cloudinary
- **Cron Jobs**: Vercel Cron (daily @ 8AM UTC)

---

## 🧪 .env Configuration

```env
# MongoDB
MONGODB_URI=mongodb+srv://...

# Cloudinary
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Email (Nodemailer)
SMTP_USER=...
SMTP_PASS=...
````

---

## 📬 Cron Job Setup (Vercel)

To send letters every day at **8AM UTC**, I used this in my `vercel.json`:

```json
{
  "cron": [
    {
      "path": "/api/letters/send",
      "schedule": "0 8 * * *"
    }
  ]
}
```

---

## 🧘 Philosophy

Valea isn’t about control. It’s about surrender to timing, to healing, to randomness, and to the parts of you that needed to speak.

You don’t get to decide when your message arrives.
But you *will* receive it when you need it.

---

## 🫶 Credits

Built with grief, grace, and a little mischief by [Alexin](https://github.com/alexindevs).
*“Because sometimes healing shows up in your inbox.”*
