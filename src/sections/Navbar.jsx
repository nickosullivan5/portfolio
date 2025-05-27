import React from 'react'
import {IoMailOpen} from "react-icons/io5";
import {GoDot} from "react-icons/go";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

const Navbar = () => {
    return (
        <header className=" fixed top-0 left-0 right-0 z-50  md:block z-50"
            // style={{background: '#E6E6E6FF'}}
        >

            <div className="max-w-7xl mx-auto"
                >
                <div className="text-pink-400 flex justify-center items-center py-5 mx-auto opacity-50">
                    {/*<img className=" max-w-full " src="../public/graffitiscene1.png" alt="Work Experience"/>*/}

                    {/*<a href="/" className=" text-lg md:text-2xl  text-pink-400 font-bold hover:text-white transition-colors opacity-75">*/}
                    {/*    nos portfolio*/}
                    {/*</a>*/}
                    <div className="text-md md:text-xl flex gap-4 items-center z-10">
                        <a href="mailto:osullivan.nick@icloud.com" target="_blank" rel="noopener noreferrer">
                            <IoMailOpen className="hover:text-red-400 transition-colors duration-200" />
                        </a>
                        <GoDot className="text-lg"/>
                        <a href="https://www.linkedin.com/in/nicholasosullivan5/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="hover:text-blue-400 transition-colors duration-200" />
                        </a>
                        <GoDot/>
                        <a href="https://github.com/nickosullivan5/" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-gray-400 transition-colors duration-200" />
                        </a>
                    </div>

                </div>

            </div>
            {/*<hr className="mt-2 mx-auto pt-0"/>*/}

        </header>
    )
}
export default Navbar
