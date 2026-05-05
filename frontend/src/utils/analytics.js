export const trackEvent = (eventName, eventData = {}) => {
    if (window.gtag) {
        window.gtag('event', eventName, eventData);
    }
    console.log(`Event: ${eventName}`, eventData);
};

export const trackBioGenerated = (keywords, platform) => {
    trackEvent('bio_generated', {
        keywords: keywords.substring(0, 20),
        platform,
        timestamp: new Date().toISOString()
    });
};

export const trackBioCopied = (bioLength) => {
    trackEvent('bio_copied', {
        bio_length: bioLength
    });
};

export const trackDownloaded = (bioCount) => {
    trackEvent('bios_downloaded', {
        bio_count: bioCount
    });
};
