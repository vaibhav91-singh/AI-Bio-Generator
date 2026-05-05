# DEPLOYMENT GUIDE - Bio Generator

## Prerequisites

- Node.js 16+
- npm or yarn
- A domain name
- Google AdSense account
- Google Analytics account

---

## 1️⃣ BACKEND DEPLOYMENT

### Option A: Deploy on Render (Recommended - Free tier available)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Render Account**
   - Go to render.com
   - Sign up with GitHub

3. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repo
   - Build command: `cd backend && npm install`
   - Start command: `node server.js`
   - Environment variables:
     ```
     NODE_ENV=production
     PORT=5000
     OPENAI_API_KEY=your_key
     HUGGINGFACE_API_KEY=your_key
     CORS_ORIGIN=https://your-frontend-domain.com
     ```

### Option B: Deploy on Heroku

```bash
# Install Heroku CLI
# Login
heroku login

# Create app
heroku create bio-generator-api

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set OPENAI_API_KEY=your_key

# Deploy
git push heroku main
```

### Option C: Deploy on Railway.app

1. Create Railway account
2. Connect GitHub repo
3. Select `backend` directory
4. Add environment variables
5. Deploy

---

## 2️⃣ FRONTEND DEPLOYMENT

### Option A: Deploy on Vercel (Recommended - Best for React)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# During setup:
# - Select "frontend" directory
# - Set environment variables:
#   REACT_APP_API_URL=https://your-api-domain.com/api
```

### Option B: Deploy on Netlify

1. Build the project:
   ```bash
   cd frontend
   npm run build
   ```

2. Go to netlify.com
3. Drag and drop the `dist` folder
4. Set environment variables in site settings

### Option C: Deploy on GitHub Pages

```bash
cd frontend
npm run build
# Deploy dist folder to GitHub Pages
```

---

## 3️⃣ CONNECT FRONTEND & BACKEND

Update frontend `.env.production`:
```
REACT_APP_API_URL=https://your-api-domain.com/api
```

Update backend CORS:
```
CORS_ORIGIN=https://your-frontend-domain.com
```

---

## 4️⃣ SETUP CUSTOM DOMAIN

### Using Vercel (Frontend)
1. Go to Project Settings
2. Add custom domain
3. Follow CNAME instructions
4. Wait for DNS propagation (5-30 minutes)

### Using Render (Backend)
1. Go to service settings
2. Add custom domain
3. Update DNS records

---

## 5️⃣ GOOGLE ADSENSE SETUP

### Add AdSense Code

1. **Get AdSense Code**
   - Go to google.com/adsense
   - Apply for AdSense
   - Wait for approval (5-7 days)
   - Get your publisher ID

2. **Update Frontend**
   - In `frontend/public/index.html`:
     ```html
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID"></script>
     ```

   - In `frontend/src/components/GoogleAds.jsx`:
     Replace `ca-pub-xxxxxxxxxxxxxxxx` with your ID

3. **Add Ad Units**
   - Create ad units in AdSense
   - Add to strategic locations:
     - Top of page (leaderboard 728x90)
     - Sidebar (300x250)
     - Between results (in-feed ads)
     - Bottom of page

---

## 6️⃣ SEO OPTIMIZATION

### Setup Google Search Console

1. Go to search.google.com/search-console
2. Add your domain
3. Verify ownership (DNS/HTML file)
4. Submit sitemap: `https://your-domain.com/sitemap.xml`
5. Monitor search performance

### Setup Google Analytics

1. Go to analytics.google.com
2. Create new property for your website
3. Get Measurement ID: `G-XXXXXXXXXXXXX`
4. Update `frontend/public/index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXXXXX');
   </script>
   ```

### Update Meta Tags

1. Replace `https://your-domain.com` in all meta tags
2. Create og-image.jpg (1200x630px)
3. Update canonical URLs
4. Update robots.txt

---

## 7️⃣ PERFORMANCE OPTIMIZATION

### Frontend

```bash
# Build optimization
cd frontend
npm run build

# Check bundle size
npm run build -- --analyze
```

### Backend

- Enable compression (✓ already set)
- Use caching headers
- Enable rate limiting (✓ already set)
- Monitor API performance

### Database (Optional)

For user data/analytics:
- MongoDB Atlas (free tier)
- PostgreSQL on Railway
- Firebase Realtime Database

---

## 8️⃣ SSL/HTTPS

Both Vercel and Render provide free SSL certificates automatically. No additional setup needed!

---

## 9️⃣ MONITORING & MAINTENANCE

### Setup Monitoring

1. **Error Tracking**
   - Sentry.io (free tier)
   - Integrate with backend

2. **Uptime Monitoring**
   - UptimeRobot.com (free)
   - Monitor `/api/health` endpoint

3. **Analytics**
   - Google Analytics (set up above)
   - Track conversions and user behavior

### Regular Maintenance

- Monitor AdSense earnings
- Check Search Console for errors
- Review analytics monthly
- Update dependencies
- Test all functionality

---

## 🔟 COST BREAKDOWN (Monthly)

| Service | Cost | Notes |
|---------|------|-------|
| Domain | $12 | Namecheap/GoDaddy |
| Vercel (Frontend) | $0-20 | Free tier sufficient |
| Render (Backend) | $7-50 | Free tier has limitations |
| Google Ads | Revenue | Pay-per-click |
| **Total** | **$19-82** | Variable |

---

## 🚀 QUICK START DEPLOYMENT

### Deploy in 10 minutes:

```bash
# 1. Fork/push to GitHub
git push origin main

# 2. Deploy backend (Render)
# - Go to render.com → New Web Service
# - Select your repo → deploy

# 3. Deploy frontend (Vercel)
vercel

# 4. Connect them
# - Update REACT_APP_API_URL in Vercel env vars
# - Update CORS_ORIGIN in Render env vars

# 5. Add domain
# - Point DNS to Vercel nameservers
# - Setup in both platforms

# Done! 🎉
```

---

## ⚡ TROUBLESHOOTING

### Issue: CORS errors
**Solution**: Update CORS_ORIGIN in backend to match frontend domain

### Issue: API calls failing
**Solution**: Check backend is running, verify API_URL is correct

### Issue: Ads not showing
**Solution**: Wait for AdSense approval, verify ad code is in right location

### Issue: Slow performance
**Solution**: 
- Enable CDN (both platforms have it)
- Optimize images
- Enable compression
- Use caching

---

**For support**: Review the main README.md or create GitHub issues

Happy deploying! 🚀
