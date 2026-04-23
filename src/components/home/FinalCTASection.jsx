// src/components/home/FinalCTASection.jsx

import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const benefits = [
  "Career Focused Courses",
  "Placement Support",
  "Projects & Internships",
  "Software Solutions",
];

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

      {/* ======================================
          BACKGROUND FLOW
      ====================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[ctaMove1_28s_linear_infinite]" />

        <div className="absolute bottom-0 right-0 w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[ctaMove2_34s_linear_infinite]" />

        <div className="absolute top-1/2 left-1/3 w-[220px] sm:w-[280px] md:w-[320px] h-[220px] sm:h-[280px] md:h-[320px] bg-cyan-200/15 blur-3xl rounded-full animate-[ctaMove3_38s_linear_infinite]" />

      </div>

      <div className="container-custom relative z-10">

        {/* ======================================
            CTA CARD
        ====================================== */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-[28px] sm:rounded-[32px] shadow-2xl overflow-hidden">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 blur-3xl rounded-full" />

          <div className="relative z-10 px-5 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 md:py-14 lg:py-16">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* ======================================
                  LEFT SIDE
              ====================================== */}
              <div className="text-center lg:text-left">

                <p className="text-blue-100 font-semibold uppercase tracking-wide text-xs sm:text-sm">
                  Start Your Growth Journey
                </p>

                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  Ready to Build Your Future With
                  <span className="block text-blue-100">
                    Codebaby Software?
                  </span>
                </h2>

                <p className="mt-5 text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Whether you need career-focused training,
                  placements, internships, project solutions,
                  or software development — our team is ready
                  to help you grow.
                </p>

                {/* BENEFITS */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {benefits.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3 backdrop-blur-md"
                    >
                      <FaCheckCircle className="text-white shrink-0" />

                      <span className="text-white text-sm">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              {/* ======================================
                  RIGHT SIDE CARD
              ====================================== */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10">

                <h3 className="text-2xl font-bold text-white text-center lg:text-left">
                  Take The Next Step Today
                </h3>

                <p className="mt-3 text-blue-100 leading-relaxed text-sm sm:text-base text-center lg:text-left">
                  Connect with our team and choose the right
                  path for your career or business goals.
                </p>

                {/* BUTTONS */}
                <div className="mt-8 space-y-4">

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition"
                  >
                    Contact Our Team
                    <FaArrowRight />
                  </Link>

                  <Link
                    to="/courses"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
                  >
                    Explore Courses
                  </Link>

                </div>

                {/* QUICK CONTACT */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">

                  <div className="flex items-center justify-center lg:justify-start gap-3 text-white text-sm">
                    <FaPhoneAlt />
                    Quick Support Available
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-3 text-white text-sm">
                    <FaWhatsapp />
                    WhatsApp Assistance Ready
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================
          CSS
      ====================================== */}
      <style>
        {`
          @keyframes ctaMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes ctaMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }

          @keyframes ctaMove3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(110px,-70px); }
          }
        `}
      </style>

    </section>
  );
};

export default FinalCTASection;