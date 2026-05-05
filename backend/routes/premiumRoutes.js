const express = require('express');
const router = express.Router();
const { getPremiumTemplates, getFreeTemplates, getAllTemplates } = require('../controllers/premiumController');

router.get('/templates/free/:platform', (req, res) => {
    try {
        const templates = getFreeTemplates(req.params.platform);
        res.json({ templates });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/templates/premium/:platform', (req, res) => {
    try {
        const templates = getPremiumTemplates(req.params.platform);
        res.json({ templates });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/templates/all/:platform', (req, res) => {
    try {
        const templates = getAllTemplates(req.params.platform);
        res.json({ templates });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
