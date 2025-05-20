import React from 'react'
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

const TechStack = () => {
    return (
        <main className="max-w-6xl mx-auto p-4">
            <div  className=" text-2xl  font-bold ">
                Technology
            </div>
            <div className="text-3xl text-shadow-cyan-950 text-shadow-2xl flex flex-wrap gap-6 pt-3">
                {[
                    { icon: <FaPython />, label: 'Python' },
                    { icon: <FaJava />, label: 'Java' },
                    { icon: <FaReact />, label: 'React' },
                    { icon: <FaNodeJs />, label: 'Node.js' },
                    { icon: <FaGithub />, label: 'GitHub' },
                    { icon: <DiMysql />, label: 'MySQL' },
                    { icon: <FaRegSnowflake />, label: 'Snowflake' },
                    { icon: <SiDjango />, label: 'Django' },
                    { icon: <SiJetbrains />, label: 'JetBrains' },
                    { icon: <VscAzureDevops />, label: 'Azure DevOps' },
                    { icon: <SiAdobeaftereffects />, label: 'After Effects' },
                    { icon: <SiAdobepremierepro />, label: 'Premiere Pro' },
                    { icon: <SiAdobephotoshop />, label: 'Photoshop' },
                    { icon: <SiBlender />, label: 'Blender' },
                ].map((tech, index) => (
                    <div key={index} className="flex  items-center justify-center text-center">
                        {tech.icon}
                        <div className="text-sm font-bold pl-1">{tech.label}</div>
                    </div>
                ))}
            </div>
        </main>
    )
}
export default TechStack
