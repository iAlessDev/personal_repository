import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iosProjects, webProjects } from "../data/projectsData";

const Projects = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("iosProjects");
    const [isTransitioning, setIsTransitioning] = useState(false);
    const handleProjectClick = (project) => {
        const url = `/projects/${project.id}`;
        // Abrir en una nueva pestaña
        window.open(url, "_blank");
    };
    

    const handleTabChange = (tab) => {
        if (tab === activeTab) return;

        setIsTransitioning(true); // Inicia la transición de salida
        setTimeout(() => {
            setActiveTab(tab); // Cambia la pestaña activa
            setIsTransitioning(false); // Finaliza la transición de entrada
        }, 300); // Ajusta este tiempo según la duración de la transición
    };

    const projects = activeTab === "iosProjects" ? iosProjects : webProjects;

    return (
        <div className="flex flex-col items-center bg-[#E5E5E5]">
            {/* Tabs */}
            <div className="mb-5 space-x-5">
                <button
                    className={`px-4 py-2 border-b-2 ${
                        activeTab === "iosProjects" ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500 hover:border-gray-300"
                      } transition`}
                    onClick={() => handleTabChange("iosProjects")}
                >
                    iOS Projects
                </button>
                <button
                    className={`px-4 py-2 border-b-2 ${
                        activeTab === "webProjects" ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500 hover:border-gray-300"
                      } transition`}
                    onClick={() => handleTabChange("webProjects")}
                >
                    Web Projects
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
                                    className="text-white opacity-0 group-hover:opacity-100 group-hover:transition-opacity p-3 cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault(); // Evita el comportamiento predeterminado
                                        handleProjectClick(project);
                                    }}
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