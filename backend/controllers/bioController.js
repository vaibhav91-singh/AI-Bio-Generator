const axios = require('axios');

// Using Google Gemini API
const generateBioWithGemini = async (keywords) => {
    try {
        const prompt = `Create a creative, engaging Instagram/Twitter bio (max 160 characters) based on these keywords: ${keywords}. Make it catchy, professional, and unique.`;

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`,
            {
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data.candidates[0]?.content?.parts[0]?.text || null;
    } catch (error) {
        console.error('Gemini API Error:', error.message);
        return null;
    }
};

// Using HuggingFace API (Free tier available)
const generateBioWithHF = async (keywords) => {
    try {
        const prompt = `Create a creative, engaging Instagram/Twitter bio (max 160 characters) based on these keywords: ${keywords}. Make it catchy, professional, and unique.`;

        const response = await axios.post(
            'https://api-inference.huggingface.co/models/gpt2',
            { inputs: prompt },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`
                }
            }
        );

        return response.data[0]?.generated_text || null;
    } catch (error) {
        console.error('HF API Error:', error.message);
        return null;
    }
};

// Fallback local AI bio generator
const generateBioLocal = (keywords) => {
    const templates = [
        `${keywords} | Living my best life ✨`,
        `${keywords} enthusiast 🚀 | Creating magic daily`,
        `${keywords} | Let's grow together 💪`,
        `${keywords} | Turning dreams into reality 🌟`,
        `${keywords} | Always learning, always growing 📈`,
        `${keywords} | Making waves in the industry 🌊`,
        `${keywords} | Creating content that matters 💡`,
        `${keywords} | Your daily dose of inspiration ⚡`,
        `${keywords} | Passionate about ${keywords.split(' ')[0]} 💯`,
        `${keywords} | Changing the game 🎮`,
    ];

    const premiumTemplates = [
        `🌟 ${keywords} | CEO | Entrepreneur | Creator | DM for collabs`,
        `✨ ${keywords} | Building something amazing | Follow for daily insights`,
        `💼 ${keywords} | Professional ${keywords.split(' ')[0]} | Let's connect 🤝`,
        `🚀 ${keywords} | Digital Creator | Content Maven | Growing a movement`,
        `💎 ${keywords} | Exclusive content | Premium tips | Subscribe now`,
    ];

    return {
        free: templates[Math.floor(Math.random() * templates.length)],
        premium: premiumTemplates
    };
};

const generateBio = async (keywords) => {
    if (!keywords || keywords.trim().length === 0) {
        throw new Error('Keywords are required');
    }

    const cleanKeywords = keywords.trim().substring(0, 50);

    // Try Gemini API first, then HF, fallback to local
    let aiBio = null;
    if (process.env.GOOGLE_API_KEY) {
        aiBio = await generateBioWithGemini(cleanKeywords);
    }
    if (!aiBio && process.env.HUGGINGFACE_API_KEY) {
        aiBio = await generateBioWithHF(cleanKeywords);
    }

    const localBios = generateBioLocal(cleanKeywords);

    return {
        keywords: cleanKeywords,
        bios: {
            free: [
                localBios.free,
                `${cleanKeywords} | Creating content you'll love 🎨`,
                `${cleanKeywords} | Join the community 👥`,
            ],
            premium: localBios.premium,
            ai: aiBio ? [aiBio] : []
        },
        tips: [
            '💡 Keep it short and memorable',
            '✨ Use emojis to stand out',
            '🚀 Include what makes you unique',
            '📱 Fit your brand personality'
        ]
    };
};

module.exports = { generateBio };
