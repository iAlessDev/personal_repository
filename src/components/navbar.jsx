import React from "react";
import { Link } from "react-scroll"

function Navbar() {

  return (
    <div>
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 sm:3/4 bg-gray-900 shadow-md z-50 rounded-full">
      <div className="container mx-auto flex items-center justify-center px-6 py-3 md:py-4">

        <ul
          className="flex flex-row items-center space-x-4 md:space-x-8 w-auto justify-center"
        >
          <li>
            <Link
              to="home"
              className="text-white hover:text-blue-300 transition duration-300 cursor-pointer"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              className="text-white hover:text-blue-300 transition duration-300 cursor-pointer"
              smooth={true}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="text-white hover:text-blue-300 transition duration-300 cursor-pointer"
              smooth={true}
              duration={500}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="text-white hover:text-blue-300 transition duration-300 cursor-pointer"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
