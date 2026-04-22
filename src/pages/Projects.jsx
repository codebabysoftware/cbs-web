// src/pages/Projects.jsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaCode,
  FaUsers,
  FaCheckCircle,
  FaWhatsapp,
  FaStar,
  FaSearch,
  FaRocket,
  FaLayerGroup,
  FaLaptopCode,
  FaGlobe,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import { useMemo, useState } from "react";

import projectsData from "../data/projects";
import forms from "../data/forms";

const fallbackImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";

const trustPoints = [
  "Academic Projects",
  "Mini Projects",
  "Industrial Projects",
  "Custom Software",
];

const benefits = [
  "Source Code Support",
  "Documentation Included",
  "Modern Tech Stack",
  "Deployment Guidance",
  "Custom Requirement Handling",
  "Fast Delivery Options",
];

const categories = [
  "All",
  "Academic",
  "Mini",
  "Major",
  "Industrial",
  "Website",
  "Mobile",
  "AI",
];

const Projects = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = Array.isArray(projectsData) ? projectsData : [];

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
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
  }, [projects, search, activeCategory]);

  return (
    <>
      <Helmet>
        <title>
          Projects | Academic, Mini & Industrial Solutions | Codebaby Software
        </title>

        <meta
          name="description"
          content="Explore premium academic, mini, final year and industrial projects by Codebaby Software with source code, documentation and deployment support."
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BG */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[projectsMove1_28s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[projectsMove2_34s_linear_infinite]"></div>
          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Premium Project Solutions
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Build Projects That
                <span className="text-blue-600"> Actually Work</span>
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                Academic, mini, final year, startup and industrial software
                projects built with modern technologies and guided delivery.
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
                  href={forms.projects}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Request Project <FaArrowRight />
                </a>

                <a
                  href="https://wa.me/918073369741?text=Hi%20I%20need%20project%20details."
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
                  <h3 className="mt-3 text-3xl font-bold">500+</h3>
                  <p className="text-sm text-blue-100">
                    Projects Guided
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <FaStar className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-3xl font-bold">Top</h3>
                  <p className="text-sm text-blue-100">
                    Quality Delivery
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center col-span-2">
                  <FaRocket className="mx-auto text-2xl" />
                  <h3 className="mt-3 text-2xl font-bold">
                    Idea → Build → Deliver
                  </h3>
                  <p className="text-sm text-blue-100 mt-2">
                    Professional execution from concept to deployment.
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
                placeholder="Search projects..."
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
                  Solutions
                </p>

                <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900">
                  Explore Projects
                </h2>
              </div>

              <div className="text-sm text-gray-500">
                {filteredProjects.length} Project
                {filteredProjects.length !== 1 ? "s" : ""} Found
              </div>

            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {filteredProjects.map((item, index) => (
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
                      {item.category || "Project"}
                    </span>

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                      <FaCode />
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                      {item.shortDescription ||
                        item.description ||
                        "Modern project solution with guided delivery."}
                    </p>

                    {/* META */}
                    <div className="mt-5 space-y-2 text-sm text-gray-600">

                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-500" />
                        {item.duration || "Flexible Timeline"}
                      </div>

                      <div className="flex items-center gap-2">
                        <FaLayerGroup className="text-blue-500" />
                        {item.category || "Software"}
                      </div>

                      <div className="flex items-center gap-2">
                        <FaLaptopCode className="text-blue-500" />
                        Source + Guidance
                      </div>

                    </div>

                    {/* ACTIONS */}
                    <div className="mt-6 flex gap-3">

                      <Link
                        to={`/projects/${item.slug || item.id}`}
                        className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold text-center hover:bg-blue-700 transition"
                      >
                        View
                      </Link>

                      <a
                        href={forms.projects}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 px-4 py-3 border border-blue-600 text-blue-600 rounded-xl text-sm font-semibold text-center hover:bg-blue-50 transition"
                      >
                        Request
                      </a>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* WHY CHOOSE */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Beyond Just Code Delivery
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                We focus on project quality, explainability, documentation,
                guidance and practical outcomes.
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

        {/* TYPES */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid md:grid-cols-3 gap-6">

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaGraduationCap className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Academic Projects
              </h3>
              <p className="mt-3 text-gray-600">
                Mini, major and final year project solutions for students.
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaBriefcase className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Startup Builds
              </h3>
              <p className="mt-3 text-gray-600">
                MVPs, dashboards, websites and scalable product builds.
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaGlobe className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Business Software
              </h3>
              <p className="mt-3 text-gray-600">
                ERP, CRM, portals, automation and custom tools.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Need A Project Built Professionally?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Submit your requirement and let our team guide the best solution.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href={forms.projects}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Request Project <FaArrowRight />
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
          @keyframes projectsMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes projectsMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default Projects;