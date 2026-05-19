import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      link: "#home",
    },

    {
      name: "About",
      link: "#about",
    },

    {
      name: "Skills",
      link: "#skills",
    },

    {
      name: "Projects",
      link: "#projects",
    },

    {
      name: "Services",
      link: "#services",
    },

    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-cyan-400"
        >
          Kundan
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300">

          {navLinks.map((item, index) => (
            <li key={index}>

              <a
                href={item.link}
                className="hover:text-cyan-400 transition duration-300"
              >
                {item.name}
              </a>

            </li>
          ))}

        </ul>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:block bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition duration-300"
        >
          Hire Me
        </a>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black border-t border-gray-800">

          <ul className="flex flex-col items-center gap-8 py-8 text-lg text-gray-300">

            {navLinks.map((item, index) => (
              <li key={index}>

                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition duration-300"
                >
                  {item.name}
                </a>

              </li>
            ))}

            {/* Mobile Button */}
            <a
              href="#contact"
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Hire Me
            </a>

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;