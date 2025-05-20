import React from 'react'
import traincars from "../../public/traincars.png";
import other_traincars from "../../public/other_traincars.png";
const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50"
                // style={{background: '#E6E6E6FF'}}
        >

            <div className="max-w-7xl mx-auto"
                >
                <div className="text-black flex justify-between items-center py-5 mx-auto">
                    {/*<img className=" max-w-full " src="../public/graffitiscene1.png" alt="Work Experience"/>*/}

                    <a href="/" className=" text-4xl text-black font-bold hover:text-white transition-colors">
                        nos portfolio
                    </a>

                </div>
                <img
                    src={traincars}
                    alt="Floating spaceman"
                    className="fixed -top-85 -left-7 w-150 z-0 opacity-60"
                />
                <img
                    src={other_traincars}
                    alt="Floating spaceman"
                    className="transform rotate-180 fixed -top-89 -right-35 w-150 z-0 opacity-50 h-200"
                />
            </div>
            {/*<hr className="mt-2 mx-auto pt-0"/>*/}

        </header>
    )
}
export default Navbar
