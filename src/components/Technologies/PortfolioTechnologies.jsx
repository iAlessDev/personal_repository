import React from "react";


function PortfolioTechnologies() {
    return (
        <div className="flex items-center justify-center space-x-4 font-funnel pt-5 bg-[#E5E5E5] text-[#1065bb]">
            <div className="flex space-x-5 ">
                <h1 className="font-bold ml-4">
                    Databases:
                </h1>
                    <p>MySql</p>
                    <p>MariaDB</p>
                    <p>PostgreSQL</p>
                    <p>OracleSQL</p>
                    <p>MongoDB</p>
            </div>
            <div className="flex space-x-5">
                <h1 className="font-bold">
                    Web Technologies:
                </h1>
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Astro</p>
            </div>
            <div className="flex space-x-5">
                <h1 className="font-bold">
                    Backend Technologies:
                </h1>
                <p>Java</p>
                <p>PHP</p>
                <p>C</p>
                <p>Python</p>
                <p>Bash</p>
            </div>
            <div className="flex space-x-5">
                <h1 className="font-bold">
                    Java Technologies:
                </h1>
                <p>Spring Boot</p>
                <p>Spring Security</p>
                <p>Spring Data</p>
                <p>JUnit</p>
                <p>Mockito</p>
                <p>Maven</p>
                <p>Gradle</p>
                <p>Astro</p>
            </div>
            <div className="flex space-x-5 ">
                <h1 className="font-bold">
                    Other Technologies:
                </h1>
                <p>Github</p>
                <p>Git</p>
                <p>Docker</p>
                <p>Kubernates</p>
                <p>Swift</p>
            </div>
        </div>
    )
}

export default PortfolioTechnologies;