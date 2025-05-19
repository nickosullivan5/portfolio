import React from 'react';

const WorkExperience = () => {
    const workData = [
        {
            company: 'Bain Capital',
            role: 'Applications Developer Co-op',
            period: 'July – December 2024',
            logo: '/bain_logo.png', // ensure this path is correct relative to `public/`
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

            <div className="relative border-l-4 border-black pl-6 space-y-10">
                {workData.map((item, index) => (
                    <div key={index} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-3 top-1 w-5 h-5 bg-black rounded-full border-2 border-white" />

                        {/* Content */}
                        <div className="flex items-start gap-4 pl-2">
                            {/* Text */}
                            <div className="pl-2">
                                <h3 className="text-xl font-semibold">{item.company}</h3>
                                <p className="text-sm text-gray-700">{item.role}</p>
                                <span className="text-sm text-gray-500 italic">{item.period}</span>
                            </div>
                            {/* Logo */}
                            {item.logo && (
                                <img
                                    src={item.logo}
                                    alt={`${item.company} logo`}
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

export default WorkExperience;
