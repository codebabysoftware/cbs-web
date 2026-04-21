import { Helmet } from "react-helmet-async";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="section bg-gray-50">

      <Helmet>
        <title>Projects | MyCompany</title>
        <meta
          name="description"
          content="Explore real-world projects to build your portfolio."
        />
      </Helmet>

      <div className="container-custom">

        <div className="mb-10">
          <h1 className="text-3xl font-bold">Real-World Projects</h1>
          <p className="text-gray-500 mt-2">
            Build industry-level projects and boost your portfolio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 cursor-pointer"
            >

              <span className="bg-blue-100 text-primary text-xs px-3 py-1 rounded-full">
                {project.difficulty}
              </span>

              <h2 className="text-lg font-semibold mt-3">
                {project.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.slice(0, 4).map((tech, i) => (
                  <span key={i} className="bg-gray-100 px-2 py-1 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6">
                <span className="text-primary font-bold">
                  ₹{project.price}
                </span>

                <button className="text-primary text-sm font-semibold">
                  View Details →
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Projects;