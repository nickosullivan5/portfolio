import React, { useEffect } from 'react';

const projects = [
    {
        title: "Director Portfolio – May 2025",
        description: "Reel of recent directing & editing work.",
        type: "vimeo",
        media: "https://player.vimeo.com/video/1085496624"
    },
    {
        title: "DesignerFinder",
        description: "Secondhand Designer Clothing Proxy Site",
        type: "image",
        media: "/train_graf.gif", // Replace with an actual image path
        link: "https://designerfinder.io" // Optional
    },

    {
        title: "Husksheets",
        description: "Spreadsheet Editor for Northeastern Huskies",
        type: "link",
        media: "/train_graf.gif", // Replace with an image
        link: "https://github.com/arinjay-singh/husksheets"
    },
    {
        title: "Seeing Stars RMX",
        description: "song & MV produced by me",
        type: "youtube",
        media: "https://www.youtube.com/embed/XkhXASEaMZU?autoplay=1&color=white&disablekb=1&fs=0&rel=0",
    }
];

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
        <main className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">recent projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {/* Media Block */}
                        {project.type === "vimeo" && (
                            <div className="aspect-video">
                                <iframe
                                    src={`${project.media}?badge=0&autopause=0`}
                                    frameBorder="0"
                                    // allow="autoplay; fullscreen; picture-in-picture"
                                    className="w-full h-full"
                                />
                            </div>
                        )}

                        {project.type === "youtube" && (
                            <div className="aspect-video">
                                <iframe
                                    src={project.media}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    className="w-full h-full"
                                    allowFullScreen
                                />
                            </div>
                        )}

                        {project.type === "image" || project.type === "link" ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.media}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </a>
                        ) : null}

                        {/* Text Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 opacity-0 group-hover:opacity-60 text-white p-4 flex flex-col justify-center transition-opacity duration-300 pointer-events-none">
                            <div className="pointer-events-none">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-sm">{project.description}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </main>
    );
};

export default Projects;
