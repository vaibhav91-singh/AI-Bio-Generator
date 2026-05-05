#!/bin/bash

# Bio Generator - Quick Setup Script

echo "🚀 Bio Generator Setup Script"
echo "=============================="
echo ""

# Check Node.js
echo "✓ Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 16+ from nodejs.org"
    exit 1
fi
echo "✓ Node.js $(node -v) found"
echo ""

# Setup Backend
echo "📦 Setting up Backend..."
cd backend
npm install
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cat > .env << EOF
PORT=5000
NODE_ENV=development
OPENAI_API_KEY=your_api_key_here
HUGGINGFACE_API_KEY=your_api_key_here
CORS_ORIGIN=http://localhost:3000
EOF
    echo "✓ Backend .env created"
fi
cd ..
echo "✓ Backend setup complete"
echo ""

# Setup Frontend
echo "📦 Setting up Frontend..."
cd frontend
npm install
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cat > .env << EOF
REACT_APP_API_URL=http://localhost:5000/api
EOF
    echo "✓ Frontend .env created"
fi
cd ..
echo "✓ Frontend setup complete"
echo ""

echo "=============================="
echo "✅ Setup Complete!"
echo "=============================="
echo ""
echo "🎯 Next Steps:"
echo "1. Update API keys in backend/.env"
echo "2. Run backend: cd backend && npm run dev"
echo "3. Run frontend: cd frontend && npm start"
echo "4. Open http://localhost:3000"
echo ""
echo "📚 Documentation:"
echo "- README.md - Overview"
echo "- DEPLOYMENT_GUIDE.md - Deploy to production"
echo "- SEO_STRATEGY.md - SEO optimization"
echo "- MONETIZATION_GUIDE.md - Make money"
echo ""
