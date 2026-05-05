import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const bioAPI = {
    generateBio: async (keywords) => {
        const response = await axios.post(`${API_BASE_URL}/bio/generate`, { keywords });
        return response.data;
    },

    getTemplates: async (platform, type = 'all') => {
        const response = await axios.get(`${API_BASE_URL}/premium/templates/${type}/${platform}`);
        return response.data.templates;
    },

    getFreeTemplates: async (platform) => {
        return bioAPI.getTemplates(platform, 'free');
    },

    getPremiumTemplates: async (platform) => {
        return bioAPI.getTemplates(platform, 'premium');
    }
};

export default bioAPI;
