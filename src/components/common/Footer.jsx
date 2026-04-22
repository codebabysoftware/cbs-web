// src/components/common/Footer.jsx

import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-500/10 blur-3xl rounded-full animate-[footMove1_28s_linear_infinite]"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-cyan-400/10 blur-3xl rounded-full animate-[footMove2_34s_linear_infinite]"></div>

      </div>

      <div className="container-custom relative z-10">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 md:py-20">

          {/* BRAND */}
          <div>

            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Codebaby Software
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed text-sm">
              We help students build careers and help businesses build digital
              solutions through training, placements, internships, projects,
              and software services.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex gap-3">

              {[
                FaInstagram,
                FaLinkedinIn,
                FaYoutube,
                FaWhatsapp,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="/"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600 transition flex items-center justify-center"
                >
                  <Icon />
                </a>
              ))}

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3 text-sm text-blue-100">

              {[
                ["Home", "/"],
                ["Courses", "/courses"],
                ["Projects", "/projects"],
                ["Placements", "/placements"],
                ["Internships", "/internships"],
                ["Contact", "/contact"],
              ].map(([name, path], i) => (
                <Link
                  key={i}
                  to={path}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaArrowRight className="text-xs" />
                  {name}
                </Link>
              ))}

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-lg font-semibold">
              Services
            </h3>

            <div className="mt-5 space-y-3 text-sm text-blue-100">

              {[
                "Job Ready Courses",
                "Mock Interviews",
                "Placement Support",
                "Academic Projects",
                "Software Solutions",
                "Internships",
              ].map((item, i) => (
                <p
                  key={i}
                  className="flex items-center gap-2"
                >
                  <FaArrowRight className="text-xs" />
                  {item}
                </p>
              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-semibold">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm text-blue-100">

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1" />
                <span>info@codebabysoftware.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaWhatsapp className="mt-1" />
                <span>WhatsApp Support Available</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Karnataka, India <br />
                  Serving Clients Globally
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* MID CTA */}
        <div className="border-t border-white/10 py-8">

          <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">

            <div>
              <h3 className="text-xl font-semibold">
                Ready to start with Codebaby Software?
              </h3>

              <p className="text-blue-100 text-sm mt-1">
                Let’s discuss your career or business growth goals.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
            >
              Contact Our Team
            </Link>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row gap-4 justify-between text-sm text-blue-100">

          <p>
            © {year} Codebaby Software. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>

        </div>

      </div>

      {/* CSS */}
      <style>
        {`
          @keyframes footMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(180px,70px); }
          }

          @keyframes footMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-90px); }
          }
        `}
      </style>

    </footer>
  );
};

export default Footer;