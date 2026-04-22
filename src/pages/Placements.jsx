// src/pages/Placements.jsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaFileAlt,
  FaUserTie,
  FaLaptopCode,
  FaWhatsapp,
  FaPhoneAlt,
  FaRocket,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: FaFileAlt,
    title: "Resume Optimization",
    desc: "ATS-friendly resume building with role-based keyword improvements.",
  },
  {
    icon: FaUserTie,
    title: "Mock Interviews",
    desc: "Technical + HR rounds with real feedback and confidence building.",
  },
  {
    icon: FaLaptopCode,
    title: "Skill Readiness",
    desc: "Practical roadmap for coding, projects, aptitude, and communication.",
  },
  {
    icon: FaBriefcase,
    title: "Placement Support",
    desc: "Interview opportunities, guidance, and hiring readiness support.",
  },
];

const roles = [
  "Frontend Developer",
  "Java Full Stack Developer",
  "Python Developer",
  "React Developer",
  "QA / Testing",
  "Support Engineer",
];

const benefits = [
  "Pay After Placement options for selected programs",
  "1:1 mentorship support",
  "Weekly progress tracking",
  "Live interview preparation",
  "Real project portfolio guidance",
  "Career roadmap planning",
];

const Placements = () => {
  return (
    <>
      <Helmet>
        <title>Placements | Codebaby Software</title>
        <meta
          name="description"
          content="Get placement support with resume optimization, mock interviews, technical preparation, and pay after placement options from Codebaby Software."
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BG */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[placeMove1_28s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[placeMove2_34s_linear_infinite]"></div>
          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Placement Assistance Program
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Get Job Ready.
                <span className="text-blue-600"> Get Hired Faster.</span>
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                We help freshers, students, and career switchers prepare for
                interviews, improve resumes, build confidence, and secure IT
                opportunities faster.
              </p>

              {/* PILLS */}
              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Resume Help",
                  "Mock Interviews",
                  "Hiring Guidance",
                  "Pay After Placement",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white border border-blue-100 rounded-full text-sm text-gray-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <a
                  href="https://wa.me/918073369741?text=Hi%20I%20need%20placement%20support."
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  WhatsApp Us <FaWhatsapp />
                </a>

                <a
                  href="tel:+918073369741"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  Call Now <FaPhoneAlt />
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <FaUsers className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-3xl font-bold">1000+</h3>
                  <p className="text-sm text-blue-100">
                    Candidates Guided
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <FaChartLine className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-3xl font-bold">95%</h3>
                  <p className="text-sm text-blue-100">
                    Interview Readiness
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center col-span-2">
                  <FaRocket className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-2xl font-bold">
                    Pay After Placement
                  </h3>
                  <p className="text-sm text-blue-100 mt-2">
                    Available for selected eligible programs.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                How It Works
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Placement Roadmap
              </h2>

            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {steps.map((item, i) => {
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

        {/* TARGET ROLES */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Hiring Roles
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Career Opportunities We Prepare You For
              </h2>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              {roles.map((role, i) => (
                <span
                  key={i}
                  className="px-5 py-3 bg-white border border-blue-100 rounded-full text-gray-700 shadow-sm"
                >
                  {role}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* BENEFITS */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                More Than Just Training
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                We focus on actual placement outcomes by combining skill growth,
                interview readiness, confidence, and professional guidance.
              </p>

            </div>

            <div className="space-y-4">

              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3"
                >
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready To Start Your Placement Journey?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Contact our team today and get personalized guidance based on your
              skills and goals.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="https://wa.me/918073369741?text=Hi%20I%20want%20placement%20details."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                WhatsApp Now <FaWhatsapp />
              </a>

              <Link
                to="/contact"
                className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                Contact Us <FaArrowRight />
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* CSS */}
      <style>
        {`
          @keyframes placeMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes placeMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default Placements;