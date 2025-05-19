import React from 'react'
import AboutMe from "./AboutMe.jsx";
import backgroundImage from "../../public/scene (2).jpg"
const Navbar = () => {
    return (
        <header className=" top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto"
                 style={{
                     backgroundImage: `url(${backgroundImage})`,
                     backgroundSize: '170%', // zooms in the background
                     // backgroundSize: 'cover',
                     // backgroundRepeat: 'no-repeat',
                     // backgroundPositionX: 'center',
                     // backgroundPositionY: 'bottom', // aligns top of image
                     width: '100%',
                     // height: '100px'
                 }}>
                <div className="text-black flex justify-between items-center py-5 mx-auto">
                    {/*<img className=" max-w-full " src="../public/graffitiscene1.png" alt="Work Experience"/>*/}

                    <a href="/" className=" text-4xl text-black font-bold hover:text-white transition-colors">
                        nos portfolio
                    </a>

                </div>
            </div>
            {/*<hr className="mt-2 mx-auto pt-0"/>*/}

        </header>
    )
}
export default Navbar
