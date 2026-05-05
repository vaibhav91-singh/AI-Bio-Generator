const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
});

app.use('/api/', limiter);

// Routes
const bioRoutes = require('./routes/bioRoutes');
const premiumRoutes = require('./routes/premiumRoutes');
const healthRoutes = require('./routes/healthRoutes');

app.use('/api/bio', bioRoutes);
app.use('/api/premium', premiumRoutes);
app.use('/api/health', healthRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({
        message: 'Bio Generator API Running',
        version: '1.0.0'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Bio Generator API running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});
