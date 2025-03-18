import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee";
import Technologies from "./Technologies/PortfolioTechnologies";
import { ReactComponent as Apple } from '../apple.svg';
import { ReactComponent as Computer } from '../computer.svg'
import Slider from "react-slick";

function Home() {

    const [activeTab, setActiveTab] = useState("IOS");

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: true,
        arrows: false,
        cssEase: "linear",
        responsive: [

            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                autoplay: true,
                initialSlide: 0,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                dots: true
              }
            }
        ]
    };

    return (
        <div id="home">
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
                                "Software Developer who loves to create amazing Things.",
                                3000,
                                "Software Developer who loves to create amazing iOS Apps.",
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
                        <a href="https://github.com/iAlessDev">
                            <ion-icon size="large" name="logo-github" ></ion-icon>
                        </a>

                        <a href="https://www.linkedin.com/in/ialessdev/">
                            <ion-icon size="large" name="logo-linkedin"></ion-icon>
                        </a>
                        
                        <a href="https://www.instagram.com/ialessdev/">
                            <ion-icon size="large" name="logo-instagram"></ion-icon>
                        </a>
                        
                        <a href="https://x.com/iAlessDev">
                            <ion-icon size="large" name="logo-twitter"></ion-icon>  
                        </a>

                        <a href="https://www.tiktok.com/@iAlessDev">
                            <ion-icon size="large" name="logo-tiktok"></ion-icon>
                        </a>                    
                    </div>
                </div>
            </div>

            <div className="bg-[#E5E5E5] w-full py-5 text-[#1065bb] border-gray-500">
                <h2 className="text-center text-1xl md:text-2xl font-funnel">
                    IOS | WEB 
                </h2>
            </div>

            <div className="flex justify-center items-center bg-[#E5E5E5]">
                <div className="w-[30%] h-0.5 mx-12 bg-gradient-to-r from-[#5e8ba0] via-[#a8ff05] to-[#32CD32] inline-block text-transparent text-1xl sm:text-2xl font-bold"></div>
            </div>

            <Marquee className="text-1xl md:text-2xl "
                pauseOnHover={true}
                direction="left"
            >
                <Technologies />
                
            </Marquee>
            
            <div className="flex flex-col md:flex-row md:space-x-8 w-full py-5 md:py-16 bg-[#E5E5E5] items-start">
                <div className="flex flex-col md:flex-row items-center md:items-start space-x-3 md:w-[45%] border-[#be6700] border-2 py-5 rounded-2xl mx-5 mt-5 mb-16 md:ml-12 bg-[#f6f5de] shadow-2xl h-auto">
                    <img src="paulflores.png" alt="Paul Flores" className="w-36 md:h-36 mt-3 rounded-full border-[#FF6F61] border-2 m-5 md:ml-5"/>
                    <div className="flex flex-col mr-5">
                        <h1 className="text-5xl font-oswald text-center md:text-left">
                            Hey there!
                        </h1>
                        <p className="text-2xl mt-5 pr-5 w-full text-[#D1D1D1} font-funnel mb-5 md:mb-0 ">
                            I'm Paul Flores, a content creator, speaker and developer specialized in Web and IOS applications
                        </p>
                    </div>
                </div>
                <div className="flex flex-col mb-16 mx-7 md:mx-0 h-auto w-[85%] md:w-[45%] border-transparent rounded-2xl bg-white shadow-lg">
                    <div className="flex justify-center space-x-4 w-full p-4">
                        <button 
                            className="flex flex-col items-center w-1/2 py-3 text-lg font-light text-gray-800 bg-white  rounded-md  hover:scale-125 focus:ring-2 transition-all "
                            onClick={() => setActiveTab("IOS")}                                
                        >
                            <Apple />
                            IOS
                        </button>
                        <button 
                            className="flex flex-col items-center w-1/2 py-3 text-lg font-light text-gray-800 bg-white  rounded-md hover:scale-125 focus:ring-2 transition-all"
                            onClick={() => setActiveTab("WEB")}    
                        >
                            <Computer />
                            WEB
                        </button>
                    </ div>
                    <div className="w-full p-6 border rounded-md bg-gray-50 shadow-lg">
                        {activeTab === "IOS" && (
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800">IOS Development</h2>
                                <p className="text-gray-600 mt-2">
                                    I develop native applications 
                                    specifically for iOS devices, including iPhones and iPads. 
                                    With <strong>Swift</strong> and <strong>SwiftUI</strong> I create high-performance, user-friendly apps 
                                    that leverage the full potential of the iOS ecosystem. 
                                </p> 
                                <p className="text-gray-600 mt-3">
                                    Whether building from the ground up or optimizing existing solutions, 
                                    my focus is on delivering seamless, intuitive, and responsive applications 
                                    that meet the highest standards for iOS development.
                                </p>
                            </div>
                        )}

                        {activeTab === "WEB" && (
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800">Web Development</h2>
                                <p className="text-gray-600 mt-2">
                                    I offer web and backend development services, 
                                    specializing in modern websites with 
                                    <strong> HTML, CSS, JavaScript, React, and Astro, </strong>
                                    and backend solutions using 
                                    <strong> Java, PHP, Python, C, and Bash.</strong>
                                </p>
                                <p className="text-gray-600 mt-2">
                                    I manage databases like <strong>MySQL, MariaDB, PostgreSQL, OracleSQL, and MongoDB, </strong>
                                    and provide cloud hosting with <strong>AWS </strong> services such as <strong>S3, CloudFront, and EC2. </strong>
                                </p>
                                <p className="text-gray-600 mt-2">
                                    I also ensure smooth deployment with <strong>Docker</strong> and version control using Git and GitHub, 
                                    delivering efficient, high-performance applications tailored to your needs.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="bg-[#E5E5E5] pb-24 md:px-5">
                    <h2 className="text-2xl md:text-4xl font-oswald text-center pb-8 md:pb-5 text-gray-800">
                        Companies That Have Relied on Me
                    </h2>
                <div className=" bg-gray-900 rounded-xl shadow-2xl mx-12">
                    <Slider {...settings}>
                        <div className="md:ml-10 lg:ml-3 xl:ml-5">
                            <a href="https://www.santander.com.mx">
                                <img src="santander.png" alt="Santander logo"/>
                            </a>
                        </div>
                        <div  className="scale-75 md:ml-10 lg:ml-3 xl:ml-5">
                            <a href="https://softelligent-business.com.mx/">
                                <img src="softelligent-business.png" alt="Softelligent Business Logo"/>
                            </a>
                        </div>
                        <div className="pt-3 scale-125 md:ml-10 lg:ml-3 xl:ml-5">
                            <a href="https://www.nocountry.tech/">
                                <img src="no-country-logo.png" alt="No country logo"/>
                            </a>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Home;