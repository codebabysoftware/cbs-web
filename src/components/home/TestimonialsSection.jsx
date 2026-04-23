// src/components/TestimonialsSection.jsx

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
    <section className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-200/30 blur-3xl rounded-full" />
      </div>

      <div className="container-custom relative z-10">

        <SectionTitle
          badge="Testimonials"
          title="What Our Students Say"
          subtitle="Real feedback from learners, placed candidates and project clients."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-blue-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-7"
            >
              {/* Quote */}
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-slate-600 leading-relaxed text-[15px]">
                “{item.review}”
              </p>

              {/* User */}
              <div className="mt-6 pt-5 border-t border-blue-50">
                <h4 className="font-bold text-slate-900">
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
    </section>
  );
};

export default TestimonialsSection;