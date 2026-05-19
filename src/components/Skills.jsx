function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "GitHub",
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-950">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I Use
          </h2>

        </div>

        <div className="flex flex-wrap justify-center gap-5">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-8 py-4 bg-black border border-gray-800 rounded-2xl hover:border-cyan-400 transition duration-300"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;