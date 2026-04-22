// src/components/home/TestimonialsSection.jsx

import { useEffect, useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Patil",
    role: "Placed Candidate",
    company: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    review:
      "Codebaby Software helped me improve my resume, confidence, and interview skills. I got placed much faster than expected.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Student",
    company: "Java Full Stack Learner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    review:
      "The training was practical and beginner friendly. Mock interviews made a huge difference in my communication and technical rounds.",
  },
  {
    name: "Amit Desai",
    role: "Business Client",
    company: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    review:
      "They developed our website professionally and delivered on time. Great communication and solid technical execution.",
  },
  {
    name: "Pooja Naik",
    role: "Intern",
    company: "Web Development Intern",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    review:
      "Internship experience felt real. I worked on actual tasks, learned Git workflow, and built confidence for industry jobs.",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

      {/* FLOWING BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[testMove1_28s_linear_infinite]"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[testMove2_34s_linear_infinite]"></div>

        <div className="absolute top-1/2 left-1/3 w-[320px] h-[320px] bg-cyan-200/15 blur-3xl rounded-full animate-[testMove3_38s_linear_infinite]"></div>

      </div>

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Success Stories
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            What People Say
            <span className="text-blue-600"> About Us</span>
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Trusted by students, job seekers, interns, and business clients for
            real growth and quality solutions.
          </p>

        </div>

        {/* MAIN TESTIMONIAL CARD */}
        <div className="mt-14 max-w-5xl mx-auto">

          <div className="bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl shadow-2xl p-8 md:p-10">

            <div className="grid lg:grid-cols-3 gap-8 items-center">

              {/* PROFILE */}
              <div className="text-center">

                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-blue-100"
                />

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {testimonials[active].name}
                </h3>

                <p className="text-blue-600 font-medium text-sm">
                  {testimonials[active].role}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {testimonials[active].company}
                </p>

              </div>

              {/* REVIEW */}
              <div className="lg:col-span-2">

                <FaQuoteLeft className="text-blue-200 text-4xl" />

                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                  {testimonials[active].review}
                </p>

                {/* STARS */}
                <div className="mt-6 flex gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

              </div>

            </div>

          </div>

          {/* CONTROLS */}
          <div className="mt-8 flex items-center justify-center gap-4">

            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-blue-100 shadow hover:bg-blue-50 flex items-center justify-center text-blue-600"
            >
              <FaArrowLeft />
            </button>

            {/* DOTS */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    active === index
                      ? "bg-blue-600 w-8"
                      : "bg-blue-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-blue-100 shadow hover:bg-blue-50 flex items-center justify-center text-blue-600"
            >
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>

      {/* CSS */}
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