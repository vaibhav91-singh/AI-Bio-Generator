const generateBio = require('../controllers/bioController');

const generateBioRoute = async (req, res) => {
    try {
        const { keywords } = req.body;
        const result = await generateBio.generateBio(keywords);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    generateBioRoute
};
