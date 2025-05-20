import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";
import { educationData } from "../data/education.js";

const Education = () => {
    return (
        <main className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="relative border-l-4 border-black pl-5 space-y-0.5">
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
                        {/* Dot */}
                        <div className="absolute left-0 top-1 w-4 h-4 bg-black rounded-full border-2 border-white" />

                        {/* Content & Logo Row */}
                        <div className="flex items-center justify-between pl-4">
                            {/* Text Content */}
                            <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-700">{item.subtitle}</p>
                                <span className="text-xs text-gray-500 italic">{item.period}</span>
                            </div>

                            {/* Logo */}
                            {item.logo && (
                                <img
                                    src={item.logo}
                                    alt={`${item.title} logo`}
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

export default Education;
