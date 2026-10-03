# Contact Form Setup Guide

## Current Implementation

The contact form uses **EmailJS** for email delivery (free tier available).

### Features
- ✅ Form validation (name, email, subject, message)
- ✅ Validation on blur
- ✅ Conditional budget/timeline fields for project inquiries
- ✅ Inline success state with "Send another message"
- ✅ Error shake + toast with direct email fallback
- ✅ Accessible form fields with ARIA labels

## Setup Instructions

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. **Email Service:** Dashboard → Email Services → Add New Service → connect Gmail → copy the **Service ID** (`service_xxxxxxx`)
3. **Email Template:** Dashboard → Email Templates → Create Template → copy the **Template ID** (`template_xxxxxxx`)
4. **Public Key:** Account → API Keys → copy the **Public Key**
5. Create a `.env` file in the project root (copy from `.env.example`):
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. Restart the dev server (`npm run dev`) — Vite only reads `.env` at startup

### Recommended Template

Use these variables in your EmailJS template:

| Variable | Value |
|----------|-------|
| `{{name}}` | Sender name |
| `{{email}}` | Sender email (set as Reply-To) |
| `{{subject}}` | Selected subject |
| `{{budget}}` | Budget range (or "Not specified") |
| `{{timeline}}` | Timeline (or "Not specified") |
| `{{message}}` | Message body |

Set the template's **Reply-To** field to `{{email}}` so replies go straight to the sender.

**Free Tier Limits:**
- 200 emails/month
- 2 email services
- Basic spam filtering

## Deployment (Vercel)

The `.env` file is local only. For the deployed site:

1. Vercel dashboard → your project → Settings → Environment Variables
2. Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
3. Redeploy

## Troubleshooting

- **Error toast on submit locally:** Check `.env` exists with all three values, and restart `npm run dev`
- **412 / 401 errors from EmailJS:** Service not connected or Public Key wrong
- **Emails not arriving:** Check the EmailJS dashboard → Email Templates → Test button, and your Gmail spam folder
