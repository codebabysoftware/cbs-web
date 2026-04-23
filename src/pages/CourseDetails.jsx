// src/pages/CourseDetails.jsx

import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaSignal,
  FaLaptopCode,
  FaCheckCircle,
  FaWhatsapp,
  FaUsers,
  FaStar,
  FaBookOpen,
  FaCertificate,
  FaBriefcase,
  FaLayerGroup,
  FaRocket,
  FaPlayCircle,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";

import courses from "../data/courses";
import forms from "../data/forms";

const fallbackImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80";

const trustStats = [
  { value: "1000+", label: "Learners Guided" },
  { value: "95%", label: "Interview Focused" },
  { value: "50+", label: "Projects Built" },
  { value: "24/7", label: "Support" },
];

const CourseDetails = () => {
  const { slug } = useParams();

  const course =
    courses.find(
      (item) =>
        item.slug === slug ||
        String(item.id) === String(slug)
    ) || null;

  if (!course) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Course Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            The course you are looking for does not exist or has been updated.
          </p>

          <Link
            to="/courses"
            className="inline-flex mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Back To Courses
          </Link>
        </div>
      </main>
    );
  }

  const modules = Array.isArray(course.modules)
    ? course.modules
    : [];

  const outcomes = Array.isArray(course.outcomes)
    ? course.outcomes
    : [];

  return (
    <>
      <Helmet>
        <title>{course.title} | Codebaby Software</title>

        <meta
          name="description"
          content={
            course.shortDescription ||
            course.description ||
            `${course.title} training by Codebaby Software`
          }
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* ======================================
            HERO
        ====================================== */}
        <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BG */}
          <div className="absolute inset-0 pointer-events-none">

            <div className="absolute top-0 left-0 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-blue-200/25 blur-3xl rounded-full animate-[cdMove1_28s_linear_infinite]" />

            <div className="absolute bottom-0 right-0 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-sky-200/25 blur-3xl rounded-full animate-[cdMove2_34s_linear_infinite]" />

          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs sm:text-sm">
                Premium Job Ready Program
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {course.title}
              </h1>

              <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                {course.description}
              </p>

              {/* PILLS */}
              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Live Practical Training",
                  "Placement Guidance",
                  "Projects Included",
                  "Mentor Support",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white border border-blue-100 rounded-full text-sm text-gray-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

              {/* META */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                <div className="bg-white rounded-2xl border border-blue-100 p-4 flex gap-3">
                  <FaClock className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-900">
                      {course.duration || "Flexible"}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-blue-100 p-4 flex gap-3">
                  <FaSignal className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Level</p>
                    <p className="font-semibold text-gray-900">
                      {course.level || "All Levels"}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-blue-100 p-4 flex gap-3 sm:col-span-2">
                  <FaLayerGroup className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Category</p>
                    <p className="font-semibold text-gray-900">
                      {course.category || "Technology"}
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <a
                  href={forms.courses}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Enroll Now
                  <FaArrowRight />
                </a>

                <a
                  href={`https://wa.me/918073369741?text=Hi%20I%20need%20details%20about%20${encodeURIComponent(
                    course.title
                  )}`}
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
            <div className="bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-2xl">

              <img
                src={course.thumbnail || fallbackImage}
                alt={course.title}
                className="w-full h-[320px] sm:h-[430px] object-cover"
              />

              <div className="p-6 grid grid-cols-2 gap-4">

                {trustStats.map((item, i) => (
                  <div
                    key={i}
                    className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                      {item.value}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {item.label}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ======================================
            CURRICULUM + SIDEBAR
        ====================================== */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-3 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Curriculum
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                What You Will Learn
              </h2>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">

                {modules.map((item, i) => (
                  <div
                    key={i}
                    className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3"
                  >
                    <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              {/* ROADMAP */}
              <div className="mt-14">

                <h3 className="text-2xl font-bold text-gray-900">
                  Learning Roadmap
                </h3>

                <div className="mt-6 space-y-4">

                  {[
                    "Foundation Concepts",
                    "Core Practical Skills",
                    "Hands-on Projects",
                    "Interview Preparation",
                    "Career Readiness",
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>

                      <div className="bg-white border border-blue-100 rounded-2xl p-4 w-full">
                        {step}
                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-xl h-fit sticky top-24">

              <div className="flex items-center gap-3">
                <FaRocket className="text-blue-600 text-xl" />

                <h3 className="text-2xl font-bold text-gray-900">
                  Course Includes
                </h3>
              </div>

              <div className="mt-6 space-y-4 text-sm text-gray-700">

                <div className="flex gap-3">
                  <FaUsers className="text-blue-600 mt-1" />
                  Mentor Guidance
                </div>

                <div className="flex gap-3">
                  <FaLaptopCode className="text-blue-600 mt-1" />
                  Real Projects
                </div>

                <div className="flex gap-3">
                  <FaCertificate className="text-blue-600 mt-1" />
                  Certification Support
                </div>

                <div className="flex gap-3">
                  <FaBriefcase className="text-blue-600 mt-1" />
                  Placement Assistance
                </div>

                <div className="flex gap-3">
                  <FaHeadset className="text-blue-600 mt-1" />
                  Doubt Support
                </div>

              </div>

              <a
                href={forms.courses}
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Apply Now
                <FaArrowRight />
              </a>

            </div>

          </div>

        </section>

        {/* ======================================
            OUTCOMES
        ====================================== */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Outcomes
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                What You Gain
              </h2>

            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {outcomes.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                    <FaChartLine />
                  </div>

                  <p className="mt-5 font-medium text-gray-800">
                    {item}
                  </p>

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
              Ready To Join {course.title}?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Learn practical skills, build projects and move toward your dream career.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href={forms.courses}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Enroll Now
                <FaArrowRight />
              </a>

              <Link
                to="/courses"
                className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
              >
                View All Courses
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-blue-100 p-3 sm:hidden">
        <a
          href={forms.courses}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold"
        >
          Enroll This Course
          <FaArrowRight />
        </a>
      </div>

      {/* CSS */}
      <style>
        {`
          @keyframes cdMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes cdMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default CourseDetails;