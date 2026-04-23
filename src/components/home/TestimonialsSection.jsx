// src/components/home/TestimonialsSection.jsx

import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

const testimonials = [
  {
    name: "Rahul Patil",
    role: "Java Full Stack Student",
    review:
      "Codebaby Software helped me gain confidence with real projects and interview preparation. The mentoring was practical and industry-focused.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Placed Candidate",
    review:
      "The mock interviews and placement guidance were excellent. I improved my communication and got selected quickly.",
  },
  {
    name: "Aditya Joshi",
    role: "Python Internship Trainee",
    review:
      "Best place to learn with hands-on experience. The internship tasks felt like real company work and boosted my skills.",
  },
  {
    name: "Pooja Desai",
    role: "Frontend Developer Learner",
    review:
      "Loved the structured teaching style. React concepts, projects and resume support were extremely useful.",
  },
  {
    name: "Kiran Naik",
    role: "Project Client",
    review:
      "Professional service and timely delivery. They completed my final year project with documentation and guidance.",
  },
  {
    name: "Nikhil More",
    role: "Mock Interview Candidate",
    review:
      "The feedback I received after mock interviews directly helped me crack my next technical round.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

      {/* ======================================
          BACKGROUND GLOW
      ====================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-blue-200/25 blur-3xl rounded-full animate-[testMove1_28s_linear_infinite]" />

        <div className="absolute bottom-0 right-0 w-[260px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[420px] bg-sky-200/25 blur-3xl rounded-full animate-[testMove2_34s_linear_infinite]" />

        <div className="absolute top-1/2 left-1/3 w-[220px] sm:w-[280px] md:w-[320px] h-[220px] sm:h-[280px] md:h-[320px] bg-cyan-200/15 blur-3xl rounded-full animate-[testMove3_38s_linear_infinite]" />

      </div>

      <div className="container-custom relative z-10">

        {/* ======================================
            HEADER
        ====================================== */}
        <SectionTitle
          badge="Testimonials"
          title="What Our Students Say"
          subtitle="Real feedback from learners, placed candidates and project clients."
        />

        {/* ======================================
            GRID
        ====================================== */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-white/95 backdrop-blur-md rounded-3xl border border-blue-100 p-5 sm:p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >

              {/* Quote */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg group-hover:scale-110 transition">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-5 text-yellow-400 text-sm sm:text-base">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-slate-600 leading-relaxed text-sm sm:text-[15px] flex-grow">
                “{item.review}”
              </p>

              {/* Footer */}
              <div className="mt-6 pt-5 border-t border-blue-50">

                <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                  {item.name}
                </h4>

                <p className="text-sm text-blue-600 font-medium mt-1">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ======================================
          CSS
      ====================================== */}
      <style>
        {`
          @keyframes testMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes testMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }

          @keyframes testMove3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(110px,-70px); }
          }
        `}
      </style>

    </section>
  );
};

export default TestimonialsSection;