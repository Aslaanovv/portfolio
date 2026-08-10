# Contact Form Setup Guide

## Current Implementation

The contact form uses **Formspree** for email delivery (free tier available).

### Features
- ✅ Form validation (name, email, subject, message)
- ✅ Loading state during submission
- ✅ Success toast notification
- ✅ Error handling with fallback
- ✅ Accessible form fields with ARIA labels

## Setup Instructions

### Option 1: Formspree (Recommended - Free Tier)

1. Go to [formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy your Formspree ID
5. Update `Contact.tsx` line 38:
   ```ts
   const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
   ```

**Free Tier Limits:**
- 50 submissions/month
- 1 form
- Email notifications

### Option 2: Resend (Requires Backend API)

For production with higher volume:

1. Create a Vercel Edge Function at `api/contact.ts`:
   ```ts
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export default async function handler(req: Request) {
     const { name, email, subject, message } = await req.json();

     await resend.emails.send({
       from: 'portfolio@yourdomain.com',
       to: 'contact@aslaan.dev',
       subject: `${subject} - from ${name}`,
       html: `
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong></p>
         <p>${message}</p>
       `
     });

     return Response.json({ success: true });
   }
   ```

2. Update Contact.tsx to fetch from `/api/contact`

### Option 3: GetForm (Alternative)

Similar to Formspree:
- [getform.io](https://getform.io/)
- Free tier: 50 submissions/month

## Current Status

- ✅ Form validation
- ✅ Loading states
- ⏳ Email integration (requires Formspree ID)
- ⏳ Production backend (optional)

## Next Steps

1. **Set up Formspree** (5 minutes) - Get your free ID
2. **Test the form** - Verify submissions work
3. **Add spam protection** - Formspree offers honeypot, reCAPTCHA
4. **Monitor analytics** - Formspree has basic analytics
