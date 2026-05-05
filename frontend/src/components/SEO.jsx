import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
    title = 'AI Bio Generator - Create Amazing Instagram & Twitter Bios',
    description = 'Generate creative, engaging bios for Instagram and Twitter using AI. Free bio maker with premium templates. No login required.',
    image = 'https://your-domain.com/og-image.jpg',
    url = 'https://your-domain.com'
}) => {
    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="keywords" content="bio generator, instagram bio, twitter bio, bio maker, creative bio, ai bio generator, bio ideas, social media bio" />
            <meta name="author" content="Bio Generator" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Bio Generator" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:url" content={url} />

            {/* Additional SEO Tags */}
            <meta name="theme-color" content="#7C3AED" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="Bio Generator" />

            {/* Favicon */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Preconnect for Performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />

            <title>{title}</title>
        </Helmet>
    );
};

export default SEO;
