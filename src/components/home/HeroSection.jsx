// src/components/home/HeroSection.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

const techIcons = [
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
];

const heroImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1552664730-d307ca884978",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
];

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pt-8 md:pt-16 pb-16 md:pb-24">

      {/* WHOLE SCREEN MOVING LIGHT BLUE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-200/30 blur-3xl rounded-full animate-[bgmove1_26s_linear_infinite]"></div>

        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-sky-200/25 blur-3xl rounded-full animate-[bgmove2_32s_linear_infinite]"></div>

        <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-cyan-200/20 blur-3xl rounded-full animate-[bgmove3_38s_linear_infinite]"></div>

      </div>

      <div className="container-custom relative z-10">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">

          {/* LEFT SECTION */}
          <div>

            {/* BIGGER COMPANY NAME */}
            <h2 className="text-blue-600 font-bold text-2xl md:text-4xl tracking-tight mb-3">
              CODEBABY SOFTWARE
            </h2>

            {/* LITTLE SMALLER HEADLINE */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight text-gray-900">
              Build <span className="text-blue-600">Software.</span>
              <br />
              Build <span className="text-blue-600">Skills.</span>
              <br />
              Build <span className="text-blue-600">Careers.</span>
            </h1>

            {/* TEXT */}
            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              We provide software solutions for businesses and help IT aspirants
              become industry-ready through courses, placements, mock
              interviews, internships, and live project exposure.
            </p>

            {/* SERVICES PRIORITY ORDER */}
            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "Job Ready Courses",
                "Placement Support",
                "Academic Projects",
                "Industrial Projects",
                "Mock Interviews",
                "Internships",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white border border-blue-100 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <Link
                to="/courses"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Explore Courses <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition text-center"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="relative">

            {/* IMAGE CARD */}
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-blue-100">

              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="workspace"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    activeImage === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>

            </div>

            {/* FLOATING STATS CARD */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-2xl px-5 py-4 border border-blue-100 hidden md:block min-w-[240px]">

              <div className="grid grid-cols-3 gap-4 text-center">

                <div>
                  <h4 className="font-bold text-blue-600 text-lg">50+</h4>
                  <p className="text-xs text-gray-500">Projects</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 text-lg">95%</h4>
                  <p className="text-xs text-gray-500">Placement</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 text-lg">1000+</h4>
                  <p className="text-xs text-gray-500">Students</p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* TECH STACK */}
        <div className="mt-16 overflow-hidden border-y border-blue-100 py-5">

          <div className="flex w-max animate-[marquee_22s_linear_infinite] gap-14">

            {[...techIcons, ...techIcons, ...techIcons].map((Icon, index) => (
              <div
                key={index}
                className="text-3xl md:text-4xl text-blue-500 opacity-80 hover:scale-125 transition"
              >
                <Icon />
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.33%); }
          }

          @keyframes bgmove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(180px,80px); }
          }

          @keyframes bgmove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-160px,100px); }
          }

          @keyframes bgmove3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(120px,-90px); }
          }
        `}
      </style>

    </section>
  );
};

export default HeroSection;