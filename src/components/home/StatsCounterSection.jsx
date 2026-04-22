// src/components/home/StatsCounterSection.jsx

import { useEffect, useRef, useState } from "react";
import {
  FaUsers,
  FaProjectDiagram,
  FaBriefcase,
  FaBookOpen,
  FaHeadset,
  FaUserTie,
} from "react-icons/fa";

const stats = [
  {
    icon: FaUsers,
    number: 1000,
    suffix: "+",
    title: "Students Guided",
    desc: "Career focused learners trained through practical roadmap programs.",
  },
  {
    icon: FaProjectDiagram,
    number: 50,
    suffix: "+",
    title: "Projects Delivered",
    desc: "Academic, mini, industrial and real implementation solutions.",
  },
  {
    icon: FaBriefcase,
    number: 95,
    suffix: "%",
    title: "Interview Readiness",
    desc: "Candidates prepared with confidence and structured mock rounds.",
  },
  {
    icon: FaBookOpen,
    number: 20,
    suffix: "+",
    title: "Courses Available",
    desc: "Modern skill programs aligned with hiring market demand.",
  },
  {
    icon: FaUserTie,
    number: 200,
    suffix: "+",
    title: "Mock Interviews",
    desc: "Technical and HR rounds taken by experienced professionals.",
  },
  {
    icon: FaHeadset,
    number: 24,
    suffix: "/7",
    title: "Support System",
    desc: "Continuous guidance for doubts, progress, and career direction.",
  },
];

const CounterCard = ({ item, start }) => {
  const [count, setCount] = useState(0);
  const Icon = item.icon;

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.ceil(item.number / 60);

    const timer = setInterval(() => {
      current += increment;

      if (current >= item.number) {
        current = item.number;
        clearInterval(timer);
      }

      setCount(current);
    }, 25);

    return () => clearInterval(timer);
  }, [start, item.number]);

  return (
    <div className="group bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* ICON */}
      <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl group-hover:scale-110 group-hover:rotate-6 transition">
        <Icon />
      </div>

      {/* NUMBER */}
      <h3 className="mt-5 text-4xl font-bold text-gray-900">
        {count}
        <span className="text-blue-600">{item.suffix}</span>
      </h3>

      {/* TITLE */}
      <p className="mt-2 font-semibold text-gray-900">
        {item.title}
      </p>

      {/* DESC */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {item.desc}
      </p>

    </div>
  );
};

const StatsCounterSection = () => {
  const sectionRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white"
    >

      {/* FLOWING BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[statsMove1_28s_linear_infinite]"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[statsMove2_34s_linear_infinite]"></div>

        <div className="absolute top-1/2 left-1/3 w-[320px] h-[320px] bg-cyan-200/15 blur-3xl rounded-full animate-[statsMove3_38s_linear_infinite]"></div>

      </div>

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Our Growth In Numbers
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Trusted By Learners,
            <span className="text-blue-600"> Students & Businesses</span>
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Real impact created through courses, placements, project execution,
            mentorship, and continuous support.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {stats.map((item, index) => (
            <CounterCard
              key={index}
              item={item}
              start={startCounter}
            />
          ))}

        </div>

      </div>

      {/* CSS */}
      <style>
        {`
          @keyframes statsMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes statsMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }

          @keyframes statsMove3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(110px,-70px); }
          }
        `}
      </style>

    </section>
  );
};

export default StatsCounterSection;