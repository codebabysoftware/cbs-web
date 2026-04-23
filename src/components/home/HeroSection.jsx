// src/components/HeroSection.jsx

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
];

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroImages.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-14 sm:pb-16 md:pb-20 bg-white">

      {/* ======================================
          BLUE MOVING GRADIENT BACKGROUND
      ====================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white" />

        <div className="absolute -top-20 -left-20 w-[320px] sm:w-[420px] md:w-[460px] h-[320px] sm:h-[420px] md:h-[460px] bg-blue-400/20 blur-[100px] rounded-full animate-[blueMove1_22s_linear_infinite]" />

        <div className="absolute top-1/4 right-0 w-[280px] sm:w-[360px] md:w-[420px] h-[280px] sm:h-[360px] md:h-[420px] bg-sky-300/20 blur-[100px] rounded-full animate-[blueMove2_28s_linear_infinite]" />

        <div className="absolute bottom-0 left-1/3 w-[240px] sm:w-[300px] md:w-[360px] h-[240px] sm:h-[300px] md:h-[360px] bg-indigo-300/15 blur-[100px] rounded-full animate-[blueMove3_26s_linear_infinite]" />

      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* ======================================
            LEFT SIDE CONTENT
        ====================================== */}
        <div className="order-1">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Build Industry-Ready <br />
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Tech Skills
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Learn through structured courses, placements,
            mock interviews, hands-on training, real-world
            projects and internships designed to prepare you
            for modern tech careers.
          </p>

          {/* FEATURES */}
          <div className="mt-7 flex flex-wrap gap-3 sm:gap-4 text-sm">

            <span className="px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm text-slate-700">
              ✔ Hands-on Projects
            </span>

            <span className="px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm text-slate-700">
              ✔ Industry Mentors
            </span>

            <span className="px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm text-slate-700">
              ✔ Placement Support
            </span>

          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <Link
              to="/courses"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg text-center"
            >
              Explore Courses
            </Link>

            <Link
              to="/placements"
              className="w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition text-center"
            >
              Placements
            </Link>

          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-2xl">

            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 p-4 shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-slate-900">
                1000+
              </p>
              <p className="text-sm text-slate-500 mt-1">
                IT Aspirants Trained
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 p-4 shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-slate-900">
                50+
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Projects Delivered
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 p-4 shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-slate-900">
                95%
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Success Rate
              </p>
            </div>

          </div>

        </div>

        {/* ======================================
            RIGHT SIDE IMAGE SLIDER
        ====================================== */}
        <div className="order-2 relative block">

          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[430px] lg:h-[560px]">

            <div className="absolute inset-0 rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden border border-white shadow-2xl bg-white">

              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Codebaby Training"
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    active === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                />
              ))}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-xl rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-lg">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  Real Training • Placements • Live Projects
                </p>
              </div>

            </div>

            {/* DOTS */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    active === i
                      ? "w-8 bg-blue-600"
                      : "w-2.5 bg-blue-200"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* ======================================
          CSS
      ====================================== */}
      <style>
        {`
          @keyframes blueMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(180px,90px); }
          }

          @keyframes blueMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-160px,100px); }
          }

          @keyframes blueMove3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(100px,-70px); }
          }
        `}
      </style>

    </section>
  );
};

export default HeroSection;