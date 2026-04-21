import { Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Projects from "./pages/Projects";
import Internships from "./pages/Internships";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import InternshipDetails from "./pages/InternshipDetails";
import MockInterviews from "./pages/MockInterviews";
// Optional: 404 Page (recommended)
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
    404 - Page Not Found
  </div>
);

function App() {
  return (
    <>
      {/* 🔝 Navbar */}
      <Navbar />

      {/* 🔥 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/internships/:id" element={<InternshipDetails />} />
        <Route path="/mock-interviews" element={<MockInterviews />} />

        {/* 🚨 Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* 🔻 Footer */}
      <Footer />
    </>
  );
}

export default App;