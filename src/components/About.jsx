import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 overflow-hidden bg-black text-white"
    >

      <div className="max-w-7xl mx-auto w-full overflow-hidden">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight px-2 break-words">
            Passionate Full Stack
            <span className="text-cyan-400"> Developer</span>
          </h2>

        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center px-2">

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed break-words">
            I build modern, responsive and user-friendly websites
            using React.js and latest frontend technologies.
          </p>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-5 break-words">
            My goal is to help startups, businesses and freelance
            clients grow online with attractive UI design and
            high-performance websites.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

          {/* Card 1 */}
          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-6 text-center hover:border-cyan-400 transition duration-300 overflow-hidden">

            <div className="text-cyan-400 text-4xl flex justify-center mb-5">
              <FaCode />
            </div>

            <h3 className="text-lg font-bold mb-3 break-words">
              Clean Code
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed break-words">
              Writing scalable and maintainable frontend code.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-6 text-center hover:border-cyan-400 transition duration-300 overflow-hidden">

            <div className="text-cyan-400 text-4xl flex justify-center mb-5">
              <FaLaptopCode />
            </div>

            <h3 className="text-lg font-bold mb-3 break-words">
              Modern UI
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed break-words">
              Creating premium and attractive user interfaces.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-6 text-center hover:border-cyan-400 transition duration-300 overflow-hidden">

            <div className="text-cyan-400 text-4xl flex justify-center mb-5">
              <FaMobileAlt />
            </div>

            <h3 className="text-lg font-bold mb-3 break-words">
              Responsive
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed break-words">
              Websites optimized for all devices and screens.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-6 text-center hover:border-cyan-400 transition duration-300 overflow-hidden">

            <div className="text-cyan-400 text-4xl flex justify-center mb-5">
              <FaRocket />
            </div>

            <h3 className="text-lg font-bold mb-3 break-words">
              Fast Performance
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed break-words">
              Optimized websites with smooth performance and speed.
            </p>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14 text-center w-full overflow-hidden">

          {/* Stat 1 */}
          <div className="min-w-0">

            <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400 break-words">
              20+
            </h3>

            <p className="text-gray-400 mt-2 text-sm sm:text-base break-words">
              Projects Completed
            </p>

          </div>

          {/* Stat 2 */}
          <div className="min-w-0">

            <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400 break-words">
              2+
            </h3>

            <p className="text-gray-400 mt-2 text-sm sm:text-base break-words">
              Years Learning
            </p>

          </div>

          {/* Stat 3 */}
          <div className="min-w-0">

            <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400 break-words">
              100%
            </h3>

            <p className="text-gray-400 mt-2 text-sm sm:text-base break-words">
              Responsive Design
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;