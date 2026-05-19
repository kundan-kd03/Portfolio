import { motion } from "framer-motion";

function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >

                    <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
                        Freelance Web Developer
                    </p>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                        I Build Modern
                        <span className="text-cyan-400"> Websites</span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                        Helping startups and businesses grow online with modern,
                        responsive and high-converting websites.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        {/* Hire Me */}
                        <a
                            href="#contact"
                            className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
                        >
                            Hire Me
                        </a>

                        {/* View Projects */}
                        <a
                            href="#projects"
                            className="border border-gray-700 px-8 py-4 rounded-2xl hover:border-cyan-400 transition duration-300"
                        >
                            View Projects
                        </a>

                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center"
                >

                    {/* Glow Effect */}
                    <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-cyan-400 opacity-20 blur-3xl rounded-full"></div>

                    {/* Profile Circle */}
                    <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border-[6px] border-cyan-400 overflow-hidden shadow-[0_0_60px_#00ffff]">

                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />

                    </div>

                    {/* Dots Design */}
                    <div className="hidden md:block absolute right-0 top-10">

                        <div className="grid grid-cols-6 gap-3">

                            {[...Array(48)].map((_, index) => (
                                <div
                                    key={index}
                                    className="w-2 h-2 bg-cyan-400 rounded-full opacity-70"
                                ></div>
                            ))}

                        </div>

                    </div>

                </motion.div>
            </div>
        </section>
    );
}

export default Hero;