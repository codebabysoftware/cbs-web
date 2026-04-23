// src/pages/Contact.jsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  FaHeadset,
  FaPaperPlane,
} from "react-icons/fa";

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

const inquiryTypes = [
  {
    icon: FaUserGraduate,
    title: "Courses Inquiry",
    desc: "Choose the right roadmap, learning mode, fees guidance and career path.",
  },
  {
    icon: FaBriefcase,
    title: "Placement Support",
    desc: "Resume optimization, mock interviews and job readiness support.",
  },
  {
    icon: FaProjectDiagram,
    title: "Project Help",
    desc: "Academic, startup and custom project development solutions.",
  },
  {
    icon: FaLaptopCode,
    title: "Internships",
    desc: "Hands-on learning, certificates and live work exposure.",
  },
  {
    icon: FaCode,
    title: "Software Solutions",
    desc: "Websites, ERP systems, automation and business software.",
  },
];

const quickStats = [
  { value: 1000, suffix: "+", label: "Leads Guided" },
  { value: 24, suffix: "/7", label: "Support Access" },
  { value: 1, suffix: " Day", label: "Avg. Response" },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Codebaby Software | Courses, Placements & Solutions
        </title>

        <meta
          name="description"
          content="Contact Codebaby Software for IT courses, placements, internships, projects and software development solutions."
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* ======================================
            HERO
        ====================================== */}
        <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BG */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-blue-200/25 blur-3xl rounded-full animate-[contactMove1_28s_linear_infinite]" />
            <div className="absolute bottom-0 right-0 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-sky-200/25 blur-3xl rounded-full animate-[contactMove2_34s_linear_infinite]" />
          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs sm:text-sm">
                Contact Codebaby Software
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Let’s Build Your
                <span className="text-blue-600">
                  {" "}Future Together
                </span>
              </h1>

              <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Whether you need training, placements,
                internships, projects or software solutions —
                our team is ready to guide your next step.
              </p>

              {/* PILLS */}
              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Fast Response",
                  "Free Guidance",
                  "Career Focused",
                  "Trusted Support",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white border border-blue-100 rounded-full text-sm text-gray-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <a
                  href={forms.contact}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Submit Inquiry
                  <FaPaperPlane />
                </a>

                <a
                  href="https://wa.me/918073369741"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  WhatsApp Us
                  <FaWhatsapp />
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">

              <div className="grid grid-cols-3 gap-4">

                {quickStats.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-2xl p-4 text-center"
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      <Counter
                        end={item.value}
                        suffix={item.suffix}
                      />
                    </h3>

                    <p className="text-xs sm:text-sm text-blue-100 mt-2">
                      {item.label}
                    </p>

                  </div>
                ))}

              </div>

              <div className="mt-8 bg-white/10 rounded-3xl p-6">

                <div className="flex items-center gap-3">
                  <FaHeadset className="text-2xl" />

                  <h3 className="text-2xl font-bold">
                    Quick Support
                  </h3>
                </div>

                <p className="mt-4 text-blue-100 leading-relaxed">
                  We help you choose the right path based
                  on your goals and current level.
                </p>

                <div className="mt-5 space-y-3">

                  {[
                    "Courses & Career Guidance",
                    "Placement Support",
                    "Projects & Development",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <FaCheckCircle />
                      <span>{item}</span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ======================================
            MAIN CONTACT GRID
        ====================================== */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Reach Us Directly
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Multiple Ways To Connect
              </h2>

              <div className="mt-8 space-y-5">

                {[
                  {
                    icon: FaPhoneAlt,
                    title: "Call Us",
                    desc: "+91 8073369741",
                    href: "tel:+918073369741",
                  },
                  {
                    icon: FaEnvelope,
                    title: "Email Support",
                    desc: "info@codebabysoftware.in",
                    href: "mailto:info@codebabysoftware.in",
                  },
                  {
                    icon: FaWhatsapp,
                    title: "WhatsApp Chat",
                    desc: "Instant support available",
                    href: "https://wa.me/918073369741",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-4 bg-white border border-blue-100 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                    >
                      <Icon className="text-blue-600 mt-1" />

                      <div>
                        <h3 className="font-bold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>

                    </a>
                  );
                })}

                <div className="flex items-start gap-4 bg-white border border-blue-100 rounded-3xl p-5 shadow-sm">
                  <FaMapMarkerAlt className="text-blue-600 mt-1" />

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Location
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">
                      Karnataka, India <br />
                      Serving clients globally
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-xl">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Inquiry Form
              </p>

              <h3 className="mt-3 text-3xl font-bold text-gray-900">
                Tell Us What You Need
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Submit your requirement and our team
                will guide you with the best solution.
              </p>

              <div className="mt-8 space-y-4">

                {inquiryTypes.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-4"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white text-blue-600 flex items-center justify-center shrink-0">
                        <Icon />
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>

                        <p className="text-sm text-gray-600 mt-1">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

              <a
                href={forms.contact}
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Open Inquiry Form
                <FaArrowRight />
              </a>

              <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                <FaClock />
                Usually responds within a few hours
              </div>

            </div>

          </div>

        </section>

        {/* ======================================
            CTA
        ====================================== */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Need Immediate Help?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Talk with our team today and get the
              right direction for your career or business.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="https://wa.me/918073369741"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                WhatsApp Now
                <FaWhatsapp />
              </a>

              <Link
                to="/courses"
                className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                Explore Courses
                <FaArrowRight />
              </Link>

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