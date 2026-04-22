// src/pages/NotFound.jsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaArrowRight,
  FaSearch,
  FaWhatsapp,
  FaExclamationTriangle,
} from "react-icons/fa";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Codebaby Software</title>

        <meta
          name="description"
          content="The page you are looking for does not exist. Return to Codebaby Software homepage."
        />
      </Helmet>

      <main className="min-h-screen overflow-hidden bg-white flex items-center justify-center px-6 py-24">

        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[nfMove1_28s_linear_infinite]"></div>
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[nfMove2_34s_linear_infinite]"></div>
        </div>

        <div className="relative z-10 max-w-3xl w-full text-center">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm">
            <FaExclamationTriangle />
            Error 404
          </div>

          {/* BIG TEXT */}
          <h1 className="mt-8 text-7xl md:text-9xl font-black text-gray-900 leading-none">
            404
          </h1>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
            Page Not Found
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            The page you are trying to access may have been moved, removed,
            renamed or never existed.
          </p>

          {/* SEARCH BOX UI */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex items-center gap-3 bg-white border border-blue-100 rounded-2xl px-5 py-4 shadow-sm">
              <FaSearch className="text-gray-400" />
              <span className="text-gray-400 text-sm">
                Try Courses, Projects, Placements...
              </span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <FaHome />
              Back Home
            </Link>

            <Link
              to="/courses"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
            >
              Explore Courses
              <FaArrowRight />
            </Link>

          </div>

          {/* QUICK LINKS */}
          <div className="mt-14 grid sm:grid-cols-3 gap-4">

            <Link
              to="/projects"
              className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-bold text-gray-900">
                Projects
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Academic & Industrial Builds
              </p>
            </Link>

            <Link
              to="/placements"
              className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-bold text-gray-900">
                Placements
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Career & Hiring Support
              </p>
            </Link>

            <a
              href="https://wa.me/918073369741?text=Hi%20I%20need%20help%20navigating%20the%20website."
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-center">
                <FaWhatsapp className="text-green-500 text-xl" />
              </div>

              <h3 className="mt-3 font-bold text-gray-900">
                Need Help?
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Chat with our team
              </p>
            </a>

          </div>

        </div>

      </main>

      {/* CSS */}
      <style>
        {`
          @keyframes nfMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes nfMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default NotFound;