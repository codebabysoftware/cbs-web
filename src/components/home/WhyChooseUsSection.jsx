// src/components/home/WhyChooseUsSection.jsx

import {
  FaUserTie,
  FaLaptopCode,
  FaBriefcase,
  FaProjectDiagram,
  FaCertificate,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaUserTie,
    title: "Industry Expert Mentors",
    desc: "Learn directly from professionals working in IT companies with practical real-world guidance.",
  },
  {
    icon: FaLaptopCode,
    title: "Hands-On Practical Learning",
    desc: "Focus on implementation, coding practice, live tasks, and project execution instead of theory only.",
  },
  {
    icon: FaBriefcase,
    title: "Placement Focused Roadmap",
    desc: "Resume building, mock interviews, aptitude direction, hiring support, and job readiness.",
  },
  { 
    icon: FaProjectDiagram,
    title: "Real Projects Exposure",
    desc: "Academic, industrial, startup, and portfolio-grade projects to build confidence and experience.",
  },
  {
    icon: FaCertificate,
    title: "Internship & Certification",
    desc: "Structured internships with guided tasks, completion certificates, and real workflow exposure.",
  },
  {
    icon: FaHeadset,
    title: "Continuous Support",
    desc: "Get assistance even after enrollment with doubt solving, mentorship, and progress guidance.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

      {/* SAME FLOWING BACKGROUND AS HERO */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-10 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[whyMove1_28s_linear_infinite]"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[whyMove2_34s_linear_infinite]"></div>

        <div className="absolute top-1/2 left-1/3 w-[320px] h-[320px] bg-cyan-200/15 blur-3xl rounded-full animate-[whyMove3_38s_linear_infinite]"></div>

      </div>

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Why Choose Codebaby
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            More Than Training.
            <span className="text-blue-600"> We Build Careers.</span>
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            We combine training, placements, internships, projects, and software
            solutions into one practical ecosystem that helps students and
            businesses grow faster.
          </p>

        </div>

        {/* TRUST STRIP */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">

          {[
            "1000+ Students Guided",
            "Real Industry Mentors",
            "Placement Support",
            "Live Projects",
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white border border-blue-100 rounded-full text-sm text-gray-700 shadow-sm"
            >
              {item}
            </span>
          ))}

        </div>

        {/* MAIN GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl group-hover:scale-110 group-hover:rotate-6 transition">
                  <Icon />
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

        {/* BOTTOM FEATURE PANEL */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* LEFT */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                One Platform for Skills, Jobs & Growth
              </h3>

              <p className="mt-4 text-blue-100 leading-relaxed">
                Instead of searching different places for courses, placements,
                internships, mock interviews, and project support — get
                everything in one ecosystem.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid gap-4">

              {[
                "Courses + Mock Interviews",
                "Projects + Internship Experience",
                "Placement Guidance + Hiring Readiness",
              ].map((point, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-2xl p-4 flex items-center gap-3"
                >
                  <FaCheckCircle />
                  <span>{point}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ANIMATION CSS */}
      <style>
        {`
          @keyframes whyMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(180px,80px); }
          }

          @keyframes whyMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-90px); }
          }

          @keyframes whyMove3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(120px,-70px); }
          }
        `}
      </style>

    </section>
  );
};

export default WhyChooseUsSection;