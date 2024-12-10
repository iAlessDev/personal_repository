import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee";
import Technologies from "./Technologies/PortfolioTechnologies";




function Home() {
    return (
        <div>
            <div>
                <img src="background.png" alt="blue and white colors" className="w-full h-screen object-cover"/>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center font-space space-y-4 mb-40">
                    <div className="flex">
                        <h1 className="text-4xl sm:text-6xl text-gray-800 transform font-bold mr-4">
                            Hey!
                        </h1>
                        <h1 className="sm:text-6xl text-4xl bg-gradient-to-r from-[#0D1321] via-[#1E90FF] to-[#32CD32] inline-block text-transparent bg-clip-text font-bold">
                            I'm Paul
                        </h1>
                    </div>
                    
                    <h2 className="mx-12 bg-gradient-to-r from-[#FF5733] via-[#0077FF] to-[#6A0DAD] inline-block text-transparent bg-clip-text text-1xl sm:text-2xl font-bold">
                        <TypeAnimation
                            preRenderFirstString={true}
                                sequence={[
                                "Software Developer who loves to create amazing things.",
                                3000,
                                "Software Developer who loves to create amazing IOS Apps.",
                                3000,
                                "Software Developer who loves to create amazing Websites.",
                                3000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                        />
                    </h2>

                    <div className="space-x-6 space-y-4">
                        <a href="https://github.com/paulfloresdevs">
                            <ion-icon size="large" name="logo-github" ></ion-icon>
                        </a>

                        <a href="https://www.linkedin.com/in/paulfloresdev/">
                            <ion-icon size="large" name="logo-linkedin"></ion-icon>
                        </a>
                        
                        <a href="https://instagram.com/paulfloresdev">
                            <ion-icon size="large" name="logo-instagram"></ion-icon>
                        </a>
                        
                        <a href="https://x.com/paulfloresdev">
                            <ion-icon size="large" name="logo-twitter"></ion-icon>  
                        </a>

                        <a href="https://www.tiktok.com/@paulfloresdev">
                            <ion-icon size="large" name="logo-tiktok"></ion-icon>
                        </a>                    
                    </div>

                </div>
            </div>
            <div className="bg-[#E5E5E5] w-full py-5 text-[#007AFF] border-gray-500">
                <h2 className="text-center text-2xl font-funnel">
                    IOS | WEB 
                </h2>
            </div>
            <Marquee className="text-2xl"
                pauseOnHover={true}
                direction="left"
            >
                <Technologies />
                
            </Marquee>
            <div className="flex justify-center space-x-36 w-full my-52">
                <div className="flex flex-col">
                    <h1 className="text-5xl">
                        What about me?
                    </h1>
                    <p className="text-2xl mt-10">
                        I'm Paul Flores, a freelance CDMX web developer & designer bringing you the
                    </p>
                </div>
                
                <img src="paulfloresdev.JPEG" alt="Paul Flores" className="w-[25%] rounded-full"/>
            </div>
        </div>
    );
}

export default Home;