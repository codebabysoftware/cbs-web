// src/components/home/ServicesSection.jsx

import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaUserTie,
  FaLaptopCode,
  FaCode,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const featuredService = {
  title: "Placement Services",
  icon: FaBriefcase,
  desc:
    "Get interview calls, resume guidance, mock interviews, recruiter preparation and complete career support to land your dream IT job.",
  path: "/placements",
  tag: "Most Demanded",
  stats: [
    "95% Success Focus",
    "HR + Tech Rounds",
    "Career Guidance",
  ],
};

const services = [
  {
    title: "Job Ready Courses",
    icon: FaGraduationCap,
    desc:
      "Learn industry-ready skills with practical roadmap training from beginner to advanced level.",
    path: "/courses",
    tag: "Popular",
  },
  {
    title: "Academic Projects",
    icon: FaProjectDiagram,
    desc:
      "Mini, major, final-year and real implementation projects with complete guidance.",
    path: "/projects?type=academic",
    tag: "Students",
  },
  {
    title: "Mock Interviews",
    icon: FaUserTie,
    desc:
      "Practice technical + HR interviews with professionals and get feedback instantly.",
    path: "/mock-interviews",
    tag: "Career Boost",
  },
  {
    title: "Internships",
    icon: FaLaptopCode,
    desc:
      "Gain real-world exposure, guided projects, certification and work experience.",
    path: "/internships",
    tag: "Experience",
  },
  {
    title: "Software Solutions",
    icon: FaCode,
    desc:
      "Custom websites, web apps, business software and scalable solutions for companies.",
    path: "/contact",
    tag: "Business",
    wide: true,
  },
];

const ServicesSection = () => {
  const FeaturedIcon = featuredService.icon;

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-12 md:pt-16 pb-14 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

      {/* ======================================
          MOVING BACKGROUND
      ====================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-10 left-0 w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-blue-200/25 blur-3xl rounded-full animate-[bgmove1_26s_linear_infinite]" />

        <div className="absolute top-1/3 right-0 w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[bgmove2_32s_linear_infinite]" />

        <div className="absolute bottom-0 left-1/4 w-[220px] sm:w-[300px] md:w-[360px] h-[220px] sm:h-[300px] md:h-[360px] bg-cyan-200/20 blur-3xl rounded-full animate-[bgmove3_36s_linear_infinite]" />

      </div>

      <div className="container-custom relative z-10">

        {/* ======================================
            HEADER
        ====================================== */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs sm:text-sm">
            Our Premium Services
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Solutions That Create
            <span className="text-blue-600">
              {" "}Real Results
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
            Whether you want a job, project support,
            real experience or software for your business
            — we help you grow faster.
          </p>

        </div>

        {/* ======================================
            FEATURED CARD
        ====================================== */}
        <div className="mt-12 sm:mt-14">

          <Link
            to={featuredService.path}
            className="group block bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-5 sm:p-7 md:p-10 shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              {/* LEFT */}
              <div>

                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-xs sm:text-sm font-semibold">
                  {featuredService.tag}
                </span>

                <div className="mt-5 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 flex items-center justify-center text-2xl sm:text-3xl">
                  <FeaturedIcon />
                </div>

                <h3 className="mt-5 text-2xl sm:text-3xl font-bold leading-tight">
                  {featuredService.title}
                </h3>

                <p className="mt-4 text-blue-100 text-sm sm:text-base leading-relaxed">
                  {featuredService.desc}
                </p>

              </div>

              {/* RIGHT */}
              <div className="grid gap-4">

                {featuredService.stats.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3"
                  >
                    <FaCheckCircle className="shrink-0" />
                    <span className="text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </Link>

        </div>

        {/* ======================================
            SERVICES GRID
        ====================================== */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-fr">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={index}
                to={service.path}
                className={`group bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col ${
                  service.wide
                    ? "sm:col-span-2 lg:col-span-2"
                    : "sm:col-span-1 lg:col-span-2"
                }`}
              >

                <span className="inline-block text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold w-fit">
                  {service.tag}
                </span>

                <div className="mt-4 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl sm:text-2xl group-hover:rotate-6 group-hover:scale-110 transition">
                  <Icon />
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  Learn More
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </div>

              </Link>
            );
          })}

        </div>

      </div>

      {/* ======================================
          CSS
      ====================================== */}
      <style>
        {`
          @keyframes bgmove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(180px,70px); }
          }

          @keyframes bgmove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-140px,90px); }
          }

          @keyframes bgmove3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(110px,-80px); }
          }
        `}
      </style>

    </section>
  );
};

export default ServicesSection;