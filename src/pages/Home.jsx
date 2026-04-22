import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import TrustSection from "../components/home/TrustSection";
import CoursesPreview from "../components/home/CoursesPreview";
import ProjectsShowcaseSection from "../components/home/ProjectsShowcaseSection";
import InternshipsPreview from "../components/home/InternshipsPreview";
import PlacementCTASection from "../components/home/PlacementCTASection";
import StatsCounterSection from "../components/home/StatsCounterSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FinalCTASection from "../components/home/FinalCTASection";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>MyCompany | Learn Skills That Matter</title>
        <meta
          name="description"
          content="Learn industry-ready skills with courses, real-world projects, and internships."
        />
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TrustSection />
      <CoursesPreview />
      <ProjectsShowcaseSection />
      <InternshipsPreview />
      <PlacementCTASection />
      <StatsCounterSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
};

export default Home;