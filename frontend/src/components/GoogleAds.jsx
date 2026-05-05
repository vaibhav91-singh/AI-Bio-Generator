import React, { useEffect } from 'react';

const GoogleAds = () => {
    useEffect(() => {
        if (window.adsbygoogle) {
            window.adsbygoogle.push({});
        }
    }, []);

    return (
        <>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
                crossOrigin="anonymous"
            ></script>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', textAlign: 'center' }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
                data-ad-slot="xxxxxxxx"
            ></ins>
        </>
    );
};

export default GoogleAds;
