function Testimonials() {

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Startup Founder",
      message:
        "Kundan created an amazing website for our business. The design was modern, responsive and very professional.",
    },

    {
      name: "Priya Verma",
      role: "Business Owner",
      message:
        "Very smooth communication and excellent frontend development skills. Highly recommended.",
    },

    {
      name: "Amit Singh",
      role: "Freelance Client",
      message:
        "Delivered the project on time with outstanding UI design and responsive layout.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-black text-white"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What Clients Say
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
            >

              {/* Quote */}
              <p className="text-gray-400 leading-relaxed text-lg">
                “{item.message}”
              </p>

              {/* Bottom */}
              <div className="mt-8 flex items-center gap-4">

                {/* Circle */}
                <div className="w-14 h-14 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold text-xl">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;