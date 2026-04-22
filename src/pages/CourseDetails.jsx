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
} from "react-icons/fa";

import courses from "../data/courses";
import forms from "../data/forms";

const fallbackImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80";

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
            The course you are looking for does not exist or may have been updated.
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
            `${course.title} training program by Codebaby Software`
          }
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BG */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[cdMove1_28s_linear_infinite]" />
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[cdMove2_34s_linear_infinite]" />
          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Premium Course Program
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {course.title}
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                {course.description}
              </p>

              {/* META */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                <div className="bg-white border border-blue-100 rounded-2xl p-4 flex gap-3">
                  <FaClock className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-900">
                      {course.duration}
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-blue-100 rounded-2xl p-4 flex gap-3">
                  <FaSignal className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Level</p>
                    <p className="font-semibold text-gray-900">
                      {course.level}
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-blue-100 rounded-2xl p-4 flex gap-3 sm:col-span-2">
                  <FaLayerGroup className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Category</p>
                    <p className="font-semibold text-gray-900">
                      {course.category}
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
                  Apply Now <FaArrowRight />
                </a>

                <a
                  href={`https://wa.me/918073369741?text=Hi%20I%20want%20details%20about%20${encodeURIComponent(
                    course.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  WhatsApp <FaWhatsapp />
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-blue-100 bg-white">
              <img
                src={course.thumbnail || fallbackImage}
                alt={course.title}
                className="w-full h-[430px] object-cover"
              />
            </div>

          </div>

        </section>

        {/* MODULES + SIDEBAR */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-3 gap-8">

            {/* MODULES */}
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
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}

              </div>

            </div>

            {/* SIDEBAR */}
            <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-xl h-fit">

              <div className="flex items-center gap-3">
                <FaBookOpen className="text-blue-600 text-xl" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Course Includes
                </h3>
              </div>

              <div className="mt-6 space-y-4 text-sm">

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
                  Certificate Support
                </div>

                <div className="flex gap-3">
                  <FaBriefcase className="text-blue-600 mt-1" />
                  Placement Assistance
                </div>

              </div>

              <a
                href={forms.courses}
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Enroll Now <FaArrowRight />
              </a>

            </div>

          </div>

        </section>

        {/* OUTCOMES */}
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
                  className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                    <FaStar />
                  </div>

                  <p className="mt-5 font-medium text-gray-800">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready To Join {course.title}?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Build real skills and move toward your dream career with guided learning.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href={forms.courses}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Apply Now <FaArrowRight />
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