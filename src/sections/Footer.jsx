import React from 'react';

const Footer = () => {
    return (
        <div className="flex items-center justify-center p-10 ">
            <p className="text-xs md:text-sm  text-black">The code for this webpage can be found
                <a className="pl-5 text-blue-400 underline" href="https://github.com/nickosullivan5/portfolio">here</a>
            </p>
        </div>
    );
};

export default Footer;