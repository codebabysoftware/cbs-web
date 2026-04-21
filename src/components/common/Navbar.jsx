import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect (optimized)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) setScrolled(true);
      else if (window.scrollY <= 50 && scrolled) setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* 🔥 NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-custom flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="text-xl font-bold text-primary">
            MyCompany
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/internships">Internships</NavLink>
            <NavLink to="/mock-interviews">Mock Interviews</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>

          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm"
          >
            Get Started
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl text-primary"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>

        </div>
      </header>

      {/* 🔥 BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* 🔥 MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button
            className="text-xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-4 p-5 text-lg">

          {[
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
            { name: "Projects", path: "/projects" },
            { name: "Internships", path: "/internships" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" }
          ].map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary transition"
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* CTA */}
        <div className="p-5 mt-auto">
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-primary text-white py-3 rounded-lg"
          >
            Get Started
          </Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;