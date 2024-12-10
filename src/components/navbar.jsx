import React from "react";

function Navbar() {

  return (
    <div>
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 sm:3/4 bg-gray-900 shadow-md z-50 rounded-full">
      <div className="container mx-auto flex items-center justify-center px-6 py-3 md:py-4">

        <ul
          className="flex flex-row items-center space-x-4 md:space-x-8 w-auto justify-center"
        >
          <li>
            <a
              href="/"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white hover:text-blue-300 transition duration-300" 
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
