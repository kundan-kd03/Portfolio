import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sgq9suo",
        "template_oujfyfl",
        form.current,
        "TuDtLUzPVb-Du1Ae1"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
        },
        () => {
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-12 px-4 bg-gray-950 text-white"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-3">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Work Together
          </h2>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div>

              <h3 className="text-2xl font-bold mb-4">
                Get In Touch
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Looking for a freelance developer for your project?
                Feel free to contact me anytime.
              </p>

            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-black border border-gray-800 rounded-2xl p-4">

              <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black text-lg shrink-0">
                <FaEnvelope />
              </div>

              <div>

                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <h4 className="text-sm sm:text-base font-semibold break-all">
                  yourmail@gmail.com
                </h4>

              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-black border border-gray-800 rounded-2xl p-4">

              <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black text-lg shrink-0">
                <FaPhone />
              </div>

              <div>

                <p className="text-gray-400 text-sm">
                  Phone
                </p>

                <h4 className="text-sm sm:text-base font-semibold">
                  +91 9876543210
                </h4>

              </div>

            </div>

            {/* Location */}
            <div className="flex items-center gap-4 bg-black border border-gray-800 rounded-2xl p-4">

              <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black text-lg shrink-0">
                <FaMapMarkerAlt />
              </div>

              <div>

                <p className="text-gray-400 text-sm">
                  Location
                </p>

                <h4 className="text-sm sm:text-base font-semibold">
                  India
                </h4>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-black border border-gray-800 rounded-3xl p-5">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >

              {/* Name */}
              <div>

                <label className="block mb-2 text-sm text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

              </div>

              {/* Email */}
              <div>

                <label className="block mb-2 text-sm text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

              </div>

              {/* Message */}
              <div>

                <label className="block mb-2 text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400 resize-none"
                ></textarea>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 rounded-xl transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;