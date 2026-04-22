// src/components/common/Navbar.jsx

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [placementsDropdown, setPlacementsDropdown] = useState(false);

  const [mobileProjects, setMobileProjects] = useState(false);
  const [mobilePlacements, setMobilePlacements] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Active link style
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-blue-600 tracking-tight"
          >
            Codebaby Software
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">

            <NavLink to="/" end className={navLinkClass}>
              HOME
            </NavLink>

            <NavLink to="/courses" className={navLinkClass}>
              COURSES
            </NavLink>

            {/* PROJECTS */}
            <div
              className="relative"
              onMouseEnter={() => setProjectsDropdown(true)}
              onMouseLeave={() => setProjectsDropdown(false)}
            >
              <NavLink
                to="/projects"
                className={navLinkClass}
              >
                PROJECTS
              </NavLink>

              <div
                className={`absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 ${
                  projectsDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  to="/projects?type=academic"
                  className="block px-5 py-3 hover:bg-blue-50 rounded-t-xl text-sm"
                >
                  Academic Projects
                </Link>

                <Link
                  to="/projects?type=mini"
                  className="block px-5 py-3 hover:bg-blue-50 text-sm"
                >
                  Mini Projects
                </Link>

                <Link
                  to="/projects?type=industrial"
                  className="block px-5 py-3 hover:bg-blue-50 rounded-b-xl text-sm"
                >
                  Industrial Projects
                </Link>
              </div>
            </div>

            {/* PLACEMENTS */}
            <div
              className="relative"
              onMouseEnter={() => setPlacementsDropdown(true)}
              onMouseLeave={() => setPlacementsDropdown(false)}
            >
              <NavLink
                to="/placements"
                className={navLinkClass}
              >
                PLACEMENTS
              </NavLink>

              <div
                className={`absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 ${
                  placementsDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  to="/placements"
                  className="block px-5 py-3 hover:bg-blue-50 rounded-t-xl text-sm"
                >
                  Placement Services
                </Link>

                <Link
                  to="/mock-interviews"
                  className="block px-5 py-3 hover:bg-blue-50 rounded-b-xl text-sm"
                >
                  Mock Interviews
                </Link>
              </div>
            </div>

            <NavLink to="/internships" className={navLinkClass}>
              INTERNSHIPS
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              ABOUT
            </NavLink>

          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-2.5 rounded-xl bg-blue-700 text-white text-sm font-semibold"
                  : "px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              }
            >
              CONTACT US
            </NavLink>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-2xl text-blue-600"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-[82%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-5 border-b">
          <h2 className="font-bold text-blue-600 text-lg">
            Codebaby Software
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* LINKS */}
        <div className="p-5 flex flex-col gap-4 text-sm font-medium">

          <NavLink to="/" end onClick={() => setMenuOpen(false)} className={navLinkClass}>
            HOME
          </NavLink>

          <NavLink to="/courses" onClick={() => setMenuOpen(false)} className={navLinkClass}>
            COURSES
          </NavLink>

          {/* MOBILE PROJECTS */}
          <div>
            <button
              onClick={() => setMobileProjects(!mobileProjects)}
              className="flex justify-between items-center w-full text-left"
            >
              <span>PROJECTS</span>
              <FaChevronDown
                className={`transition ${mobileProjects ? "rotate-180" : ""}`}
              />
            </button>

            {mobileProjects && (
              <div className="mt-3 ml-3 flex flex-col gap-3 text-gray-600">
                <Link to="/projects?type=academic" onClick={() => setMenuOpen(false)}>
                  Academic Projects
                </Link>
                <Link to="/projects?type=mini" onClick={() => setMenuOpen(false)}>
                  Mini Projects
                </Link>
                <Link to="/projects?type=industrial" onClick={() => setMenuOpen(false)}>
                  Industrial Projects
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE PLACEMENTS */}
          <div>
            <button
              onClick={() => setMobilePlacements(!mobilePlacements)}
              className="flex justify-between items-center w-full text-left"
            >
              <span>PLACEMENTS</span>
              <FaChevronDown
                className={`transition ${mobilePlacements ? "rotate-180" : ""}`}
              />
            </button>

            {mobilePlacements && (
              <div className="mt-3 ml-3 flex flex-col gap-3 text-gray-600">
                <NavLink to="/placements" onClick={() => setMenuOpen(false)}>
                  Placement Services
                </NavLink>

                <NavLink to="/mock-interviews" onClick={() => setMenuOpen(false)}>
                  Mock Interviews
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/internships"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            INTERNSHIPS
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            CONTACT US
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Navbar;