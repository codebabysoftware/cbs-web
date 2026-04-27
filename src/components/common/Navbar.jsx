// src/components/common/Navbar.jsx

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import courses from "../../data/courses";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [placementsDropdown, setPlacementsDropdown] = useState(false);

  const [mobileCourses, setMobileCourses] = useState(false);
  const [mobileProjects, setMobileProjects] = useState(false);
  const [mobilePlacements, setMobilePlacements] = useState(false);

  const location = useLocation();

  /* =====================================
     SCROLL EFFECT
  ===================================== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =====================================
     LOCK BODY SCROLL
  ===================================== */
  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "auto";
  }, [menuOpen]);

  /* =====================================
     CLOSE MENU ON ROUTE CHANGE
  ===================================== */
  useEffect(() => {
    setMenuOpen(false);
    setMobileCourses(false);
    setMobileProjects(false);
    setMobilePlacements(false);
  }, [location.pathname]);

  /* =====================================
     ACTIVE LINK STYLE
  ===================================== */
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
      : "text-slate-700 hover:text-blue-600 transition";

  return (
    <>
      {/* =====================================
          HEADER
      ===================================== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-md py-3"
            : "bg-white py-4 md:py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-4">

          {/* =====================================
              LOGO
          ===================================== */}
          <Link
            to="/"
            className="flex items-center gap-3 min-w-0"
          >
            <img
              src="/logo.png"
              alt="Codebaby Software"
              className="w-10 h-10 md:w-11 md:h-11 object-contain shrink-0"
            />

            <div className="leading-tight min-w-0">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-blue-600 truncate">
                Codebaby Software
              </h2>
            </div>
          </Link>

          {/* =====================================
              DESKTOP NAV
          ===================================== */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">

            <NavLink to="/" end className={navLinkClass}>
              HOME
            </NavLink>

            {/* COURSES */}
            <div
              className="relative"
              onMouseEnter={() =>
                setCoursesDropdown(true)
              }
              onMouseLeave={() =>
                setCoursesDropdown(false)
              }
            >
              <NavLink
                to="/courses"
                className={navLinkClass}
              >
                COURSES
              </NavLink>

              <div
                className={`absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-blue-100 transition-all duration-200 ${
                  coursesDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="px-5 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-2xl">
                  <h3 className="font-bold">
                    Available Courses
                  </h3>
                </div>

                <div className="max-h-[420px] overflow-y-auto">

                  {courses.map(
                    (course, index) => (
                      <Link
                        key={
                          course.id || index
                        }
                        to={`/courses/${
                          course.slug ||
                          course.id
                        }`}
                        className="block px-5 py-3 text-sm border-b border-gray-100 hover:bg-blue-50"
                      >
                        {course.title}
                      </Link>
                    )
                  )}

                </div>

                <Link
                  to="/courses"
                  className="block text-center px-5 py-3 bg-blue-50 text-blue-600 font-semibold rounded-b-2xl hover:bg-blue-100"
                >
                  View All Courses →
                </Link>
              </div>
            </div>

            {/* PROJECTS */}
            <div
              className="relative"
              onMouseEnter={() =>
                setProjectsDropdown(true)
              }
              onMouseLeave={() =>
                setProjectsDropdown(false)
              }
            >
              <NavLink
                to="/projects"
                className={navLinkClass}
              >
                PROJECTS
              </NavLink>

              <div
                className={`absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-blue-100 transition-all duration-200 ${
                  projectsDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  to="/projects?type=academic"
                  className="block px-5 py-3 hover:bg-blue-50 rounded-t-2xl text-sm"
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
                  className="block px-5 py-3 hover:bg-blue-50 rounded-b-2xl text-sm"
                >
                  Industrial Projects
                </Link>
              </div>
            </div>

            {/* PLACEMENTS */}
            <div
              className="relative"
              onMouseEnter={() =>
                setPlacementsDropdown(true)
              }
              onMouseLeave={() =>
                setPlacementsDropdown(false)
              }
            >
              <NavLink
                to="/placements"
                className={navLinkClass}
              >
                PLACEMENTS
              </NavLink>

              <div
                className={`absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-blue-100 transition-all duration-200 ${
                  placementsDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  to="/placements"
                  className="block px-5 py-3 hover:bg-blue-50 rounded-t-2xl text-sm"
                >
                  Placement Services
                </Link>

                <Link
                  to="/mock-interviews"
                  className="block px-5 py-3 hover:bg-blue-50 rounded-b-2xl text-sm"
                >
                  Mock Interviews
                </Link>
              </div>
            </div>

            <NavLink
              to="/internships"
              className={navLinkClass}
            >
              INTERNSHIPS
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
            >
              ABOUT
            </NavLink>

          </nav>

          {/* =====================================
              DESKTOP CTA
          ===================================== */}
          <div className="hidden lg:flex items-center gap-3">

            <a
              href="https://wa.me/918073369741"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="tel:+918073369741"
              className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition"
            >
              <FaPhoneAlt />
            </a>

            <NavLink
              to="/contact"
              className="px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-md"
            >
              CONTACT US
            </NavLink>

          </div>

          {/* =====================================
              MOBILE BUTTON
          ===================================== */}
          <button
            onClick={() =>
              setMenuOpen(true)
            }
            className="lg:hidden w-10 h-10 rounded-xl border border-blue-100 text-blue-600 flex items-center justify-center"
          >
            <FaBars />
          </button>

        </div>
      </header>

      {/* =====================================
          MOBILE OVERLAY
      ===================================== */}
      <div
        onClick={() =>
          setMenuOpen(false)
        }
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* =====================================
          MOBILE DRAWER
      ===================================== */}
      <aside
        className={`fixed top-0 right-0 h-full w-[88%] sm:w-[78%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-blue-100">

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Codebaby Software"
              className="w-10 h-10 object-contain"
            />

            <div>
              <h2 className="font-bold text-blue-600 text-sm">
                Codebaby Software
              </h2>

              <p className="text-xs text-slate-500">
                Premium IT Training
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              setMenuOpen(false)
            }
            className="text-xl text-slate-700"
          >
            <FaTimes />
          </button>

        </div>

        {/* MENU */}
        <div className="p-5 flex flex-col gap-4 text-sm font-medium overflow-y-auto h-[calc(100%-80px)]">

          <NavLink to="/" end className={navLinkClass}>
            HOME
          </NavLink>

          {/* MOBILE COURSES */}
          <div>
            <button
              onClick={() =>
                setMobileCourses(
                  !mobileCourses
                )
              }
              className="w-full flex items-center justify-between text-left py-1"
            >
              <span>COURSES</span>

              <FaChevronDown
                className={`transition ${
                  mobileCourses
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {mobileCourses && (
              <div className="mt-3 ml-3 flex flex-col gap-3 text-slate-600 max-h-64 overflow-y-auto">

                {courses.map(
                  (course, index) => (
                    <Link
                      key={
                        course.id || index
                      }
                      to={`/courses/${
                        course.slug ||
                        course.id
                      }`}
                    >
                      {course.title}
                    </Link>
                  )
                )}

                <Link
                  to="/courses"
                  className="text-blue-600 font-semibold"
                >
                  View All Courses →
                </Link>
              </div>
            )}
          </div>

          {/* PROJECTS */}
          <div>
            <button
              onClick={() =>
                setMobileProjects(
                  !mobileProjects
                )
              }
              className="w-full flex items-center justify-between text-left py-1"
            >
              <span>PROJECTS</span>

              <FaChevronDown
                className={`transition ${
                  mobileProjects
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {mobileProjects && (
              <div className="mt-3 ml-3 flex flex-col gap-3 text-slate-600">
                <Link to="/projects?type=academic">
                  Academic Projects
                </Link>

                <Link to="/projects?type=mini">
                  Mini Projects
                </Link>

                <Link to="/projects?type=industrial">
                  Industrial Projects
                </Link>
              </div>
            )}
          </div>

          {/* PLACEMENTS */}
          <div>
            <button
              onClick={() =>
                setMobilePlacements(
                  !mobilePlacements
                )
              }
              className="w-full flex items-center justify-between text-left py-1"
            >
              <span>PLACEMENTS</span>

              <FaChevronDown
                className={`transition ${
                  mobilePlacements
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {mobilePlacements && (
              <div className="mt-3 ml-3 flex flex-col gap-3 text-slate-600">
                <Link to="/placements">
                  Placement Services
                </Link>

                <Link to="/mock-interviews">
                  Mock Interviews
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/internships"
            className={navLinkClass}
          >
            INTERNSHIPS
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            CONTACT
          </NavLink>

          {/* CTA */}
          <div className="pt-4 mt-2 border-t border-blue-100 space-y-3">

            <a
              href="https://wa.me/918073369741"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-green-300 text-green-600 font-semibold"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="tel:+918073369741"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

        </div>

      </aside>
    </>
  );
};

export default Navbar;