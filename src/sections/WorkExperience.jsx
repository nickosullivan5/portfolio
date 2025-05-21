import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";
import { educationData } from '../data/education.js';

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

const ExperienceAndEducation = () => {
    return (
        <main className="max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Work Experience */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Experience</h2>
                    <div className="relative
                     {/*border-l-2 */}
                    border-black space-y-0.5">
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
                                <div className="absolute left-0 top-1 w-3 h-3 bg-black rounded-full border-2 border-white" />
                                <div className="flex items-center justify-between pl-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.company}</h3>
                                        <p className="text-sm text-gray-700">{item.role}</p>
                                        <span className="text-xs text-gray-500 italic">{item.period}</span>
                                    </div>
                                    {item.logo && (
                                        <img
                                            src={item.logo}
                                            alt={`${item.company} logo`}
                                            className={`${item.logoHeight} shrink-0 ml-4`}
                                        />
                                    )}
                                </div>
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                    <FaExternalLinkAlt className="text-gray-500 text-xs" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Studies</h2>
                    <div className="relative  border-black  space-y-0.5">
                        {educationData.map((item, index) => (
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
                                <div className="absolute left-0 top-1 w-3 h-3 bg-black rounded-full border-2 border-white" />
                                <div className="flex items-center justify-between pl-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-700">{item.subtitle}</p>
                                        <span className="text-xs text-gray-500 italic">{item.period}</span>
                                    </div>
                                    {item.logo && (
                                        <img
                                            src={item.logo}
                                            alt={`${item.title} logo`}
                                            className={`${item.logoHeight} shrink-0 ml-4`}
                                        />
                                    )}
                                </div>
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                    <FaExternalLinkAlt className="text-gray-500 text-xs" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ExperienceAndEducation;
