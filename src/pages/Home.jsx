// src/pages/Home.jsx

import { Helmet } from "react-helmet-async";

// HOME COMPONENTS
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import CoursesPreviewSection from "../components/home/CoursesPreviewSection";
import PlacementCTASection from "../components/home/PlacementCTASection";
import ProjectsShowcaseSection from "../components/home/ProjectsShowcaseSection";
import StatsCounterSection from "../components/home/StatsCounterSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FinalCTASection from "../components/home/FinalCTASection";

const Home = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Codebaby Software | Courses, Placements, Projects &
          Software Solutions
        </title>

        <meta
          name="description"
          content="Codebaby Software helps students and businesses grow through IT courses, placements, internships, mock interviews, projects, and software solutions."
        />

        <meta
          name="keywords"
          content="Codebaby Software, IT Courses, Placements, Internships, Mock Interviews, Final Year Projects, Web Development, Software Company"
        />

        <meta
          property="og:title"
          content="Codebaby Software"
        />

        <meta
          property="og:description"
          content="Build Skills. Build Careers. Build Software."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      {/* PAGE WRAPPER */}
      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <HeroSection />

        {/* SERVICES */}
        <ServicesSection />

        {/* WHY CHOOSE US */}
        <WhyChooseUsSection />

        {/* COURSES */}
        <CoursesPreviewSection />

        {/* PLACEMENTS CTA */}
        <PlacementCTASection />

        {/* PROJECTS */}
        <ProjectsShowcaseSection />

        {/* STATS */}
        <StatsCounterSection />

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* FINAL CTA */}
        <FinalCTASection />

      </main>
    </>
  );
};

export default Home;