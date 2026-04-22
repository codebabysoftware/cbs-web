// src/pages/Courses.jsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaLaptopCode,
  FaSignal,
  FaUsers,
  FaCheckCircle,
  FaWhatsapp,
  FaStar,
  FaBookOpen,
  FaSearch,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";
import { useMemo, useState } from "react";

import coursesData from "../data/courses";
import forms from "../data/forms";

const fallbackImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80";

const trustPoints = [
  "Job Ready Roadmaps",
  "Live Projects",
  "Mock Interviews",
  "Placement Support",
];

const benefits = [
  "Industry Focused Curriculum",
  "Beginner To Advanced Path",
  "Hands-on Projects & Practice",
  "Resume + Interview Guidance",
  "Mentor Support",
  "Career Growth Focused",
];

const categories = [
  "All",
  "Java",
  "Python",
  "Frontend",
  "Backend",
  "Full Stack",
  "Data",
  "UI/UX",
];

const Courses = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const courses = Array.isArray(coursesData) ? coursesData : [];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const title = (course.title || "").toLowerCase();
      const desc = (
        course.shortDescription ||
        course.description ||
        ""
      ).toLowerCase();

      const category = (course.category || "").toLowerCase();

      const searchMatch =
        title.includes(search.toLowerCase()) ||
        desc.includes(search.toLowerCase()) ||
        category.includes(search.toLowerCase());

      const categoryMatch =
        activeCategory === "All"
          ? true
          : title.includes(activeCategory.toLowerCase()) ||
            category.includes(activeCategory.toLowerCase());

      return searchMatch && categoryMatch;
    });
  }, [courses, search, activeCategory]);

  return (
    <>
      <Helmet>
        <title>
          IT Courses | Java, Python, Web Development Training | Codebaby
          Software
        </title>

        <meta
          name="description"
          content="Explore premium IT courses by Codebaby Software including Java Full Stack, Python, Frontend, Backend, Web Development and career-ready programs."
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BG */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[coursesMove1_28s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[coursesMove2_34s_linear_infinite]"></div>
          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Premium Career Courses
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Learn Skills Companies
                <span className="text-blue-600"> Hire For</span>
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                Practical learning programs designed for students, freshers,
                career switchers and professionals who want real growth.
              </p>

              {/* PILLS */}
              <div className="mt-8 flex flex-wrap gap-3">

                {trustPoints.map((item, i) => (
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
                  href={forms.courses}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Apply Now <FaArrowRight />
                </a>

                <a
                  href="https://wa.me/918073369741?text=Hi%20I%20want%20course%20details."
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
                    Learners Guided
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <FaStar className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-3xl font-bold">Top</h3>
                  <p className="text-sm text-blue-100">
                    Career Support
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center col-span-2">
                  <FaRocket className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-2xl font-bold">
                    Placement Focused Learning
                  </h3>
                  <p className="text-sm text-blue-100 mt-2">
                    Learn → Build → Crack Interviews → Grow
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* FILTER SECTION */}
        <section className="py-10 bg-white border-b border-blue-50">

          <div className="container-custom">

            {/* SEARCH */}
            <div className="relative max-w-xl mx-auto">

              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-blue-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-200"
              />

            </div>

            {/* CATEGORY PILLS */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">

              {categories.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(item)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeCategory === item
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-blue-100 text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </section>

        {/* COURSES GRID */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>
                <p className="text-blue-600 font-semibold uppercase text-sm">
                  Programs
                </p>

                <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900">
                  Explore Courses
                </h2>
              </div>

              <div className="text-sm text-gray-500">
                {filteredCourses.length} Course
                {filteredCourses.length !== 1 ? "s" : ""} Found
              </div>

            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {filteredCourses.map((course, index) => (
                <div
                  key={course.id || index}
                  className="group bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
                >

                  {/* IMAGE */}
                  <div className="relative h-48 overflow-hidden">

                    <img
                      src={course.thumbnail || course.image || fallbackImage}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                    <span className="absolute top-4 left-4 text-xs px-3 py-1 bg-white/90 text-blue-700 rounded-full font-semibold shadow">
                      {course.level || "All Levels"}
                    </span>

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                      <FaLaptopCode />
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-gray-900 line-clamp-2">
                      {course.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                      {course.shortDescription ||
                        course.description ||
                        "Industry focused practical program."}
                    </p>

                    {/* META */}
                    <div className="mt-5 space-y-2 text-sm text-gray-600">

                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-500" />
                        {course.duration || "Flexible Duration"}
                      </div>

                      <div className="flex items-center gap-2">
                        <FaLayerGroup className="text-blue-500" />
                        {course.category || "Career Program"}
                      </div>

                      <div className="flex items-center gap-2">
                        <FaSignal className="text-blue-500" />
                        {course.level || "All Levels"}
                      </div>

                    </div>

                    {/* ACTIONS */}
                    <div className="mt-6 flex gap-3">

                      <Link
                        to={`/courses/${course.slug || course.id}`}
                        className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold text-center hover:bg-blue-700 transition"
                      >
                        View
                      </Link>

                      <a
                        href={forms.courses}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 px-4 py-3 border border-blue-600 text-blue-600 rounded-xl text-sm font-semibold text-center hover:bg-blue-50 transition"
                      >
                        Apply
                      </a>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* WHY JOIN */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Why Join Codebaby
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Learn Beyond Recorded Content
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                We help learners build confidence, solve real problems and grow
                into employable professionals.
              </p>

            </div>

            <div className="space-y-4">

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

        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready To Start Your IT Career?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Apply today and get expert guidance to choose the best roadmap.
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
                to="/contact"
                className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Talk To Team
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* CSS */}
      <style>
        {`
          @keyframes coursesMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes coursesMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default Courses;