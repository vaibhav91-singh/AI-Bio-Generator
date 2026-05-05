# QUICK START GUIDE

## ⚡ 5-Minute Setup

### Windows Users
```powershell
# Run setup script
setup.bat
```

### Mac/Linux Users
```bash
# Make script executable
chmod +x setup.sh

# Run setup script
./setup.sh
```

---

## 🖥️ Manual Setup (If script doesn't work)

### 1. Backend Setup

```bash
cd backend
npm install
```

Edit `backend/.env`:
```
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

Start backend:
```bash
npm run dev
```

Backend will run on: `http://localhost:5000`

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Edit `frontend/.env`:
```
REACT_APP_API_URL=http://localhost:5000/api
```

Start frontend (in new terminal):
```bash
npm start
```

Frontend will open on: `http://localhost:3000`

---

## 🧪 Test Everything Works

1. **Open** http://localhost:3000
2. **Type keywords** e.g. "developer"
3. **Select platform** (Instagram/Twitter)
4. **Click generate** and see bios appear
5. **Copy a bio** and verify it works
6. **Download bios** and verify file downloads

If everything works → You're ready! 🎉

---

## 🔧 API Keys (Optional for Advanced Features)

### Add AI Features (HuggingFace)

1. Get free API key from huggingface.co
2. Add to `backend/.env`:
   ```
   HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxx
   ```

### Add Analytics (Google Analytics)

1. Go to analytics.google.com
2. Create property
3. Get Measurement ID: `G-XXXXX`
4. Add to `frontend/public/index.html`
5. Replace in analytics script

---

## 📁 Project Structure Explained

```
backend/
├── server.js           ← Main server
├── package.json        ← Dependencies
├── routes/             ← API endpoints
├── controllers/        ← Business logic
└── utils/              ← Helper functions

frontend/
├── src/
│   ├── App.jsx        ← Main component
│   ├── App.css        ← Styling
│   └── components/    ← Reusable parts
├── public/
│   └── index.html     ← HTML template
└── package.json       ← Dependencies
```

---

## 🎨 Customize Colors

Edit `frontend/src/App.css`:

```css
:root {
  --primary: #7C3AED;      /* Main purple */
  --secondary: #06B6D4;    /* Cyan accent */
  --accent: #EC4899;       /* Pink highlight */
  --success: #10B981;      /* Green for success */
}
```

Choose from:
- Purples: `#7C3AED`, `#A855F7`, `#D946EF`
- Blues: `#06B6D4`, `#0284C7`, `#3B82F6`
- Pinks: `#EC4899`, `#F43F5E`, `#FF6B9D`
- Greens: `#10B981`, `#34D399`, `#6EE7B7`

---

## 📝 Customize Content

### Change Site Name & Title

1. `frontend/public/index.html` - Line 30
2. `frontend/src/components/SEO.jsx` - Line 4
3. `frontend/src/App.jsx` - Line 45

### Change Bio Suggestions

Edit `backend/controllers/bioController.js`:
- Lines 8-18: Free templates
- Lines 20-30: Premium templates

### Change Features List

Edit `frontend/src/App.jsx` lines 265-300

### Change FAQ Answers

Edit `frontend/src/App.jsx` lines 315-330

---

## 🚀 Deploy to Production

### Step 1: Deploy Backend
- Go to render.com OR heroku.com OR railway.app
- Push code to GitHub
- Connect repo → Deploy
- Note the API URL: `https://your-api.com`

### Step 2: Deploy Frontend
- Go to vercel.com OR netlify.com
- Push code to GitHub
- Connect repo → Deploy
- Set `REACT_APP_API_URL=https://your-api.com/api`

### Step 3: Connect
Update production API URL in frontend environment variables

For detailed instructions: See `DEPLOYMENT_GUIDE.md`

---

## 💰 Setup Monetization

### Step 1: Google AdSense
1. Apply at google.com/adsense
2. Wait for approval (5-7 days)
3. Get publisher ID
4. Add code to frontend/public/index.html

### Step 2: Add Premium Features
- Optional monthly subscription
- See `MONETIZATION_GUIDE.md` for details

For detailed instructions: See `MONETIZATION_GUIDE.md`

---

## 🔍 SEO Optimization

### Immediate Setup (15 minutes)
1. Replace all `your-domain.com` with your actual domain
2. Create og-image.jpg (1200x630px)
3. Update robots.txt with your domain
4. Update sitemap.xml with your domain

### Month 1
1. Setup Google Search Console
2. Setup Google Analytics
3. Submit sitemap
4. Verify domain

### Ongoing
1. Write blog posts targeting keywords
2. Build backlinks
3. Monitor rankings

For strategy: See `SEO_STRATEGY.md`

---

## 🆘 Troubleshooting

### "Cannot GET /api/bio/generate"
- Backend not running
- Wrong API URL in frontend
- Check both running on correct ports

### "CORS error"
- Check CORS_ORIGIN in backend/.env
- Make sure it matches frontend domain
- Restart backend after changes

### Ads not showing
- Wait for AdSense approval
- Verify publisher ID is correct
- Check ad code is in right location
- Verify domain matches AdSense domain

### Slow performance
- Check page load speed: speedtest.web.dev
- Enable compression (already done)
- Optimize images
- Check API response times

### Bios not generating
- Check API key if using HuggingFace
- Check backend console for errors
- Verify keywords are entered
- Try without special characters

---

## 📚 Learn More

| Document | Purpose |
|----------|---------|
| README.md | Project overview & features |
| DEPLOYMENT_GUIDE.md | Deploy to production |
| SEO_STRATEGY.md | Get ranked on Google |
| MONETIZATION_GUIDE.md | Earn money from site |
| This file | Quick setup |

---

## ✅ Checklist Before Going Live

- [ ] Backend deployed
- [ ] Frontend deployed
- [ ] Domain configured
- [ ] API URLs connected
- [ ] SSL/HTTPS working
- [ ] Google AdSense code added
- [ ] Google Analytics configured
- [ ] Search Console verified
- [ ] Sitemap submitted
- [ ] Meta tags updated
- [ ] Colors customized
- [ ] Content reviewed
- [ ] Mobile tested
- [ ] Performance tested

---

## 🎯 Next 30 Days

**Week 1**
- Launch website
- Setup analytics
- Submit to Search Console

**Week 2-3**
- Write first blog post
- Setup AdSense
- Monitor initial traffic

**Week 3-4**
- Optimize based on analytics
- Start social media promotion
- Add more content

---

## 📞 Support

- **GitHub Issues**: Create issue if bug found
- **Documentation**: Read README files
- **Code Comments**: Check inline comments
- **Stack Overflow**: Tag with project name

---

## 🎉 You're All Set!

1. ✅ Code is ready
2. ✅ Architecture is scalable
3. ✅ SEO is optimized
4. ✅ Monetization is built-in
5. ✅ Deployment is simple

**Now go make money! 🚀**

---

Remember: Success comes from consistent traffic and good user experience. Focus on SEO + user satisfaction first!

Happy building! 💻✨
