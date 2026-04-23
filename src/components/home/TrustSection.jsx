// src/components/home/TrustSection.jsx

import {
  FaUsers,
  FaProjectDiagram,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

const trustData = [
  {
    number: "1000+",
    label: "Students Trained",
    icon: FaUsers,
  },
  {
    number: "50+",
    label: "Projects Delivered",
    icon: FaProjectDiagram,
  },
  {
    number: "20+",
    label: "Internships",
    icon: FaLaptopCode,
  },
  {
    number: "95%",
    label: "Success Rate",
    icon: FaChartLine,
  },
];

const TrustSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-14 md:py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* ======================================
          BACKGROUND GLOW
      ====================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[220px] sm:w-[300px] md:w-[360px] h-[220px] sm:h-[300px] md:h-[360px] bg-blue-200/20 blur-3xl rounded-full animate-[trustMove1_26s_linear_infinite]" />

        <div className="absolute bottom-0 right-0 w-[220px] sm:w-[300px] md:w-[360px] h-[220px] sm:h-[300px] md:h-[360px] bg-sky-200/20 blur-3xl rounded-full animate-[trustMove2_32s_linear_infinite]" />

      </div>

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs sm:text-sm">
            Trusted Results
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Numbers That Reflect
            <span className="text-blue-600">
              {" "}Our Impact
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Helping students and professionals grow through
            practical learning, placements and real projects.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {trustData.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-white/95 backdrop-blur-md border border-blue-100 rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
              >

                {/* ICON */}
                <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 group-hover:rotate-6 transition">
                  <Icon />
                </div>

                {/* NUMBER */}
                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
                  <span className="text-blue-600">
                    {item.number}
                  </span>
                </h3>

                {/* LABEL */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>

      {/* ======================================
          CSS
      ====================================== */}
      <style>
        {`
          @keyframes trustMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(150px,60px); }
          }

          @keyframes trustMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-130px,-70px); }
          }
        `}
      </style>

    </section>
  );
};

export default TrustSection;