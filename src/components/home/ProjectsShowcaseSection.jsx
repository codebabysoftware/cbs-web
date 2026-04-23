// src/components/home/ProjectsShowcaseSection.jsx

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

import projectsData from "../../data/projects";

const tabs = [
  { key: "all", label: "All Projects" },
  { key: "academic", label: "Academic" },
  { key: "mini", label: "Mini Projects" },
  { key: "industrial", label: "Industrial" },
];

const fallbackImage =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80";

const ProjectsShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = useMemo(() => {
    if (!projectsData || !Array.isArray(projectsData)) return [];

    let data = [...projectsData];

    if (activeTab !== "all") {
      data = data.filter((item) => {
        const type = (
          item.type ||
          item.category ||
          ""
        ).toLowerCase();

        return type.includes(activeTab);
      });
    }

    return data.slice(0, 6);
  }, [activeTab]);

  const getIcon = (type = "") => {
    const value = type.toLowerCase();

    if (value.includes("academic"))
      return FaGraduationCap;

    if (value.includes("mini"))
      return FaLaptopCode;

    return FaCode;
  };

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

      {/* ======================================
          BACKGROUND FLOW
      ====================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[projectMove1_28s_linear_infinite]" />

        <div className="absolute bottom-0 right-0 w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[projectMove2_34s_linear_infinite]" />

        <div className="absolute top-1/2 left-1/3 w-[220px] sm:w-[280px] md:w-[320px] h-[220px] sm:h-[280px] md:h-[320px] bg-cyan-200/15 blur-3xl rounded-full animate-[projectMove3_38s_linear_infinite]" />

      </div>

      <div className="container-custom relative z-10">

        {/* ======================================
            HEADER
        ====================================== */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs sm:text-sm">
            Real Project Solutions
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Projects That Build
            <span className="text-blue-600">
              {" "}Skills & Results
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
            From student academic submissions to real business
            applications — we build practical projects with
            modern technologies.
          </p>

        </div>

        {/* ======================================
            FILTER TABS
        ====================================== */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white border border-blue-100 text-gray-700 hover:bg-blue-50"
              }`}
            >
              {tab.label}
            </button>
          ))}

        </div>

        {/* ======================================
            GRID
        ====================================== */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((project, index) => {
            const Icon = getIcon(
              project.type ||
                project.category ||
                ""
            );

            return (
              <Link
                key={project.id || index}
                to={`/projects/${project.slug || project.id}`}
                className="group bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                {/* IMAGE */}
                <div className="relative h-48 sm:h-52 overflow-hidden">

                  <img
                    src={
                      project.thumbnail ||
                      project.image ||
                      fallbackImage
                    }
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  <span className="absolute top-3 left-3 text-[11px] sm:text-xs px-3 py-1 bg-white/90 text-blue-700 rounded-full font-semibold shadow">
                    {project.type ||
                      project.category ||
                      "Project"}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6">

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-lg sm:text-xl">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {project.shortDescription ||
                      project.description ||
                      "Real-world project implementation using modern stack."}
                  </p>

                  {/* STACK */}
                  <p className="mt-4 text-sm text-blue-600 font-medium line-clamp-1">
                    {project.techStack?.join(" • ") ||
                      project.stack ||
                      "Modern Technologies"}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    View Project
                    <FaArrowRight className="group-hover:translate-x-1 transition" />
                  </div>

                </div>

              </Link>
            );
          })}

        </div>

        {/* ======================================
            CTA
        ====================================== */}
        <div className="mt-14 sm:mt-16 text-center">

          <Link
            to="/projects"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Explore All Projects
            <FaArrowRight />
          </Link>

        </div>

      </div>

      {/* ======================================
          CSS
      ====================================== */}
      <style>
        {`
          @keyframes projectMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes projectMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }

          @keyframes projectMove3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(110px,-70px); }
          }
        `}
      </style>

    </section>
  );
};

export default ProjectsShowcaseSection;