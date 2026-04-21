import { Helmet } from "react-helmet-async";
import { FaUsers, FaLaptopCode, FaBriefcase, FaRocket } from "react-icons/fa";

const FORM_URL = "https://forms.gle/YOUR_FORM_LINK";

const About = () => {
  return (
    <div className="section bg-gradient-to-br from-white to-blue-50">

      <Helmet>
        <title>About Us | MyCompany</title>
        <meta
          name="description"
          content="Learn about MyCompany, our mission, and how we help students become industry-ready."
        />
      </Helmet>

      <div className="container-custom">

        {/* 🔥 HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-primary">MyCompany</span>
          </h1>

          <p className="text-gray-600 mt-4">
            We are focused on transforming students into industry-ready professionals 
            through practical learning, real-world projects, and mentorship.
          </p>
        </div>

        {/* 🔥 MISSION & VISION */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To bridge the gap between academic knowledge and real-world skills 
              by providing hands-on learning experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-600">
              To become a leading platform that empowers students with practical 
              skills and prepares them for high-demand careers.
            </p>
          </div>

        </div>

        {/* 🔥 WHY US */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
              <FaLaptopCode className="text-primary text-3xl mx-auto mb-3" />
              <h3 className="font-semibold">Practical Learning</h3>
              <p className="text-sm text-gray-500 mt-2">
                Focus on real-world projects and skills
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
              <FaUsers className="text-primary text-3xl mx-auto mb-3" />
              <h3 className="font-semibold">Mentorship</h3>
              <p className="text-sm text-gray-500 mt-2">
                Learn from experienced professionals
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
              <FaBriefcase className="text-primary text-3xl mx-auto mb-3" />
              <h3 className="font-semibold">Career Focused</h3>
              <p className="text-sm text-gray-500 mt-2">
                Courses designed for job readiness
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
              <FaRocket className="text-primary text-3xl mx-auto mb-3" />
              <h3 className="font-semibold">Growth</h3>
              <p className="text-sm text-gray-500 mt-2">
                Continuous learning and improvement
              </p>
            </div>

          </div>
        </div>

        {/* 🔥 STATS */}
        <div className="mt-16 bg-primary text-white rounded-2xl p-10 grid sm:grid-cols-3 gap-6 text-center">

          <div>
            <h2 className="text-3xl font-bold">1000+</h2>
            <p>Students Trained</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">50+</h2>
            <p>Projects Completed</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">95%</h2>
            <p>Success Rate</p>
          </div>

        </div>

        {/* 🔥 PROCESS */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              "Enroll in course",
              "Learn with guidance",
              "Build real projects",
              "Get career ready"
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold">Step {i + 1}</h3>
                <p className="text-sm text-gray-500 mt-2">{step}</p>
              </div>
            ))}

          </div>
        </div>

        {/* 🔥 CTA */}
        <div className="mt-20 text-center bg-white p-10 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Start Your Career Journey Today 
          </h2>

          <p className="text-gray-500 mt-2">
            Join our programs and become industry-ready
          </p>

          <a
            href={FORM_URL}
            className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            Apply Now
          </a>

        </div>

      </div>
    </div>
  );
};

export default About;