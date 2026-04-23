// src/pages/About.jsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaStar,
  FaWhatsapp,
  FaChartLine,
  FaUserTie,
  FaCode,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import forms from "../data/forms";

/* ======================================
   COUNTER
====================================== */
const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(end / 60);

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 25);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const stats = [
  { value: 1000, suffix: "+", label: "Students Guided" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 95, suffix: "%", label: "Interview Readiness" },
  { value: 24, suffix: "/7", label: "Support System" },
];

const services = [
  {
    icon: FaGraduationCap,
    title: "Career Focused Courses",
    desc:
      "Job-ready programs in Java, Python, Web Development, Frontend, Backend and more.",
  },
  {
    icon: FaBriefcase,
    title: "Placement Support",
    desc:
      "Resume optimization, mock interviews, job guidance and hiring readiness.",
  },
  {
    icon: FaLaptopCode,
    title: "Projects & Internships",
    desc:
      "Academic, mini, major and real implementation exposure programs.",
  },
  {
    icon: FaCode,
    title: "Software Solutions",
    desc:
      "Websites, business tools, automation systems and custom applications.",
  },
];

const values = [
  "Practical Learning Over Theory",
  "Career Outcomes First",
  "Industry Relevant Skills",
  "Transparent Guidance",
  "Affordable Growth Paths",
  "Long-Term Support",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Codebaby Software | Skills, Careers & Solutions
        </title>

        <meta
          name="description"
          content="Codebaby Software helps students, freshers and businesses grow through IT training, placements, internships, projects and software development."
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* ======================================
            HERO
        ====================================== */}
        <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none">

            <div className="absolute top-0 left-0 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-blue-200/25 blur-3xl rounded-full animate-[aboutMove1_28s_linear_infinite]" />

            <div className="absolute bottom-0 right-0 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-sky-200/25 blur-3xl rounded-full animate-[aboutMove2_34s_linear_infinite]" />

          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs sm:text-sm">
                About Codebaby Software
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Building Skills,
                <span className="text-blue-600">
                  {" "}Careers & Solutions
                </span>
              </h1>

              <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                We help students, freshers, professionals,
                startups and businesses grow through modern
                training programs, placements, internships,
                projects and custom software solutions.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <a
                  href={forms.contact}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Talk To Our Team
                  <FaArrowRight />
                </a>

                <a
                  href="https://wa.me/918073369741"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  WhatsApp
                  <FaWhatsapp />
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">

              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">
                <FaRocket />
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-bold">
                Our Mission
              </h3>

              <p className="mt-4 text-blue-100 leading-relaxed text-sm sm:text-base">
                Bridge the gap between education and industry
                through practical ecosystems that lead to real
                careers and business growth.
              </p>

              <div className="mt-8 space-y-3">

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

        {/* ======================================
            STATS
        ====================================== */}
        <section className="py-14 sm:py-16 md:py-20 bg-white">

          <div className="container-custom">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

              {stats.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">
                    <Counter
                      end={item.value}
                      suffix={item.suffix}
                    />
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-gray-700 font-medium">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ======================================
            SERVICES
        ====================================== */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                One Brand. Multiple Growth Solutions.
              </h2>

            </div>

            <div className="mt-14 grid sm:grid-cols-2 gap-6">

              {services.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="bg-white rounded-3xl border border-blue-100 p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                      <Icon />
                    </div>

                    <h3 className="mt-5 text-xl sm:text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* ======================================
            VALUES
        ====================================== */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Built For Real Outcomes
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                We focus on what actually matters —
                skills, confidence, employability
                and business growth.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              {values.map((item, i) => (
                <div
                  key={i}
                  className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3"
                >
                  <FaStar className="text-blue-600 mt-1 shrink-0" />
                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ======================================
            CTA
        ====================================== */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Ready To Grow With Codebaby Software?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Whether you need training, placements,
              projects or software development —
              we’re ready to help.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href={forms.contact}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Contact Team
                <FaArrowRight />
              </a>

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