import React, { useState } from "react";


function Contact() {

    const [selectedProjectOption, setSelectedProjectOption] = useState('ios');
    const [selectedModalityOption, setSelectedModalityOption] = useState('freelance');
      
    const handleChange = (e) => {
        setSelectedProjectOption(e.target.value);
    };

    const handleChangeModality = (e) => {
        setSelectedModalityOption(e.target.value);
    }

    return (
        <div id="contact" className="w-full px-12 md:px-28 bg-[#E5E5E5]">

            <h1 className="text-3xl md:text-4xl font-oswald text-center bg-[#E5E5E5]">
                Lets Talk About Your Project
            </h1>

            <div className="flex flex-col md:flex-row justify-center bg-[#E5E5E5] py-5 md:py-16 w-full md:space-x-24">

                <div className="w-full pb-10">
                    <p className="text-2xl md:text-4xl font-funnel pt-5 bg-gradient-to-r from-[#FF5733] via-[#0077FF] to-[#6A0DAD] inline-block text-transparent bg-clip-text font-bold">
                        I'm open to work as a freelancer or full-time employee. 
                        If you have a project in mind, feel free to contact me. 
                    </p>
                </div>

                <div className="text-1xl w-full md:w-[80%]">

                    <form className="flex flex-col space-y-4">

                        <input
                            type="text"
                            placeholder="Name"
                            className="p-2 border border-gray-300 rounded-2xl"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 border border-gray-300 rounded-2xl"
                        />
                        <textarea
                            placeholder="Message"
                            className="p-2 border border-gray-300 rounded-2xl"
                            rows="4"
                        ></textarea>

                        <div className="flex flex-col md:flex-row py-5 md:py-2 space-y-5 w-full md:px-10">

                            <div className="flex flex-col justify-center md:w-full text-center">

                                <h2 className="font-funnel text-lg">
                                    Project Type
                                </h2>

                                <div className="flex space-x-2 md:mb:1 py-2 w-full justify-center">
                                
                                    <label className={`p-3 border border-gray-300 rounded-lg cursor-pointer ${
                                    selectedProjectOption === 'ios' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
                                    }`}>
                                        <input 
                                            type="radio" 
                                            name="projectType" 
                                            value="ios" 
                                            checked={setSelectedProjectOption === 'ios'}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className="px-2">IOS</span>
                                    </label>

                                    
                                    <label className={`p-3 border border-gray-300 rounded-lg cursor-pointer ${
                                    selectedProjectOption === 'web' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
                                    }`}>
                                        <input 
                                            type="radio" 
                                            name="projectType" 
                                            value="web" 
                                            checked={setSelectedProjectOption === 'web'}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className="px-2">WEB</span>
                                    </label>
                                </div>

                            </div>
                            

                            <div className="flex flex-col w-full text-center md:pb-4"> 

                                <h2 className="font-funnel text-lg">
                                    Modality
                                </h2>

                                <div className="flex space-x-2 py-2 w-full justify-center">

                                    <label className={`p-3 border border-gray-300 rounded-lg cursor-pointer ${
                                    selectedModalityOption === 'freelance' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
                                    }`}>
                                        <input 
                                            type="radio" 
                                            name="projectType" 
                                            value="freelance" 
                                            checked={setSelectedModalityOption === 'freelance'}
                                            onChange={handleChangeModality}
                                            className="hidden"
                                        />
                                        <span className="px-2">Freelance</span>
                                    </label>

                                    
                                    <label className={`p-3 border border-gray-300 rounded-lg cursor-pointer ${
                                    selectedModalityOption === 'full-time' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
                                    }`}>
                                        <input 
                                            type="radio" 
                                            name="projectType" 
                                            value="full-time" 
                                            checked={setSelectedModalityOption === 'full-time'}
                                            onChange={handleChangeModality}
                                            className="hidden"
                                        />
                                        <span className="px-2">Full-Time</span>
                                    </label>
                                </div>

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="
                                border-2
                                border-solid
                                border-gray-800
                                p-2 
                                bg-gray-800 
                                text-white 
                                hover:bg-white 
                                hover:text-gray-800 
                                transition-all 
                                rounded-2xl"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;