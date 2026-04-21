import { projects } from "../../data/projects";
import { Link } from "react-router-dom";

const ProjectsPreview = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Build Real-World <span className="text-primary">Projects</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Hands-on projects to strengthen your portfolio and practical skills
            </p>
          </div>

          <Link to="/projects" className="btn btn-outline">
            View All Projects
          </Link>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col justify-between group"
            >

              {/* TOP CONTENT */}
              <div>

                {/* DIFFICULTY BADGE */}
                <span className="inline-block bg-blue-100 text-primary text-xs px-3 py-1 rounded-full mb-3">
                  {project.difficulty}
                </span>

                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* BOTTOM */}
              <div className="mt-6 flex justify-between items-center">

                <span className="text-primary font-bold text-lg">
                  ₹{project.price}
                </span>

                <Link
                  to="/apply"
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary transition"
                >
                  Get Project
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectsPreview;