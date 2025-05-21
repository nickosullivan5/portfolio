import React from 'react';
import {VscAzureDevops} from "react-icons/vsc";
import {
    SiAdobeaftereffects,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiBlender,
    SiDjango,
    SiJetbrains
} from "react-icons/si";
import {FaPython, FaReact, FaRegSnowflake} from "react-icons/fa6";
import {FaGithub, FaJava, FaNodeJs} from "react-icons/fa";
import {DiMysql} from "react-icons/di";

const techIcons = [
    {icon: <FaPython/>, label: 'Python'},
    {icon: <FaJava/>, label: 'Java'},
    {icon: <FaReact/>, label: 'React'},
    {icon: <FaNodeJs/>, label: 'Node.js'},
    {icon: <FaGithub/>, label: 'GitHub'},
    {icon: <DiMysql/>, label: 'MySQL'},
    {icon: <FaRegSnowflake/>, label: 'Snowflake'},
    {icon: <SiDjango/>, label: 'Django'},
    {icon: <SiJetbrains/>, label: 'JetBrains'},
    {icon: <VscAzureDevops/>, label: 'Azure DevOps'},
    {icon: <SiAdobeaftereffects/>, label: 'After Effects'},
    {icon: <SiAdobepremierepro/>, label: 'Premiere Pro'},
    {icon: <SiAdobephotoshop/>, label: 'Photoshop'},
    {icon: <SiBlender/>, label: 'Blender'},
];

const TechStack = () => {
    return (
        <div>
            {/*<h5 className="text-xl font-bold  pt-5">technologies</h5>*/}
            <div className="relative overflow-hidden py-6 text-black group ">
                <div
                    className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                    style={{background: "linear-gradient(to right, #fdf9fa, transparent)"}}
                />
                <div
                    className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                    style={{background: "linear-gradient(to left, #fdf9fa, transparent)"}}
                />

                <div className="whitespace-nowrap flex gap-5 px-4 animate-slide group-hover:paused">
                    {[...techIcons, ...techIcons].map((tech, index) => (
                        <div key={index} className="flex items-center text-center text-lg gap-2 min-w-fit">
                            {tech.icon}
                            <span className="text-sm font-semibold">{tech.label}</span>
                        </div>
                    ))}
                </div>
                <style>
                    {`
                @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-slide {
                    display: inline-flex;
                    animation: slide 30s linear infinite;
                }
                .group:hover .animate-slide {
                    animation-play-state: paused;
                }
                `}
                </style>
            </div>
        </div>

    );
};

export default TechStack;
