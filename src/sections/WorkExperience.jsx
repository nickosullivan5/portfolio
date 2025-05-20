import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";

const WorkExperience = () => {
    const workData = [
        {
            company: 'Bain Capital',
            role: 'Applications Developer Co-op',
            period: 'July – December 2024',
            logo: '/bain_logo.png',
            logoHeight: 'h-5',
        },
        {
            company: 'McKay Brothers',
            role: 'Programming Intern: Information Systems',
            period: 'September – December 2023',
            logo: '/mckay_logo.png',
            logoHeight: 'h-16',
        },
        {
            company: 'No People Recording Studio',
            role: 'Art Director',
            period: 'September 2022 – 2023',
            logo: null,
        },
    ];

    return (
        <main className="max-w-6xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <div className="relative border-l-4 border-black pl-5 space-y-0.5">
                {workData.map((item, index) => (
                    <motion.div
                        whileHover="hover"
                        variants={{
                            hover: {
                                scale: 1.03,
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                        }}
                        transition={{ duration: 0.4, ease: "backInOut" }}
                        key={index}
                        className="relative rounded-lg p-3 transition-colors duration-300 group"
                    >
                        {/* Dot */}
                        <div className="absolute left-0 top-1 w-4 h-4 bg-black rounded-full border-2 border-white" />

                        {/* Content & Logo Row */}
                        <div className="flex items-center justify-between pl-4">
                            {/* Text Content */}
                            <div>
                                <h3 className="text-lg font-semibold">{item.company}</h3>
                                <p className="text-sm text-gray-700">{item.role}</p>
                                <span className="text-xs text-gray-500 italic">{item.period}</span>
                            </div>

                            {/* Logo */}
                            {item.logo && (
                                <img
                                    src={item.logo}
                                    alt={`${item.company} logo`}
                                    className={`${item.logoHeight} shrink-0 ml-4`}
                                />
                            )}
                        </div>

                        {/* Hover Icon */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <FaExternalLinkAlt className="text-gray-500 text-xs" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
};

export default WorkExperience;
