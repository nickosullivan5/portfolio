import React, { useRef } from 'react';
import { IoLocationOutline, IoMailOpen } from 'react-icons/io5';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GoDot } from 'react-icons/go';

const AboutMe = () => {


    return (
        <main className="max-w-5xl mx-auto relative  p-2 rounded-lg overflow-hidden">
            <video
                muted
                loop
                autoPlay
                className="w-full h-full object-cover"
            >
                <source src="/graf.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start text-white bg-black/50  p-6 space-y-4">
                <h1 className="text-6xl font-bold">Nicholas O'Sullivan</h1>
                <div className="text-2xl flex gap-4 items-center">
                    <IoMailOpen />
                    <GoDot className="text-lg" />
                    <FaLinkedinIn />
                    <GoDot />
                    <FaGithub />
                </div>

                <div className="text-xl font-bold flex items-center gap-2">
                    Queens, NYC <IoLocationOutline className="text-red-500" />
                </div>

                <p className="text-lg max-w-xl">
                    Software Engineer with a history in audiovisual production.
                </p>

            </div>
        </main>
    );
};

export default AboutMe;
