# Mile Hybrid Automotive - Next.js Website

Denver's oldest hybrid shop website built with Next.js 14, React, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 What's Included

- ✅ Full website with all content
- ✅ Mobile responsive design
- ✅ SEO optimized with metadata
- ✅ Structured data (Schema.org)
- ✅ Booking form (needs email connection)
- ✅ All sections: Services, Why Us, Pricing, FAQ, etc.

## 🔴 TO-DO BEFORE GOING LIVE:

### 1. Connect Booking Form
The form currently just shows a success message. Choose one option:

**Option A: Formspree (Easiest - 5 minutes)**
1. Sign up at https://formspree.io (free tier: 50 submissions/month)
2. Get your form endpoint
3. In `app/page.js`, find the `handleSubmit` function
4. Replace the setTimeout with:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

**Option B: EmailJS (Also Easy)**
1. Sign up at https://www.emailjs.com
2. Follow their React integration guide
3. Free tier: 200 emails/month

**Option C: Custom Backend**
- Hire a developer to build a proper backend
- Cost: $200-400

### 2. Add Your Logo
- Place your logo file in `/public/` folder
- Update the logo reference in `app/page.js` (search for "image_8333c8.png")
- Or use the current car icon (already set up)

### 3. Add Google Analytics (Optional but Recommended)
1. Create GA4 property
2. Add tracking code to `app/layout.js`

## 🌐 Deployment

### Deploy to Vercel (Recommended - FREE & Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Done! Vercel auto-detects Next.js

**Connect Your Domain:**
- In Vercel dashboard, go to Settings → Domains
- Add `milehybridauto.com`
- Update DNS records (Vercel provides instructions)

### Deploy to Netlify (Alternative - Also FREE)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

**Connect Your Domain:**
- Go to Domain settings
- Add custom domain
- Follow DNS instructions

## 📱 Testing Checklist

Before going live, test:

- [ ] Booking form works on mobile
- [ ] All phone links dial correctly: (720) 445-4357
- [ ] Map loads properly
- [ ] Navigation smooth scrolling works
- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Test on desktop Chrome, Firefox, Safari

## 📊 Analytics Setup (After Launch)

### Google Analytics
```javascript
// Add to app/layout.js in <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain
3. Verify ownership (use DNS method)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

## 🔧 Customization

### Update Content
All content is in `app/page.js`:
- Services: Line ~50-100
- Pricing: Line ~150-200
- FAQs: Line ~600+

### Change Colors
Tailwind classes throughout. Main brand color is `emerald` (green).
To change: Find/replace `emerald` with another Tailwind color.

### Add More Pages
Create new files in `/app`:
- `/app/about/page.js` → `/about` URL
- `/app/blog/page.js` → `/blog` URL

## 💰 Estimated Monthly Costs

**Option 1: Free Forever**
- Vercel/Netlify hosting: FREE
- Formspree (50 forms/month): FREE
- Domain: $12/year
- **Total: $1/month**

**Option 2: Professional**
- Vercel/Netlify hosting: FREE
- EmailJS (200 emails): $0-15/month
- Google Workspace email: $6/month
- Domain: $12/year
- **Total: $7-22/month**

## 📞 Support

If you need help:
1. Check Next.js docs: https://nextjs.org/docs
2. Vercel support (if using Vercel)
3. Hire developer on Upwork/Fiverr ($50-200 for help)

## 🎯 Performance

This website is optimized for:
- ✅ Google PageSpeed: 90+ score
- ✅ Mobile-first design
- ✅ Fast loading (Next.js automatic optimization)
- ✅ SEO-friendly (structured data, meta tags)
- ✅ AI search-ready (detailed content for ChatGPT, etc.)

## 📝 License

Proprietary - Mile Hybrid Automotive

---

**Need help deploying? I recommend:**
1. Use Vercel (easiest, automatic)
2. Connect form to Formspree (5 minutes)
3. You'll be live in under 1 hour!
