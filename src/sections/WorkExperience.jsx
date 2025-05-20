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
            logoHeight: 'h-6',
        },
        {
            company: 'McKay Brothers',
            role: 'Programming Intern: Information Systems',
            period: 'September – December 2023',
            logo: '/mckay_logo.png',
            logoHeight: 'h-20',
        },
        {
            company: 'No People Recording Studio',
            role: 'Art Director',
            period: 'September 2022 – 2023',
            logo: null,
        },
    ];

    return (
        <main className="max-w-6xl mx-auto p-5">
            <h2 className="text-3xl font-bold text-black mb-6">Work Experience</h2>
            <div className="relative border-l-4 border-black pl-6 space-y-1">
                {workData.map((item, index) => (
                    <motion.div
                        whileHover="hover"
                        variants={{
                            hover: {
                                scale: 1.05,
                                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                            },
                        }}
                        transition={{ duration: 0.4, ease: "backInOut" }}
                        key={index}
                        className="relative rounded-lg p-4 transition-colors duration-300 group"
                    >
                        {/* Dot */}
                        <div className="absolute left-0.5 top-1 w-5 h-5 bg-black rounded-full border-2 border-white" />

                        {/* Content & Logo Row */}
                        <div className="flex items-start pl-4">
                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl font-semibold">{item.company}</h3>
                                <p className="text-sm text-gray-700">{item.role}</p>
                                <span className="text-sm text-gray-500 italic">{item.period}</span>
                            </div>

                            {/* Logo */}
                            {item.logo && (
                                <img
                                    src={item.logo}
                                    alt={`${item.company} logo`}
                                    className={`${item.logoHeight} shrink-0`}
                                />
                            )}
                        </div>

                        {/* Hover Icon */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <FaExternalLinkAlt className="text-gray-500 text-sm" />
                        </div>
                    </motion.div>

                ))}
            </div>
        </main>
    );
};

export default WorkExperience;
