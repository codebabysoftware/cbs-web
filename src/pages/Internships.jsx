// src/pages/Internships.jsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaLaptopCode,
  FaUsers,
  FaCheckCircle,
  FaWhatsapp,
  FaStar,
  FaCertificate,
  FaBriefcase,
  FaSearch,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";
import { useMemo, useState } from "react";

import internshipsData from "../data/internships";
import forms from "../data/forms";

const fallbackImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";

const trustPoints = [
  "Real Experience",
  "Live Projects",
  "Mentor Guided",
  "Certificate Included",
];

const benefits = [
  "Industry Exposure",
  "Hands-on Practical Tasks",
  "Portfolio Development",
  "Communication Growth",
  "Job Readiness Support",
  "Career Confidence",
];

const categories = [
  "All",
  "Web",
  "Java",
  "Python",
  "Frontend",
  "Backend",
  "Data",
  "UI/UX",
];

const Internships = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const internships = Array.isArray(internshipsData)
    ? internshipsData
    : [];

  const filteredInternships = useMemo(() => {
    return internships.filter((item) => {
      const title = (item.title || "").toLowerCase();
      const desc = (
        item.shortDescription ||
        item.description ||
        ""
      ).toLowerCase();

      const category = (item.category || "").toLowerCase();

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
  }, [internships, search, activeCategory]);

  return (
    <>
      <Helmet>
        <title>
          Internships | Live Industry Internship Programs | Codebaby Software
        </title>

        <meta
          name="description"
          content="Explore premium internships by Codebaby Software in Java, Python, Web Development, Frontend, Backend, Data and UI/UX with certificate and practical exposure."
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BG */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[internMove1_28s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[internMove2_34s_linear_infinite]"></div>
          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Premium Internship Programs
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Learn By
                <span className="text-blue-600"> Working Real Tasks</span>
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                Get practical experience, mentor guidance, project exposure and
                internship certification designed to make you industry ready.
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
                  href={forms.internships}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Apply Internship <FaArrowRight />
                </a>

                <a
                  href="https://wa.me/918073369741?text=Hi%20I%20want%20internship%20details."
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
                    Students Guided
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <FaCertificate className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-3xl font-bold">Yes</h3>
                  <p className="text-sm text-blue-100">
                    Certification
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center col-span-2">
                  <FaRocket className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-2xl font-bold">
                    Build Experience Before Job
                  </h3>
                  <p className="text-sm text-blue-100 mt-2">
                    Learn → Work → Build Portfolio → Grow
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* FILTER */}
        <section className="py-10 bg-white border-b border-blue-50">

          <div className="container-custom">

            {/* SEARCH */}
            <div className="relative max-w-xl mx-auto">

              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search internships..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-blue-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-200"
              />

            </div>

            {/* CATEGORIES */}
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

        {/* GRID */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>
                <p className="text-blue-600 font-semibold uppercase text-sm">
                  Opportunities
                </p>

                <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900">
                  Explore Internships
                </h2>
              </div>

              <div className="text-sm text-gray-500">
                {filteredInternships.length} Internship
                {filteredInternships.length !== 1 ? "s" : ""} Found
              </div>

            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {filteredInternships.map((item, index) => (
                <div
                  key={item.id || index}
                  className="group bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
                >

                  {/* IMAGE */}
                  <div className="relative h-48 overflow-hidden">

                    <img
                      src={item.thumbnail || item.image || fallbackImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                    <span className="absolute top-4 left-4 text-xs px-3 py-1 bg-white/90 text-blue-700 rounded-full font-semibold shadow">
                      {item.level || "All Levels"}
                    </span>

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                      <FaLaptopCode />
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                      {item.shortDescription ||
                        item.description ||
                        "Practical industry internship program."}
                    </p>

                    {/* META */}
                    <div className="mt-5 space-y-2 text-sm text-gray-600">

                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-500" />
                        {item.duration || "Flexible Duration"}
                      </div>

                      <div className="flex items-center gap-2">
                        <FaLayerGroup className="text-blue-500" />
                        {item.category || "Technology"}
                      </div>

                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-blue-500" />
                        Certificate Included
                      </div>

                    </div>

                    {/* ACTIONS */}
                    <div className="mt-6 flex gap-3">

                      <Link
                        to={`/internships/${item.slug || item.id}`}
                        className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold text-center hover:bg-blue-700 transition"
                      >
                        View
                      </Link>

                      <a
                        href={forms.internships}
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
                Why Join Internship
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Convert Learning Into Experience
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                We help learners move beyond theory into real execution,
                collaboration and professional confidence.
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

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready To Start Your Internship Journey?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Apply now and gain practical experience that helps your career.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href={forms.internships}
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
                Contact Team
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* CSS */}
      <style>
        {`
          @keyframes internMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes internMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default Internships;