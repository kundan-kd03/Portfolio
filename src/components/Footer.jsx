import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-10 px-4 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}
          <div className="text-center lg:text-left">

            <h2 className="text-3xl font-bold text-cyan-400">
              Kundan
            </h2>

            <p className="text-gray-400 mt-4 max-w-md text-sm sm:text-base leading-relaxed">
              Full Stack Developer focused on building modern,
              responsive and high-performance websites.
            </p>

          </div>

          {/* Center */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-gray-300">

            <li>
              <a
                href="#home"
                className="hover:text-cyan-400 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-cyan-400 transition duration-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Right */}
          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">

          © 2026 Kundan Kumar. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}

export default Footer;