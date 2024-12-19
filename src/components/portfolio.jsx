import React from "react";

function Portfolio() {
    const projects = [
        { src: "java-migration.png",
            alt: "Java Migration",
            text: "Java Migration from 8 to 17 version", 
            link: "/projects"
        },

        { src: "SPEI.jpeg",
            alt: "SPEI Project",
            text: "Integration of SuperMovil CoDi features", 
            link: "/projects"
        },

        { src: "pizza.jpg",
            alt: "Pizza Project",
            text: "Pizza API", 
            link: "/projects"
        },

        { src: "softelligent-webpage.png",
            alt: "Softelligent Webpage",
            text: "Softelligent Webpage", 
            link: "/projects"
        },

        { src: "bank-application-logo.jpg",
            alt: "Bank Application",
            text: "Bank Full Application", 
            link: "/projects"
        },

        { src: "santander-projects.webp",
            alt: "Santander Projects",
            text: "Santander Projects", 
            link: "/projects"
        },
    ];

    return (
        <div id="portfolio" className="cursor-custom w-full h-full bg-[#E5E5E5] shadow-black shadow-3xl flex flex-col items-center justify-center">
            <h1>
                <span className="text-4xl font-oswald text-center block pb-12 pt-20">Last projects</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 w-full max-w-screen-lg">
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
            <div className="flex justify-center items-center w-full">
                    <a 
                        className="bg-black hover:border-black border-2 hover:border-solid text-white p-3 rounded-md hover:bg-white hover:text-black hover:transition-all"
                        href="/projects"
                        target="_blank"

                    >
                        See all projects
                    </a>
                </div>
        </div>
    );
}

export default Portfolio;