// src/components/Footer.jsx

import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-950 to-blue-950 text-white">

      {/* ======================================
          BACKGROUND GLOW
      ====================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-blue-500/10 blur-3xl rounded-full animate-[footerMove1_28s_linear_infinite]" />

        <div className="absolute bottom-0 right-0 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-sky-400/10 blur-3xl rounded-full animate-[footerMove2_34s_linear_infinite]" />

      </div>

      <div className="container-custom relative z-10">

        {/* ======================================
            TOP CTA
        ====================================== */}
        <div className="py-12 sm:py-14 border-b border-white/10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div className="text-center lg:text-left">

              <p className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
                Ready To Grow?
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Let’s Build Your Career
                <span className="text-blue-400">
                  {" "}Together
                </span>
              </h2>

              <p className="mt-5 text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join Codebaby Software for courses,
                placements, internships, projects and
                modern software solutions.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">

              <Link
                to="/courses"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Explore Courses <FaArrowRight />
              </Link>

              <a
                href="https://wa.me/918073369741?text=Hi%20I%20need%20details%20from%20Codebaby%20Software."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                WhatsApp <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* ======================================
            MAIN GRID
        ====================================== */}
        <div className="py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COMPANY */}
          <div className="text-center sm:text-left">

            <h3 className="text-2xl font-bold">
              Codebaby Software
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Premium IT training company helping students
              and professionals through skill development,
              placements and real-world solutions.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex justify-center sm:justify-start gap-3">

              {[
                <FaInstagram />,
                <FaLinkedinIn />,
                <FaYoutube />,
                <FaFacebookF />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600 transition flex items-center justify-center"
                >
                  {icon}
                </a>
              ))}

            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="text-center sm:text-left">

            <h4 className="text-lg font-bold">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-white transition">Courses</Link></li>
              <li><Link to="/placements" className="hover:text-white transition">Placements</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>

            </ul>

          </div>

          {/* SERVICES */}
          <div className="text-center sm:text-left">

            <h4 className="text-lg font-bold">
              Services
            </h4>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li><Link to="/courses" className="hover:text-white transition">IT Courses</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Academic Projects</Link></li>
              <li><Link to="/mock-interviews" className="hover:text-white transition">Mock Interviews</Link></li>
              <li><Link to="/internships" className="hover:text-white transition">Internships</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Software Solutions</Link></li>

            </ul>

          </div>

          {/* CONTACT */}
          <div className="text-center sm:text-left">

            <h4 className="text-lg font-bold">
              Contact Us
            </h4>

            <div className="mt-6 space-y-4 text-gray-300">

              <a
                href="tel:+918073369741"
                className="flex justify-center sm:justify-start gap-3 hover:text-white transition"
              >
                <FaPhoneAlt className="mt-1 text-blue-400 shrink-0" />
                <span>+91 8073369741</span>
              </a>

              <a
                href="mailto:info@codebabysoftware.in"
                className="flex justify-center sm:justify-start gap-3 hover:text-white transition break-all"
              >
                <FaEnvelope className="mt-1 text-blue-400 shrink-0" />
                <span>info@codebabysoftware.in</span>
              </a>

              <a
                href="https://wa.me/918073369741"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center sm:justify-start gap-3 hover:text-white transition"
              >
                <FaWhatsapp className="mt-1 text-blue-400 shrink-0" />
                <span>WhatsApp Support</span>
              </a>

              <div className="flex justify-center sm:justify-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400 shrink-0" />
                <span>Karnataka, India</span>
              </div>

            </div>

          </div>

        </div>

        {/* ======================================
            BOTTOM
        ====================================== */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-gray-400 text-center md:text-left">

          <p>
            © {year} Codebaby Software.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link to="/contact" className="hover:text-white transition">
              Support
            </Link>

            <Link to="/about" className="hover:text-white transition">
              Company
            </Link>

            <Link to="/courses" className="hover:text-white transition">
              Careers
            </Link>

          </div>

        </div>

      </div>

      {/* ======================================
          CSS
      ====================================== */}
      <style>
        {`
          @keyframes footerMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(180px,70px); }
          }

          @keyframes footerMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-160px,-80px); }
          }
        `}
      </style>

    </footer>
  );
};

export default Footer;