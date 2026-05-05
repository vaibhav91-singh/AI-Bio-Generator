import React, { useState, useCallback } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { FiCopy, FiDownload, FiRefreshCw, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SEO from './components/SEO';
import './App.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
    const [keywords, setKeywords] = useState('');
    const [platform, setPlatform] = useState('instagram');
    const [bios, setBios] = useState(null);
    const [loading, setLoading] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState(null);

    const generateBios = useCallback(async () => {
        if (!keywords.trim()) {
            toast.error('Please enter keywords first!');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(
                `${API_BASE_URL}/bio/generate`,
                { keywords: keywords.trim() }
            );
            setBios(response.data);
            toast.success('Bios generated successfully! 🎉');
        } catch (error) {
            toast.error(error.response?.data?.error || 'Failed to generate bios');
        } finally {
            setLoading(false);
        }
    }, [keywords]);

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        toast.success('Copied to clipboard! 📋');
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const downloadBios = () => {
        const content = `Bio Generator Results\n\nKeywords: ${keywords}\n\nFree Bios:\n${bios.bios.free.map((b, i) => `${i + 1}. ${b}`).join('\n')}\n\nPremium Templates:\n${bios.bios.premium.map((b, i) => `${i + 1}. ${b}`).join('\n')}\n\nTips:\n${bios.tips.join('\n')}`;

        const element = document.createElement('a');
        element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`);
        element.setAttribute('download', `${keywords}-bios.txt`);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        toast.success('Downloaded! 📥');
    };

    return (
        <>
            <SEO />
            <Toaster position="top-right" />

            <div className="app-container">
                {/* Header */}
                <header className="header">
                    <motion.div
                        className="header-content"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="title">✨ Bio Generator</h1>
                        <p className="subtitle">Create amazing Instagram & Twitter bios with AI in seconds</p>
                    </motion.div>
                </header>

                {/* Main Content */}
                <main className="main-content">
                    <motion.div
                        className="generator-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Input Section */}
                        <div className="input-section">
                            <label htmlFor="keywords" className="label">Enter Your Keywords</label>
                            <input
                                id="keywords"
                                type="text"
                                placeholder="e.g., developer, photography, fitness, travel..."
                                value={keywords}
                                onChange={(e) => setKeywords(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && generateBios()}
                                className="input-field"
                                maxLength="250"
                            />
                            <p className="char-count">{keywords.length}/250</p>

                            {/* Platform Selection */}
                            <div className="platform-selector">
                                <button
                                    className={`platform-btn ${platform === 'instagram' ? 'active' : ''}`}
                                    onClick={() => setPlatform('instagram')}
                                >
                                    📷 Instagram
                                </button>
                                <button
                                    className={`platform-btn ${platform === 'twitter' ? 'active' : ''}`}
                                    onClick={() => setPlatform('twitter')}
                                >
                                    𝕏 Twitter
                                </button>
                            </div>

                            {/* Generate Button */}
                            <motion.button
                                className="generate-btn"
                                onClick={generateBios}
                                disabled={loading || !keywords.trim()}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {loading ? (
                                    <>
                                        <FiRefreshCw className="spin" /> Generating...
                                    </>
                                ) : (
                                    <>
                                        <FiStar /> Generate Bio Ideas
                                    </>
                                )}
                            </motion.button>
                        </div>

                        {/* Results Section */}
                        {bios && (
                            <motion.div
                                className="results-section"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="results-header">
                                    <h2>Generated Bios for: <span className="keyword-highlight">"{bios.keywords}"</span></h2>
                                    {bios.bios.free.length > 0 && (
                                        <button className="download-btn" onClick={downloadBios}>
                                            <FiDownload /> Download
                                        </button>
                                    )}
                                </div>

                                {/* Free Bios */}
                                <div className="bios-group">
                                    <h3 className="group-title">🎁 Free Bio Ideas</h3>
                                    <div className="bios-list">
                                        {bios.bios.free.map((bio, index) => (
                                            <motion.div
                                                key={index}
                                                className="bio-card"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <p className="bio-text">{bio}</p>
                                                <button
                                                    className={`copy-btn ${copiedIndex === `free-${index}` ? 'copied' : ''}`}
                                                    onClick={() => copyToClipboard(bio, `free-${index}`)}
                                                >
                                                    <FiCopy /> {copiedIndex === `free-${index}` ? 'Copied!' : 'Copy'}
                                                </button>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Premium Bios */}
                                {bios.bios.premium.length > 0 && (
                                    <div className="bios-group">
                                        <h3 className="group-title">👑 Premium Bio Templates</h3>
                                        <div className="bios-list">
                                            {bios.bios.premium.map((bio, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bio-card premium"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <p className="bio-text">{bio}</p>
                                                    <button
                                                        className={`copy-btn ${copiedIndex === `premium-${index}` ? 'copied' : ''}`}
                                                        onClick={() => copyToClipboard(bio, `premium-${index}`)}
                                                    >
                                                        <FiCopy /> {copiedIndex === `premium-${index}` ? 'Copied!' : 'Copy'}
                                                    </button>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tips */}
                                <div className="tips-section">
                                    <h3 className="tips-title">💡 Tips for Better Bios</h3>
                                    <div className="tips-grid">
                                        {bios.tips.map((tip, index) => (
                                            <motion.div
                                                key={index}
                                                className="tip-card"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                {tip}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Empty State */}
                        {!bios && !loading && (
                            <motion.div
                                className="empty-state"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="empty-icon">✨</div>
                                <p>Enter keywords and generate amazing bio ideas instantly!</p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Features Section */}
                    <motion.div
                        className="features-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2>Why Choose Bio Generator?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <span className="feature-icon">⚡</span>
                                <h4>Lightning Fast</h4>
                                <p>Get creative bios in seconds</p>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">🎨</span>
                                <h4>Creative Ideas</h4>
                                <p>AI-powered unique suggestions</p>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">✅</span>
                                <h4>No Login Required</h4>
                                <p>Start generating instantly</p>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">📱</span>
                                <h4>Multi-Platform</h4>
                                <p>Instagram & Twitter ready</p>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">💎</span>
                                <h4>Premium Templates</h4>
                                <p>Professional bio designs</p>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">🔒</span>
                                <h4>Privacy First</h4>
                                <p>Your data stays with you</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* FAQ Section */}
                    <motion.section
                        className="faq-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-grid">
                            <div className="faq-item">
                                <h4>🤔 How does the bio generator work?</h4>
                                <p>Simply enter your keywords, and our AI generates creative bio options tailored to Instagram or Twitter. No login required!</p>
                            </div>
                            <div className="faq-item">
                                <h4>💰 Is it really free?</h4>
                                <p>Yes! We offer free bio generation. Premium templates are available for those who want advanced designs.</p>
                            </div>
                            <div className="faq-item">
                                <h4>📋 Can I customize the bios?</h4>
                                <p>Absolutely! You can copy any generated bio and edit it to perfectly match your personal brand.</p>
                            </div>
                            <div className="faq-item">
                                <h4>🚀 Which platform should I choose?</h4>
                                <p>Select Instagram for longer bios with emojis, and Twitter for concise, professional bios.</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.section
                        className="cta-section"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2>Ready to Stand Out?</h2>
                        <p>Create your perfect bio in seconds</p>
                        <button
                            className="cta-btn"
                            onClick={() => {
                                document.querySelector('.input-field')?.focus();
                            }}
                        >
                            Get Started Now →
                        </button>
                    </motion.section>
                </main>

                {/* Google AdSense Placeholder */}
                <div className="ad-space">
                    {/* Replace with your Google AdSense code */}
                    {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"></script> */}
                </div>

                {/* Footer */}
                <footer className="footer">
                    <div className="footer-content">
                        <p>&copy; 2024 Bio Generator. All rights reserved.</p>
                        <div className="footer-links">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default App;
