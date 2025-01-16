import React, { useState } from "react";

const Projects = () => {
    const webProjects = [
        { src: "java-migration.png", alt: "Java Migration", text: "Java Migration from 8 to 17 version", link: "/projects" },
        { src: "SPEI.jpeg", alt: "SPEI Project", text: "Integration of SuperMovil CoDi features", link: "/projects" },
        { src: "pizza.jpg", alt: "Pizza Project", text: "Pizza API", link: "/projects" },
        { src: "softelligent-webpage.png", alt: "Softelligent Webpage", text: "Softelligent Webpage", link: "/projects" },
        { src: "bank-application-logo.jpg", alt: "Bank Application", text: "Bank Full Application", link: "/projects" },
        { src: "santander-projects.webp", alt: "Santander Projects", text: "Santander Projects", link: "/projects" },
    ];

    const iosProjects = [
        { src: "pokemon.gif", alt: "Pokemon Project", text: "Who is that pokemon?", link: "/projects" },
        { src: "calculator.png", alt: "Calculator Project", text: "iOS calculator", link: "/projects" },
        { src: "husky.png", alt: "Storyboard Project", text: "Sample Storyboard", link: "/projects" },
    ];

    const [activeTab, setActiveTab] = useState("webProjects");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleTabChange = (tab) => {
        if (tab === activeTab) return;

        setIsTransitioning(true); // Inicia la transición de salida
        setTimeout(() => {
            setActiveTab(tab); // Cambia la pestaña activa
            setIsTransitioning(false); // Finaliza la transición de entrada
        }, 300); // Ajusta este tiempo según la duración de la transición
    };

    const projects = activeTab === "webProjects" ? webProjects : iosProjects;

    return (
        <div className="flex flex-col items-center bg-[#E5E5E5]">
            {/* Tabs */}
            <div className="mb-5 space-x-5">
                <button
                    className={`px-4 py-2 border-b-2 ${
                        activeTab === "webProjects" ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500 hover:border-gray-300"
                      } transition`}
                    onClick={() => handleTabChange("webProjects")}
                >
                    Web Projects
                </button>
                <button
                    className={`px-4 py-2 border-b-2 ${
                        activeTab === "iosProjects" ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500 hover:border-gray-300"
                      } transition`}
                    onClick={() => handleTabChange("iosProjects")}
                >
                    iOS Projects
                </button>
            </div>

            {/* Project Grid */}
            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-5 p-5 w-full max-w-screen-lg transition-opacity duration-300 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                }`}
            >
                {projects.map((project, index) => (
                    <div key={index} className="relative group">
                        <img src={project.src} alt={project.alt} className="object-cover w-full h-full" />
                        <div className="
                            flex 
                            flex-col 
                            space-y-5 
                            absolute 
                            inset-0 
                            bg-black 
                            bg-opacity-0 
                            group-hover:bg-opacity-75 
                            transition-all 
                            items-center 
                            justify-center"
                        >
                            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">{project.text}</span>
                            <div className="
                                group-hover:border-white 
                                group-hover:border-2
                                group-hover:outline-white 
                                group-hover:outline-1 
                                group-hover:outline 
                                group-hover:outline-offset-8"
                            >   
                                <a 
                                    className="text-white opacity-0 group-hover:opacity-100 group-hover:transition-opacity p-3"
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Click me
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;