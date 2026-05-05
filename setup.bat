@echo off
REM Bio Generator - Quick Setup Script for Windows

echo 🚀 Bio Generator Setup Script
echo ==============================
echo.

REM Check Node.js
echo ✓ Checking Node.js...
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ Node.js not found. Please install Node.js 16+ from nodejs.org
    exit /b 1
)
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✓ Node.js %NODE_VERSION% found
echo.

REM Setup Backend
echo 📦 Setting up Backend...
cd backend
call npm install
if not exist .env (
    echo Creating .env file...
    (
        echo PORT=5000
        echo NODE_ENV=development
        echo OPENAI_API_KEY=your_api_key_here
        echo HUGGINGFACE_API_KEY=your_api_key_here
        echo CORS_ORIGIN=http://localhost:3000
    ) > .env
    echo ✓ Backend .env created
)
cd ..
echo ✓ Backend setup complete
echo.

REM Setup Frontend
echo 📦 Setting up Frontend...
cd frontend
call npm install
if not exist .env (
    echo Creating .env file...
    (
        echo REACT_APP_API_URL=http://localhost:5000/api
    ) > .env
    echo ✓ Frontend .env created
)
cd ..
echo ✓ Frontend setup complete
echo.

echo ==============================
echo ✅ Setup Complete!
echo ==============================
echo.
echo 🎯 Next Steps:
echo 1. Update API keys in backend\.env
echo 2. Run backend: cd backend ^&^& npm run dev
echo 3. Run frontend: cd frontend ^&^& npm start
echo 4. Open http://localhost:3000
echo.
echo 📚 Documentation:
echo - README.md - Overview
echo - DEPLOYMENT_GUIDE.md - Deploy to production
echo - SEO_STRATEGY.md - SEO optimization
echo - MONETIZATION_GUIDE.md - Make money
echo.
