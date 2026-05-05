const express = require('express');
const router = express.Router();
const { generateBio } = require('../controllers/bioController');

router.post('/generate', async (req, res) => {
    try {
        const { keywords } = req.body;
        const result = await generateBio(keywords);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
