import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws
} from "react-icons/fa";
import { SiMongodb, SiJavascript, SiDocker } from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden">

      {/* 🔵 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

      {/* Gradient blobs */}
      <div className="absolute w-[500px] h-[500px] bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse top-[-120px] left-[-120px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse bottom-[-120px] right-[-120px]"></div>

    

      {/* MAIN CONTENT */}
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT */}
        <div>

          <div className="inline-block bg-blue-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Industry-Focused Learning Platform
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Build Your Career with{" "}
            <span className="text-primary">Real-World Skills</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Learn through courses, real-world projects, and internships designed 
            to make you job-ready.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link to="/courses" className="btn btn-primary">
              Explore Courses
            </Link>

            <Link to="/apply" className="btn btn-outline">
              Apply Now
            </Link>
          </div>

          <div className="mt-6 flex gap-6 text-sm text-gray-500 flex-wrap">
            <span>✔ 1000+ Students</span>
            <span>✔ Real Projects</span>
            <span>✔ Expert Mentors</span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Learning"
            className="w-full max-w-lg md:max-w-xl rounded-2xl shadow-xl object-cover"
          />
        </div>

      </div>

      {/* MOVING ICONS */}
      <div className="absolute bottom-6 w-full overflow-hidden">
        <div className="flex gap-16 animate-scroll whitespace-nowrap text-4xl text-blue-600">

          <FaReact />
          <FaNodeJs />
          <SiMongodb />
          <FaJava />
          <FaPython />
          <SiJavascript />
          <FaAws />
          <SiDocker />

          {/* duplicate */}
          <FaReact />
          <FaNodeJs />
          <SiMongodb />
          <FaJava />
          <FaPython />
          <SiJavascript />
          <FaAws />
          <SiDocker />

        </div>
      </div>

    </section>
  );
};

export default HeroSection;