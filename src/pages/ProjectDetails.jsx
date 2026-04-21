import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Helmet } from "react-helmet-async";

const FORM_URL = "https://forms.gle/Q818X28cQ2CQ1sZj9";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <div className="p-10 text-center">Project not found</div>;

  return (
    <>
      <Helmet>
        <title>{project.title} | MyCompany</title>
      </Helmet>

      <div className="section bg-gradient-to-br from-white to-blue-50">
        <div className="container-custom">

          {/* HERO */}
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-gray-600 mt-2">{project.description}</p>

          <div className="mt-4 text-primary font-bold text-xl">
            ₹{project.price}
          </div>

          {/* SCREENSHOTS */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Screenshots</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-xl shadow hover:scale-105 transition"
                />
              ))}
            </div>
          </div>

          {/* VIDEO */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Demo Video</h2>

            <div className="aspect-video">
              <iframe
                src={project.demoVideo}
                className="w-full h-full rounded-xl"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            {project.features.map((f, i) => (
              <p key={i}>✔ {f}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href={FORM_URL}
              className="bg-primary text-white px-6 py-3 rounded-lg"
            >
              Get Project
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProjectDetails;