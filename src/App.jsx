// src/App.jsx

import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import FloatingButtons from "./components/common/FloatingContactButtons";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

import Placements from "./pages/Placements";
import MockInterviews from "./pages/MockInterviews";

import Internships from "./pages/Internships";
import InternshipDetails from "./pages/InternshipDetails";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetails />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />

            <Route path="/placements" element={<Placements />} />
            <Route path="/mock-interviews" element={<MockInterviews />} />

            <Route path="/internships" element={<Internships />} />
            <Route
              path="/internships/:slug"
              element={<InternshipDetails />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <FloatingButtons />

      </div>
    </HelmetProvider>
  );
}

export default App;