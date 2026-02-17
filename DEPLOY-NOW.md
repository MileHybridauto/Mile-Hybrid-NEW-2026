# 🚀 DEPLOY IN 10 MINUTES

## Step 1: Install Node.js
If you don't have it: https://nodejs.org (download LTS version)

## Step 2: Test Locally

```bash
# Open terminal in this folder
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000 - you should see your website!

## Step 3: Deploy to Vercel (FREE Forever)

### Option A: Use Vercel CLI (Fastest)
```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts. Done!

### Option B: Use Vercel Website
1. Create account at https://vercel.com
2. Click "Add New" → "Project"
3. Import from Git (or upload this folder as ZIP)
4. Click "Deploy"

**That's it! Vercel gives you a URL like: mile-hybrid.vercel.app**

## Step 4: Connect Your Domain

In Vercel dashboard:
1. Go to your project
2. Click "Settings" → "Domains"
3. Add "milehybridauto.com"
4. Follow DNS instructions (point to Vercel)
5. Wait 24-48 hours for DNS propagation

## Step 5: Connect Booking Form (IMPORTANT!)

Your form doesn't actually email you yet. Fix this in 5 minutes:

1. Sign up at https://formspree.io (free)
2. Create new form, get endpoint like: `https://formspree.io/f/xyzabc123`
3. In `app/page.js`, search for `handleSubmit`
4. Replace:
```javascript
setTimeout(() => {
  setIsSubmitted(true);
  window.scrollTo(0, 0);
}, 800);
```

With:
```javascript
try {
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  }
} catch (error) {
  alert('Error submitting form. Please call us at (720) 445-4357');
}
```

Save, commit, push to GitHub, and Vercel auto-redeploys!

## ✅ Checklist

- [ ] Tested locally (npm run dev)
- [ ] Deployed to Vercel
- [ ] Connected domain
- [ ] Booking form emails you
- [ ] Tested on mobile phone
- [ ] Added Google Analytics (optional)

## 🆘 Need Help?

**Can't figure it out?**
- Watch Vercel deployment tutorial on YouTube: "How to deploy Next.js to Vercel"
- Or hire someone on Fiverr for $50-100 to deploy it for you

**Vercel is 100% FREE for this website**
- No credit card needed
- Automatic HTTPS
- Automatic deployments from GitHub
- CDN worldwide
- Free forever for small sites

Good luck! 🎉
