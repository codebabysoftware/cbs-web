// src/components/home/PlacementCTASection.jsx

import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaUserTie,
  FaCheckCircle,
  FaFileAlt,
  FaHandshake,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  "ATS Resume Optimization",
  "Mock Interviews by IT Experts",
  "Technical + HR Preparation",
  "Career Mentorship Roadmap",
  "Interview Call Guidance",
  "Confidence Building Sessions",
];
 
const specialBenefits = [
  "No upfront burden for selected programs",
  "Pay after placement options available",
  "Result-focused training ecosystem",
];

const PlacementCTASection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

      {/* MOVING BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[placeMove1_28s_linear_infinite]"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[placeMove2_34s_linear_infinite]"></div>

        <div className="absolute top-1/2 left-1/3 w-[320px] h-[320px] bg-cyan-200/15 blur-3xl rounded-full animate-[placeMove3_38s_linear_infinite]"></div>

      </div>

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              Placements + Mock Interviews
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Get Job Ready &
              <span className="text-blue-600"> Get Hired Faster</span>
            </h2>

            <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
              We help freshers, students, and career switchers become interview
              ready with placement support, resume guidance, mock interviews,
              and practical mentorship.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/90 border border-blue-100 rounded-2xl p-4 shadow-sm flex items-start gap-3"
                >
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}

            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <Link
                to="/placements"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Explore Placements <FaArrowRight />
              </Link>

              <Link
                to="/mock-interviews"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition text-center"
              >
                Book Mock Interview
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE PREMIUM PANEL */}
          <div className="space-y-6">

            {/* MAIN CARD */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-8 shadow-2xl">

              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-2xl" />
                <span className="font-semibold">
                  Special Feature
                </span>
              </div>

              <h3 className="mt-5 text-2xl md:text-3xl font-bold leading-tight">
                Pay After Placement
              </h3>

              <p className="mt-4 text-blue-100 leading-relaxed">
                For selected programs, eligible candidates can join with our
                result-oriented model where payment options are linked with
                successful placement outcomes.
              </p>

              <div className="mt-6 space-y-3">

                {specialBenefits.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-2xl p-4 flex items-center gap-3"
                  >
                    <FaCheckCircle />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}

              </div>

            </div>

            {/* MINI STATS */}
            <div className="grid grid-cols-3 gap-4">

              <div className="bg-white border border-blue-100 rounded-2xl p-5 text-center shadow-sm">
                <FaBriefcase className="mx-auto text-blue-600 text-xl" />
                <h4 className="mt-2 font-bold text-blue-600">95%</h4>
                <p className="text-xs text-gray-500">Interview Ready</p>
              </div>

              <div className="bg-white border border-blue-100 rounded-2xl p-5 text-center shadow-sm">
                <FaUserTie className="mx-auto text-blue-600 text-xl" />
                <h4 className="mt-2 font-bold text-blue-600">1:1</h4>
                <p className="text-xs text-gray-500">Mock Sessions</p>
              </div>

              <div className="bg-white border border-blue-100 rounded-2xl p-5 text-center shadow-sm">
                <FaFileAlt className="mx-auto text-blue-600 text-xl" />
                <h4 className="mt-2 font-bold text-blue-600">ATS</h4>
                <p className="text-xs text-gray-500">Resume Boost</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* CSS */}
      <style>
        {`
          @keyframes placeMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(180px,80px); }
          }

          @keyframes placeMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-90px); }
          }

          @keyframes placeMove3 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(120px,-70px); }
          }
        `}
      </style>

    </section>
  );
};

export default PlacementCTASection;