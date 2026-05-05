const bioTemplates = {
    instagram: [
        {
            id: 1,
            name: 'Minimalist',
            description: 'Clean and simple design',
            template: 'NAME | KEYWORD | emoji emoji emoji',
            premium: false
        },
        {
            id: 2,
            name: 'Professional',
            description: 'Business-focused template',
            template: 'NAME | CEO of KEYWORD | 📧 DM',
            premium: true
        },
        {
            id: 3,
            name: 'Creative',
            description: 'Artistic and unique',
            template: '✨ KEYWORD ✨ | Creating magic | 🎨',
            premium: true
        },
        {
            id: 4,
            name: 'Trendy',
            description: 'Latest viral style',
            template: 'NAME ⚡ | KEYWORD | 🔥 | DM business',
            premium: true
        },
        {
            id: 5,
            name: 'Motivational',
            description: 'Inspiring and empowering',
            template: 'KEYWORD | 🚀 Growing | 💪 Mindset | 🌟',
            premium: true
        }
    ],
    twitter: [
        {
            id: 1,
            name: 'Classic',
            description: 'Simple and direct',
            template: 'KEYWORD | NAME | Building stuff',
            premium: false
        },
        {
            id: 2,
            name: 'Developer',
            description: 'Tech-focused',
            template: 'NAME | Dev | KEYWORD | Open source',
            premium: true
        },
        {
            id: 3,
            name: 'Influencer',
            description: 'Social media focused',
            template: 'KEYWORD Creator | 📱 | Collab 👇 | DM',
            premium: true
        }
    ]
};

const getPremiumTemplates = (platform) => {
    const templates = bioTemplates[platform] || bioTemplates.instagram;
    return templates.filter(t => t.premium);
};

const getFreeTemplates = (platform) => {
    const templates = bioTemplates[platform] || bioTemplates.instagram;
    return templates.filter(t => !t.premium);
};

const getAllTemplates = (platform) => {
    return bioTemplates[platform] || bioTemplates.instagram;
};

module.exports = {
    getPremiumTemplates,
    getFreeTemplates,
    getAllTemplates,
    bioTemplates
};
