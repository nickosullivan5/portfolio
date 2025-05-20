import React from 'react'
import {educationData} from "../data/education.js"
const Education = () => {
    return (
        <main className="max-w-6xl mx-auto p-5">
            <h2 className="text-3xl font-bold text-black mb-6">Education</h2>

            <div className="relative border-l-4 border-black pl-6 space-y-8">
                {educationData.map((item, index) => (
                    <div key={index} className="relative   ">
                        {/* Dot */}
                        <div className="absolute -left-3 top-1 w-4 h-4 bg-black rounded-full border-2 border-white" />
                        <div className="flex items-start gap-4 pl-2">

                        {/* Content */}
                            <div className="pl-2">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.subtitle}</p>
                                <span className="text-sm text-gray-500 italic">{item.period}</span>
                            </div>
                            {/* Logo */}
                            {item.logo && (
                                <img
                                    src={item.logo}
                                    alt={`${item.title} logo`}
                                    className={`${item.logoHeight}`}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};
export default Education
