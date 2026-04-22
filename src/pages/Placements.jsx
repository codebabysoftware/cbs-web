// src/pages/Placements.jsx

import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaWhatsapp,
  FaBriefcase,
  FaFileAlt,
  FaUserTie,
  FaLaptopCode,
  FaCheckCircle,
  FaUsers,
  FaChartLine,
  FaStar,
  FaHandshake,
  FaBullseye,
  FaRocket,
  FaClock,
  FaSearch,
  FaComments,
} from "react-icons/fa";

import forms from "../data/forms";

const programs = [
  {
    icon: FaFileAlt,
    title: "Resume Optimization",
    desc: "ATS-friendly resume rewriting aligned with job roles and recruiter expectations.",
  },
  {
    icon: FaUserTie,
    title: "HR Interview Training",
    desc: "Self-introduction, behavioral questions, salary negotiation and confidence building.",
  },
  {
    icon: FaLaptopCode,
    title: "Technical Preparation",
    desc: "Coding rounds, project explanation, fundamentals and role-specific preparation.",
  },
  {
    icon: FaBriefcase,
    title: "Placement Guidance",
    desc: "Application strategy, job targeting, follow-ups and interview pipeline support.",
  },
];

const benefits = [
  "Pay After Placement Options",
  "1:1 Career Guidance",
  "Mock Interviews Included",
  "Resume + LinkedIn Optimization",
  "Job Application Strategy",
  "Confidence Building Support",
];

const process = [
  "Submit your profile",
  "Career assessment & goal mapping",
  "Resume optimization",
  "Skill gap improvement plan",
  "Mock interviews & preparation",
  "Apply strategically & attend interviews",
];

const whoShouldJoin = [
  "Freshers looking for first IT job",
  "Students entering campus placement season",
  "Career gap candidates restarting",
  "Professionals switching roles",
  "Candidates not getting shortlisted",
];

const Placements = () => {
  return (
    <>
      <Helmet>
        <title>
          Placement Support | Jobs, Resume & Mock Interviews | Codebaby Software
        </title>

        <meta
          name="description"
          content="Premium placement assistance by Codebaby Software. Resume building, mock interviews, job support and pay after placement options."
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[placeMove1_28s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[placeMove2_34s_linear_infinite]"></div>
          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Premium Placement Support
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Get Hired With
                <span className="text-blue-600"> Strategy & Support</span>
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                We help students, freshers and professionals become job-ready
                through resume optimization, interview preparation, mock rounds
                and structured placement guidance.
              </p>

              {/* PILLS */}
              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Pay After Placement",
                  "Mock Interviews",
                  "Resume Upgrade",
                  "Career Guidance",
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
                  href={forms.placements}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Apply Now <FaArrowRight />
                </a>

                <a
                  href="https://wa.me/918073369741?text=Hi%20I%20need%20placement%20support."
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  WhatsApp <FaWhatsapp />
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
                    Readiness Boost
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center col-span-2">
                  <FaRocket className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-2xl font-bold">
                    Learn → Apply → Get Hired
                  </h3>
                  <p className="text-sm text-blue-100 mt-2">
                    Practical career acceleration model.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* PROGRAMS */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                What We Help With
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Placement Growth Programs
              </h2>

            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {programs.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition"
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

        {/* BENEFITS + PROCESS */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom grid lg:grid-cols-2 gap-10 items-start">

            {/* BENEFITS */}
            <div>

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Real Career Outcomes
              </h2>

              <div className="mt-8 space-y-4">

                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-blue-100 rounded-2xl p-4 flex gap-3 shadow-sm"
                  >
                    <FaCheckCircle className="text-blue-600 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}

              </div>

            </div>

            {/* PROCESS */}
            <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-xl">

              <div className="flex items-center gap-3">
                <FaSearch className="text-blue-600 text-xl" />
                <p className="text-blue-600 font-semibold uppercase text-sm">
                  Process
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                How It Works
              </h3>

              <div className="mt-8 space-y-4">

                {process.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>

                    <p className="text-gray-700 pt-1">
                      {step}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* WHO SHOULD JOIN */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Best Fit For
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Candidates Who Need Momentum
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                If you are applying but not getting responses, lacking
                confidence or unsure of your next move — this program helps.
              </p>

            </div>

            <div className="space-y-4">

              {whoShouldJoin.map((item, i) => (
                <div
                  key={i}
                  className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3"
                >
                  <FaBullseye className="text-blue-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* EXTRA VALUE */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom grid md:grid-cols-3 gap-6">

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaComments className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Mock Interviews
              </h3>
              <p className="mt-3 text-gray-600">
                Simulate real rounds before the actual interview.
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaHandshake className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Personal Guidance
              </h3>
              <p className="mt-3 text-gray-600">
                Tailored roadmap based on your profile and goals.
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaClock className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Faster Direction
              </h3>
              <p className="mt-3 text-gray-600">
                Avoid random applying and focus on smart execution.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready To Get Placed?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Apply today and let’s build your job strategy together.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href={forms.placements}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Apply Now <FaArrowRight />
              </a>

              <a
                href="tel:+918073369741"
                className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                Call Now <FaWhatsapp />
              </a>

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