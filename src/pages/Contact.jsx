// src/pages/Contact.jsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaClock,
  FaCheckCircle,
  FaUserGraduate,
  FaBriefcase,
  FaProjectDiagram,
  FaLaptopCode,
  FaCode,
} from "react-icons/fa";

const inquiryTypes = [
  {
    icon: FaUserGraduate,
    title: "Courses Inquiry",
    desc: "Find the right roadmap, duration, and career-focused training plan.",
  },
  {
    icon: FaBriefcase,
    title: "Placement Support",
    desc: "Resume help, interview preparation, mock rounds, and hiring support.",
  },
  {
    icon: FaProjectDiagram,
    title: "Project Help",
    desc: "Academic, mini, major, and real-world project development support.",
  },
  {
    icon: FaLaptopCode,
    title: "Internships",
    desc: "Get practical experience, certificates, and guided live work exposure.",
  },
  {
    icon: FaCode,
    title: "Software Solutions",
    desc: "Websites, apps, automation tools, and custom business software.",
  },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Codebaby Software | Courses, Placements & Projects</title>
        <meta
          name="description"
          content="Contact Codebaby Software for IT courses, placements, internships, projects, and software development solutions."
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[contactMove1_28s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[contactMove2_34s_linear_infinite]"></div>
          </div>

          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">

            <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              Contact Codebaby Software
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Let’s Build Your
              <span className="text-blue-600"> Future Together</span>
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
              Whether you need training, placements, internships, project
              support, or software development — our team is ready to help.
            </p>

            {/* TRUST PILLS */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">

              {[
                "Fast Response",
                "Free Guidance",
                "Personalized Support",
                "Career Focused",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white border border-blue-100 rounded-full text-sm text-gray-700 shadow-sm"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* CONTACT OPTIONS */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT SIDE */}
            <div>

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Reach Us Directly
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Talk To Our Team
              </h2>

              <div className="mt-8 space-y-5">

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-start gap-4 bg-white border border-blue-100 rounded-3xl p-5 shadow-sm hover:shadow-xl transition"
                >
                  <FaPhoneAlt className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Call Us
                    </h3>
                    <p className="text-gray-600 text-sm">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@codebabysoftware.com"
                  className="flex items-start gap-4 bg-white border border-blue-100 rounded-3xl p-5 shadow-sm hover:shadow-xl transition"
                >
                  <FaEnvelope className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Email Us
                    </h3>
                    <p className="text-gray-600 text-sm">
                      info@codebabysoftware.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 bg-white border border-blue-100 rounded-3xl p-5 shadow-sm hover:shadow-xl transition"
                >
                  <FaWhatsapp className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      WhatsApp Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Chat instantly with our team
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 bg-white border border-blue-100 rounded-3xl p-5 shadow-sm">
                  <FaMapMarkerAlt className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Location
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Karnataka, India <br />
                      Serving Clients Globally
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE FORM CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl">

              <p className="uppercase text-sm text-blue-100 font-semibold">
                Quick Inquiry Form
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                Tell Us What You Need
              </h3>

              <p className="mt-4 text-blue-100 leading-relaxed">
                Fill our inquiry form and our team will guide you with the best
                solution based on your goals.
              </p>

              {/* CATEGORIES */}
              <div className="mt-8 space-y-4">

                {inquiryTypes.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="bg-white/10 rounded-2xl p-4 flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Icon />
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {item.title}
                        </h4>

                        <p className="text-sm text-blue-100 mt-1">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

              {/* BUTTONS */}
              <div className="mt-8 space-y-4">

                <a
                  href="YOUR_GOOGLE_FORM_LINK"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition"
                >
                  Open Inquiry Form <FaArrowRight />
                </a>

                <Link
                  to="/courses"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
                >
                  Explore Courses
                </Link>

              </div>

              {/* RESPONSE TIME */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-sm text-blue-100">
                <FaClock />
                Usually replies within a few hours
              </div>

            </div>

          </div>

        </section>

        {/* MAP / CTA */}
        <section className="pb-16 md:pb-24 bg-white">

          <div className="container-custom">

            <div className="bg-white border border-blue-100 rounded-3xl shadow-md overflow-hidden">

              <div className="p-8 md:p-10 text-center">

                <p className="text-blue-600 font-semibold uppercase text-sm">
                  Need Immediate Help?
                </p>

                <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                  Let’s Discuss Your Goal
                </h2>

                <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
                  Whether you want a job, training, project solution, or custom
                  software — we’ll help you choose the right path.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                  >
                    WhatsApp Now <FaWhatsapp />
                  </a>

                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition"
                  >
                    Call Now
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* CSS */}
      <style>
        {`
          @keyframes contactMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes contactMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default Contact;