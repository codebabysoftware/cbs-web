// src/components/home/InternshipsPreview.jsx

import { internships } from "../../data/internships";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBriefcase,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const InternshipsPreview = () => {
  const previewInternships = internships.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 bg-gradient-to-br from-white via-blue-50 to-white">

      {/* ======================================
          BACKGROUND GLOW
      ====================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[260px] sm:w-[340px] h-[260px] sm:h-[340px] bg-blue-200/20 blur-3xl rounded-full animate-[internMove1_28s_linear_infinite]" />

        <div className="absolute bottom-0 right-0 w-[260px] sm:w-[340px] h-[260px] sm:h-[340px] bg-sky-200/20 blur-3xl rounded-full animate-[internMove2_34s_linear_infinite]" />

      </div>

      <div className="container-custom relative z-10">

        {/* ======================================
            HEADER
        ====================================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mb-10">

          <div className="max-w-2xl">

            <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs sm:text-sm">
              Career Growth Programs
            </p>

            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Kickstart Your
              <span className="text-blue-600">
                {" "}Career
              </span>
            </h2>

            <p className="text-slate-600 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              Gain real industry experience with
              structured internship programs designed
              to make you job-ready.
            </p>

          </div>

          <Link
            to="/internships"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            View All Internships
            <FaArrowRight />
          </Link>

        </div>

        {/* ======================================
            GRID
        ====================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {previewInternships.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl border border-blue-100 transition-all duration-300 hover:-translate-y-2 p-5 sm:p-6 flex flex-col justify-between group"
            >

              {/* TOP */}
              <div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
                  <FaBriefcase />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                {/* Duration */}
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <FaClock className="text-blue-500 shrink-0" />
                  <span>{item.duration}</span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm mt-4 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Benefits */}
                <div className="mt-5 space-y-2">

                  {item.benefits
                    .slice(0, 3)
                    .map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <FaCheckCircle className="text-blue-500 mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}

                </div>

              </div>

              {/* BOTTOM */}
              <div className="mt-7 pt-5 border-t border-blue-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <span className="text-blue-600 font-bold text-xl">
                  ₹{item.price}
                </span>

                <Link
                  to="/apply"
                  className="w-full sm:w-auto text-center bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition"
                >
                  Apply Now
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ======================================
          CSS
      ====================================== */}
      <style>
        {`
          @keyframes internMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(160px,70px); }
          }

          @keyframes internMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-140px,-70px); }
          }
        `}
      </style>

    </section>
  );
};

export default InternshipsPreview;