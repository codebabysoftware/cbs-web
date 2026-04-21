import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";
import TrustSection from "../components/home/TrustSection";
import CoursesPreview from "../components/home/CoursesPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import InternshipsPreview from "../components/home/InternshipsPreview";
import CTASection from "../components/home/CTASection";

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
      <TrustSection />
      <CoursesPreview />
      <ProjectsPreview />
      <InternshipsPreview />
      <CTASection />
    </>
  );
};

export default Home;