// src/components/home/CoursesPreviewSection.jsx

import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaSignal,
  FaLaptopCode,
} from "react-icons/fa";

import coursesData from "../../data/courses";

const fallbackImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80";

const CoursesPreviewSection = () => {
  const previewCourses = coursesData.slice(0, 6);

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

      {/* ======================================
          BACKGROUND GLOW
      ====================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[courseMove1_28s_linear_infinite]" />

        <div className="absolute bottom-0 right-0 w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[courseMove2_34s_linear_infinite]" />

        <div className="absolute top-1/2 left-1/3 w-[220px] sm:w-[280px] md:w-[320px] h-[220px] sm:h-[280px] md:h-[320px] bg-cyan-200/15 blur-3xl rounded-full animate-[courseMove3_38s_linear_infinite]" />

      </div>

      <div className="container-custom relative z-10">

        {/* ======================================
            HEADER
        ====================================== */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs sm:text-sm">
            Career Focused Courses
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Learn Skills Companies
            <span className="text-blue-600">
              {" "}Actually Hire For
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
            Real roadmap-based programs from beginner to advanced level
            with practical projects, interview preparation and
            placement support.
          </p>

        </div>

        {/* TRUST PILLS */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">

          {[
            "1000+ Learners",
            "Live Projects",
            "Placement Focused",
            "Mock Interviews",
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white border border-blue-100 rounded-full text-xs sm:text-sm text-gray-700 shadow-sm"
            >
              {item}
            </span>
          ))}

        </div>

        {/* ======================================
            COURSES GRID
        ====================================== */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {previewCourses.map((course, index) => (
            <Link
              key={course.id || index}
              to={`/courses/${course.slug || course.id}`}
              className="group bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden h-48 sm:h-52">

                <img
                  src={
                    course.thumbnail ||
                    course.image ||
                    fallbackImage
                  }
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                <span className="absolute top-3 left-3 text-[11px] sm:text-xs px-3 py-1 bg-white/90 text-blue-700 rounded-full font-semibold shadow">
                  {course.level ||
                    "Beginner to Advanced"}
                </span>

              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-lg sm:text-xl">
                  <FaLaptopCode />
                </div>

                <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900 line-clamp-2">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {course.shortDescription ||
                    course.description ||
                    "Industry-focused practical training program."}
                </p>

                {/* META */}
                <div className="mt-5 space-y-2 text-sm text-gray-600">

                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500 shrink-0" />
                    <span>
                      {course.duration ||
                        "Flexible Duration"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaSignal className="text-blue-500 shrink-0" />
                    <span>
                      {course.category ||
                        "Career Program"}
                    </span>
                  </div>

                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  View Course
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* ======================================
            CTA
        ====================================== */}
        <div className="mt-14 sm:mt-16 text-center">

          <Link
            to="/courses"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Explore All Courses
            <FaArrowRight />
          </Link>

        </div>

      </div>

      {/* ======================================
          CSS
      ====================================== */}
      <style>
        {`
          @keyframes courseMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes courseMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }

          @keyframes courseMove3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(110px,-70px); }
          }
        `}
      </style>

    </section>
  );
};

export default CoursesPreviewSection;