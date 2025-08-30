
const AboutUs = () => {
  return (
    <section className="relative py-16 w-11/12 mx-auto text-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        ABOUT <span className="text-cyan-400">US</span>
      </h1>
      <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
        Get to know the story behind <span className="text-cyan-400">ABACUS</span> – 
        a hub for innovation, collaboration, and excellence at GECWC.
      </p>

      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/banner.png"
            alt="ABACUS"
            className="rounded-2xl shadow-lg border border-cyan-600/30 w-full max-w-[550px]"
          />
        </div>

        {/* About Text */}
        <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg border border-cyan-400/20">
          <p className="text-gray-200 text-justify leading-relaxed">
            <span className="font-semibold text-cyan-400">ABACUS</span> is the
            Computer Science Club of <span className="font-semibold">GECWC</span>,
            fostering a vibrant community of passionate learners and innovators.
            We provide a platform for students to sharpen their technical skills,
            engage in coding competitions, collaborate on projects, and explore
            new technologies.
            <br />
            <br />
            Through <span className="text-cyan-300">guest lectures</span>,{" "}
            <span className="text-cyan-300">hackathons</span>, and{" "}
            <span className="text-cyan-300">knowledge-sharing sessions</span>,
            ABACUS empowers students to grow, innovate, and make a difference in
            the world of technology.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-cyan-400/20 hover:shadow-cyan-500/30 transition">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Our Vision</h2>
          <p className="text-gray-300 text-justify">
            To inspire and nurture future leaders in technology by creating an
            ecosystem of innovation, knowledge, and collaboration.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-cyan-400/20 hover:shadow-cyan-500/30 transition">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Our Mission</h2>
          <p className="text-gray-300 text-justify">
            To empower students through coding, research, and real-world projects,
            ensuring they thrive in their computer science journey.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Be part of <span className="text-cyan-400">ABACUS</span>
        </h2>
        <p className="text-gray-400 mb-6">
          Join our community and shape the future of technology with us.
        </p>
        <button className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-xl font-medium text-white shadow-lg hover:shadow-cyan-500/40 transition">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
