import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { Helmet } from "react-helmet-async";
import {
  FaCheckCircle,
  FaTools,
  FaProjectDiagram,
  FaBriefcase
} from "react-icons/fa";

const FORM_URL = "https://forms.gle/5NMPonGzpfApmuYF6";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <div className="p-10 text-center">Course not found</div>;

  return (
    <>
      {/* 🔥 SEO */}
      <Helmet>
        <title>{course.title} | MyCompany</title>
        <meta
          name="description"
          content={`${course.title} course with roadmap, projects, and career opportunities.`}
        />
        <meta
          name="keywords"
          content={`${course.title}, ${course.tools.join(", ")}`}
        />
      </Helmet>

      <div className="section bg-gradient-to-br from-white to-blue-50">
        <div className="container-custom">

          {/* HERO */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <img
              src={course.thumbnail}
              className="w-full rounded-2xl shadow-xl hover:scale-105 transition"
            />

            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {course.title}
              </h1>

              <p className="mt-4 text-gray-600">
                {course.description}
              </p>

              <div className="mt-4 text-gray-500 text-sm">
                ⏱ {course.duration} • ⭐ 4.8 Rating
              </div>

              <div className="mt-4 text-2xl font-bold text-primary">
                ₹{course.price}
              </div>

              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition"
              >
                Apply Now
              </a>
            </div>

          </div>

          {/* LEARNING */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">
              What You Will Learn
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {course.advantages.map((item, i) => (
                <div key={i} className="flex gap-3 bg-white p-4 rounded-xl shadow">
                  <FaCheckCircle className="text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* SYLLABUS */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">
              Course Roadmap
            </h2>

            <div className="relative border-l-2 border-blue-200 ml-4 space-y-8">
              {course.syllabus.map((phase, i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute -left-[10px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>

                  <div className="bg-white shadow-md p-5 rounded-xl">
                    <h3 className="font-semibold text-primary">
                      {phase.split(":")[0]}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {phase.split(":")[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaTools /> Tools & Technologies
            </h2>

            <div className="flex flex-wrap gap-3">
              {course.tools.map((tool, i) => (
                <span key={i} className="bg-blue-100 text-primary px-4 py-2 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaProjectDiagram /> Projects
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {course.projects.map((p, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow">
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* CAREERS */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaBriefcase /> Career Opportunities
            </h2>

            <div className="flex flex-wrap gap-3">
              {course.careers.map((c, i) => (
                <span key={i} className="bg-white px-4 py-2 rounded-full shadow">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-primary text-white p-10 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Start Your Journey Today 🚀
            </h2>

            <a
              href={FORM_URL}
              className="mt-6 inline-block bg-white text-primary px-6 py-3 rounded-lg"
            >
              Apply Now
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default CourseDetails;