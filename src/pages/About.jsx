// src/pages/About.jsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBullseye,
  FaLaptopCode,
  FaUsers,
  FaBriefcase,
  FaGraduationCap,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

const services = [
  "Job Ready Courses",
  "Placement Support",
  "Mock Interviews",
  "Internships",
  "Academic Projects",
  "Industrial Solutions",
];

const values = [
  {
    icon: FaGraduationCap,
    title: "Practical Learning",
    desc: "We focus on real-world skills, not outdated theory-only methods.",
  },
  {
    icon: FaBriefcase,
    title: "Career Outcomes",
    desc: "Every program is designed around employability and growth.",
  },
  {
    icon: FaLaptopCode,
    title: "Real Execution",
    desc: "Projects, internships, and implementation create true confidence.",
  },
  {
    icon: FaUsers,
    title: "Continuous Support",
    desc: "We guide learners and clients throughout their journey.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Codebaby Software | Skills, Careers & Solutions</title>
        <meta
          name="description"
          content="Learn about Codebaby Software. We build careers through IT training, placements, internships, projects, and build digital solutions for businesses."
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[aboutMove1_28s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[aboutMove2_34s_linear_infinite]"></div>
          </div>

          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">

            <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              About Codebaby Software
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Building Skills,
              <span className="text-blue-600"> Careers & Software</span>
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
              Codebaby Software is a modern growth-focused company helping
              students, job seekers, startups, and businesses succeed through
              training, placements, projects, internships, and digital
              solutions.
            </p>

          </div>

        </section>

        {/* STORY */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-blue-600 font-semibold uppercase text-sm">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why We Started
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                We noticed a gap between education and industry expectations.
                Many learners had certificates but lacked confidence, practical
                skills, interview readiness, and exposure to real projects.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Codebaby Software was created to bridge that gap — by combining
                learning, execution, mentorship, and career outcomes in one
                ecosystem.
              </p>

            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">

              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center text-3xl">
                <FaRocket />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 text-blue-100 leading-relaxed">
                To become a trusted platform where talent grows, careers begin,
                and businesses get modern software solutions.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Train Future Professionals",
                  "Enable Placements",
                  "Build Real Products",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-2xl p-4 flex items-center gap-3"
                  >
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                One Platform, Multiple Solutions
              </h2>

            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {services.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                    <FaCheckCircle />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {item}
                  </h3>

                  <p className="mt-3 text-gray-600 text-sm">
                    Practical execution and focused support for real outcomes.
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* VALUES */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Why We’re Different
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Built For Real Growth
              </h2>

            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {values.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                      <Icon />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <p className="text-blue-100 uppercase text-sm font-semibold">
              Let’s Grow Together
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              Ready To Start With Codebaby Software?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Whether you need training, placements, internships, project
              support, or software solutions — we are ready to help.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Contact Us <FaArrowRight />
              </Link>

              <Link
                to="/courses"
                className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Explore Courses
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* CSS */}
      <style>
        {`
          @keyframes aboutMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes aboutMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default About;