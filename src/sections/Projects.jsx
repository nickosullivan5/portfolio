import React, { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <main className="max-w-6xl mx-auto border-1 z-1">
            <div className="text-3xl text-black font-bold">
                recent projects
            </div>
            <div>DesignerFinder: Secondhand Designer Clothing Proxy Site</div>
            <div>
                Latest Director portfolio
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe
                        src="https://player.vimeo.com/video/1085496624?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        // title="nos dir portfolio 2025"
                    ></iframe>
                </div>
            </div>
            <div>"Kanbaz", A Canvas Clone</div>
            <div>Seeing Stars RMX</div>
        </main>
    );
};

export default Projects;
