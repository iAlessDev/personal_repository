import { useParams, useLocation } from "react-router-dom";
import { allProjects } from "../data/projectsData"; 
import React, { useState } from "react";


const Projects = () => {
    const { projectId } = useParams(); // Obtener el ID del proyecto desde la URL
    const project = allProjects.find(p => p.id === projectId);
    const [activeProjectButton, setActiveProjectButton] = useState(false);

    const checkProjectLink = () => {
        if (project.link !== null) {
            setActiveProjectButton(true);
        }
    };

    React.useEffect(() => {
        checkProjectLink();
    }, []);

    if (!project) {
        console.log("Project not found");
        return <div className="text-center mt-10 text-red-500">Project not found</div>;
    } else {
        console.log("Project found");
    }
    return (
        <div className="flex flex-col md:flex-row w-full md:my-28 md:space-x-72 justify-center">

            <div className="w-5/6 md:w-2/6 max-h-fit p-10 m-10 bg-[#F5F5F7] rounded-xl">
                <h1 className="text-5xl font-Inter font-bold mb-4 text-[#1D1D1F]">{project.text}</h1>
                <p className="text-lg text-[#515154] mb-10">{project.usage}</p>
                <h2 className="text-3xl font-Inter">How I did it?</h2>
                <p className="text-lg text-[#515154] font-sans mb-10">
                    {project.description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                        {line}
                        <br />
                        </React.Fragment>
                    ))}
                </p>
                <h2 className="text-3xl"> What I learned?</h2>
                <p className="text-lg text-[#515154] font-sans mb-5">{project.skills}</p>

                <div className="text-end">
                    {activeProjectButton === true && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-block bg-[#007AFF] text-[#FFFFFF] px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            View
                        </a>
                    )}
                </div>
            </div>
    
            <div className="w-5/6 md:w-1/5 m-10 md:m-0">
                <img
                    src={`/${project.src}`}
                    alt={project.alt}
                    className="w-full h-auto object-cover rounded-lg mb-4"
                />
                <p className="mx-10 text-lg text-gray-600 font-sans">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm mr-2 m-1">
                            {tech}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default Projects;
