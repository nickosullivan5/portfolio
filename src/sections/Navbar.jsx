import React from 'react'

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className ="max-w-6xl mx-auto">
                <div className="text-black flex justify-between items-center py-5 mx-auto">
                    <a href="/" className=" text-4xl text-black font-bold hover:text-white transition-colors">
                            nos portfolio
                    </a>

                </div>
            </div>
            <hr className="mt-2 mx-auto pt-0" />

        </header>
    )
}
export default Navbar
