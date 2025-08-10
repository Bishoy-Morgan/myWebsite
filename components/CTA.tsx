import React from "react";
import Button from "./ui/Button";
import redArrow from '@/public/icons/long-redArrow.svg'

const CTA = () => {
    return (
        <div className="w-4/5 mx-auto flex flex-col   ">
            {/* Red line  */}
            <div className="w-1/2 py-10 border-r-2 border-red mb-16"></div>
            {/* CTA Container  */}
            <div className="w-full flex flex-col items-center justify-center py-24 bg-red">
                <h3 className="text-white max-w-xl text-center">
                    Let’s Build Something Amazing Together
                </h3>
                <p className="main-p mt-10 mb-16 text-center">
                    Whether it’s a collaboration, full-time role, or freelance<br/>I’d love to hear from you.
                </p>
                <div className="flex items-center gap-x-4">
                    <a href="mailto:bishoy.morgan95@gmail.com?subject=Project%20Inquiry&body=Hi%20Bishoy%2C%20I%27d%20like%20to%20talk%20about%20a%20project!" >
                        <Button  bgColor="#020202" arrowIcon={redArrow}>
                            Email
                        </Button>
                    </a>

                    <a
                    href="https://wa.me/201032700340?text=Hi%20Bishoy%2C%20I%27d%20like%20to%20talk%20about%20a%20project!"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Button  bgColor="#020202" arrowIcon={redArrow}>
                            WhatsApp
                        </Button>
                    </a>
                </div>
            </div>
            {/* Red line  */}
            <div className="w-1/4 py-6 border-r-2 border-red mb-16 mt-8"></div>
            <div className="w-3/4 py-10 border-r-2 border-l-2 border-red mb-4"></div>
            <div className="w-1/2 py-16 border-r-2 border-red"></div>
        </div>
    );
};

export default CTA;