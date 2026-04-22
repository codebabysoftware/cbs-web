// src/pages/MockInterviews.jsx

import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaWhatsapp,
  FaPhoneAlt,
  FaUserTie,
  FaLaptopCode,
  FaUsers,
  FaCheckCircle,
  FaComments,
  FaStar,
  FaChartLine,
  FaBriefcase,
  FaClipboardList,
  FaBullseye,
  FaFileAlt,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

import forms from "../data/forms";

const interviewTypes = [
  {
    icon: FaUserTie,
    title: "HR Mock Interview",
    desc: "Communication, introductions, behavioral questions, confidence and salary discussion preparation.",
  },
  {
    icon: FaLaptopCode,
    title: "Technical Mock Interview",
    desc: "Coding, DSA basics, project explanation, debugging and role-specific technical rounds.",
  },
  {
    icon: FaUsers,
    title: "Panel Interview",
    desc: "Realistic multiple interviewer simulation to improve pressure handling and clarity.",
  },
  {
    icon: FaBriefcase,
    title: "Experienced Candidate Mock",
    desc: "Switch preparation, leadership rounds, project ownership and senior-level interviews.",
  },
];

const benefits = [
  "1:1 Personalized Session",
  "Detailed Feedback Report",
  "Resume Review Guidance",
  "Confidence Building Strategy",
  "Technical + HR Preparation",
  "Interview Performance Score",
];

const process = [
  "Choose your target role",
  "Fill booking form",
  "Get slot confirmation",
  "Attend live mock interview",
  "Receive feedback report",
  "Improve weak areas & retry",
];

const whoShouldJoin = [
  "Freshers preparing for first job",
  "Students entering campus placements",
  "Working professionals switching jobs",
  "Candidates with interview fear",
  "Anyone needing real practice",
];

const MockInterviews = () => {
  return (
    <>
      <Helmet>
        <title>
          Mock Interviews | HR & Technical Practice | Codebaby Software
        </title>

        <meta
          name="description"
          content="Book premium mock interviews with Codebaby Software. HR, technical, panel and experienced candidate interview practice with real feedback."
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[mockMove1_28s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[mockMove2_34s_linear_infinite]"></div>
          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Premium Mock Interview Program
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Crack Interviews With
                <span className="text-blue-600"> Confidence</span>
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                Practice with professionals through realistic interview sessions.
                Improve communication, technical answers, body language and final
                performance before real opportunities.
              </p>

              {/* PILLS */}
              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "HR + Technical",
                  "1:1 Sessions",
                  "Feedback Report",
                  "Confidence Boost",
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
                  href={forms.mockInterviews}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Book Interview <FaArrowRight />
                </a>

                <a
                  href="https://wa.me/918073369741?text=Hi%20I%20want%20mock%20interview%20details."
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
                  <FaChartLine className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-3xl font-bold">95%</h3>
                  <p className="text-sm text-blue-100">
                    Confidence Gain
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <FaComments className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-3xl font-bold">1:1</h3>
                  <p className="text-sm text-blue-100">
                    Expert Sessions
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center col-span-2">
                  <FaStar className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-2xl font-bold">
                    Real Interview Simulation
                  </h3>
                  <p className="text-sm text-blue-100 mt-2">
                    Practice before actual opportunities.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* TYPES */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Interview Types
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Choose Your Preparation Style
              </h2>

            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {interviewTypes.map((item, i) => {
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
                Why It Works
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Real Improvement Fast
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
                <FaClipboardList className="text-blue-600 text-xl" />
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
                Who Should Join
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Designed For Real Candidates
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                If interviews make you nervous or you want sharper answers,
                structured feedback and better performance — this is for you.
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

        {/* BONUS */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom grid md:grid-cols-3 gap-6">

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaFileAlt className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Resume Review
              </h3>
              <p className="mt-3 text-gray-600">
                Improve ATS quality and first impression before applying.
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaHandshake className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                HR Confidence
              </h3>
              <p className="mt-3 text-gray-600">
                Improve communication, clarity and professional presence.
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaClock className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Fast Booking
              </h3>
              <p className="mt-3 text-gray-600">
                Get slots quickly and start preparing immediately.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready To Ace Your Next Interview?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Book your mock interview today and walk into real interviews with
              clarity and confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href={forms.mockInterviews}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Book Now <FaArrowRight />
              </a>

              <a
                href="tel:+918073369741"
                className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                Call Now <FaPhoneAlt />
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* CSS */}
      <style>
        {`
          @keyframes mockMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes mockMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default MockInterviews;