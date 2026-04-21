import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const WHATSAPP = "919999999999"; // update
const EMAIL = "your@email.com"; // update

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">

      <div className="container-custom py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* 🔥 BRAND */}
        <div>
          <h2 className="text-xl font-bold text-white">MyCompany</h2>

          <p className="text-sm mt-3 text-gray-400">
            We help students become industry-ready through practical learning,
            real-world projects, and internships.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>

        {/* 🔥 QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>

          <div className="flex flex-col gap-2 text-sm">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/internships">Internships</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* 🔥 SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>

          <div className="flex flex-col gap-2 text-sm">
            <Link to="/courses">Training Programs</Link>
            <Link to="/projects">Academic Projects</Link>
            <Link to="/internships">Internships</Link>
          </div>
        </div>

        {/* 🔥 CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <div className="flex flex-col gap-3 text-sm">

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <FaEnvelope /> {EMAIL}
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>

          </div>
        </div>

      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;