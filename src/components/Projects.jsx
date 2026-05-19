function Projects() {

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Modern online shopping website with responsive UI and fast performance.",
      tech: "React • Tailwind • Node.js",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Restaurant Website",
      description:
        "Professional restaurant landing page with booking and menu sections.",
      tech: "React • CSS • Firebase",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website for freelancers and developers.",
      tech: "React • Tailwind",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black text-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-cyan-400 mt-5">
                  {project.tech}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">

                  <button className="bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition">
                    Live Demo
                  </button>

                  <button className="border border-gray-700 px-5 py-3 rounded-xl hover:border-cyan-400 transition">
                    GitHub
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;