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
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

      {/* SAME FLOWING BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[ctaMove1_28s_linear_infinite]"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[ctaMove2_34s_linear_infinite]"></div>

        <div className="absolute top-1/2 left-1/3 w-[320px] h-[320px] bg-cyan-200/15 blur-3xl rounded-full animate-[ctaMove3_38s_linear_infinite]"></div>

      </div>

      <div className="container-custom relative z-10">

        {/* MAIN CTA CARD */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-[32px] shadow-2xl overflow-hidden">

          {/* INNER GLOW */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 px-6 md:px-10 lg:px-16 py-14 md:py-16">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* LEFT SIDE */}
              <div>

                <p className="text-blue-100 font-semibold uppercase tracking-wide text-sm">
                  Start Your Growth Journey
                </p>

                <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white leading-tight">
                  Ready to Build Your Future With
                  <span className="block text-blue-100">
                    Codebaby Software?
                  </span>
                </h2>

                <p className="mt-5 text-blue-100 text-base md:text-lg leading-relaxed max-w-xl">
                  Whether you need career-focused training, placements,
                  internships, project solutions, or software development —
                  our team is ready to help you grow.
                </p>

                {/* BENEFITS */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">

                  {benefits.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3"
                    >
                      <FaCheckCircle className="text-white" />
                      <span className="text-white text-sm">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10">

                <h3 className="text-2xl font-bold text-white">
                  Take The Next Step Today
                </h3>

                <p className="mt-3 text-blue-100 leading-relaxed">
                  Connect with our team and choose the right path for your
                  career or business goals.
                </p>

                {/* BUTTONS */}
                <div className="mt-8 space-y-4">

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition"
                  >
                    Contact Our Team <FaArrowRight />
                  </Link>

                  <Link
                    to="/courses"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
                  >
                    Explore Courses
                  </Link>

                </div>

                {/* QUICK CONTACT */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">

                  <div className="flex items-center gap-3 text-white text-sm">
                    <FaPhoneAlt />
                    Quick Support Available
                  </div>

                  <div className="flex items-center gap-3 text-white text-sm">
                    <FaWhatsapp />
                    WhatsApp Assistance Ready
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* CSS */}
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