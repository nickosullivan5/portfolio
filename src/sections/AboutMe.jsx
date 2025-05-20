import React from 'react';
import {IoLocationOutline, IoMailOpen} from 'react-icons/io5';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {GoDot} from 'react-icons/go';
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";

const AboutMe = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);

    // const handleMouseMove = (e) => {
    //     const rect = e.target.getBoundingClientRect();
    //     const width = rect.width;
    //     const height = rect.height;
    //     const mouseX = e.clientX - rect.left;
    //     const mouseY = e.clientY - rect.top;
    //     const xPct = mouseX / width - .5;
    //     const yPct = mouseY / height - .5;
    //     x.set(xPct);
    //     y.set(yPct);
    // }
    const handleMouseMove = (e) => {
        const xPct = e.clientX / window.innerWidth - 0.5;
        const yPct = e.clientY / window.innerHeight - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

        const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }


return (
    <motion.div onMouseMove={handleMouseMove}  onMouseLeave={handleMouseLeave} className="relative "
                style={{
        transformStyle: "preserve-3d"
                    ,rotateX,
                    rotateY
    }}>
        <div className="  inset place-content-center shadow-lg"
             style={{transform: "translateZ(75px)", transformStyle: "preserve-3d"}}>
            <main className="max-w-5xl mx-auto relative  p-2 rounded-sm overflow-hidden">
                <video
                    muted
                    loop
                    autoPlay
                    className="w-full h-full object-cover"
                >
                    <source src="/graf.mp4" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>

                <div
                    className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start text-white bg-black/50 p-6 space-y-1">
                    <h1 className="text-4xl md:text-6xl font-bold">Nicholas O'Sullivan</h1>
                    <div className="text-lg md:text-2xl flex gap-4 items-center">
                        <IoMailOpen/>
                        <GoDot className="text-lg"/>
                        <FaLinkedinIn/>
                        <GoDot/>
                        <FaGithub/>
                    </div>

                    <div className="text-md md:text-xl font-bold flex items-center gap-2">
                        Queens, NYC <IoLocationOutline className="text-red-500"/>
                    </div>

                    <p className="text-sm md:text-lg max-w-xl">
                        Software Engineer with a history in audiovisual production.
                    </p>

                </div>
            </main>
        </div>
    </motion.div>
);
}
;

export default AboutMe;
