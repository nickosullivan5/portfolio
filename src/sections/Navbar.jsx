import React from 'react'

const Navbar = () => {
    return (
        <header className=" fixed top-0 left-0 right-0 z-50 hidden md:block z-50"
            // style={{background: '#E6E6E6FF'}}
        >

            <div className="max-w-7xl mx-auto"
                >
                <div className="text-blue-500 flex justify-between items-center py-5 mx-auto">
                    {/*<img className=" max-w-full " src="../public/graffitiscene1.png" alt="Work Experience"/>*/}

                    <a href="/" className=" text-2xl md:text-4xl  text-black font-bold hover:text-white transition-colors opacity-75">
                        nos portfolio
                    </a>

                </div>

            </div>
            {/*<hr className="mt-2 mx-auto pt-0"/>*/}

        </header>
    )
}
export default Navbar
