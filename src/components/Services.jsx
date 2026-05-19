import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

function Services() {

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Modern and responsive websites using React.js and latest technologies.",
    },

    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description:
        "Clean UI/UX design with fast performance and attractive layouts.",
    },

    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description:
        "Mobile-friendly websites that work perfectly on all devices.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What I Offer
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              {/* Icon */}
              <div className="text-cyan-400 text-5xl mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;