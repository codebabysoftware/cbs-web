// src/pages/ProjectDetails.jsx

import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaCode,
  FaCheckCircle,
  FaWhatsapp,
  FaUsers,
  FaStar,
  FaLaptopCode,
  FaFileAlt,
  FaRocket,
  FaGlobe,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaClipboardList,
} from "react-icons/fa";

import projectsData from "../data/projects";
import forms from "../data/forms";

const fallbackImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project =
    projectsData.find(
      (item) =>
        item.slug === slug ||
        String(item.id) === String(slug)
    ) || null;

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Project Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            The project you are looking for may be unavailable or updated.
          </p>

          <Link
            to="/projects"
            className="inline-flex mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Back To Projects
          </Link>
        </div>
      </main>
    );
  }

  const features =
    project.features ||
    [
      "Clean modern architecture",
      "Responsive frontend design",
      "Secure backend integration",
      "Database connectivity",
      "Deployment ready structure",
      "Scalable codebase",
    ];

  const deliverables =
    project.deliverables ||
    [
      "Source Code",
      "Documentation / Report",
      "Setup Guidance",
      "UI Design",
      "Testing Support",
      "Deployment Help",
    ];

  const technologies =
    project.technologies ||
    project.stack ||
    [
      "React",
      "Node.js",
      "Java",
      "Python",
      "MongoDB",
      "MySQL",
    ];

  const faqs = [
    {
      q: "Can this project be customized?",
      a: "Yes. We can modify features, UI, stack and business logic based on your requirements.",
    },
    {
      q: "Do you provide source code?",
      a: "Yes. Depending on engagement type, source code and documentation can be included.",
    },
    {
      q: "Can students use this as academic project?",
      a: "Yes. We support mini, major and final-year academic project needs.",
    },
    {
      q: "Do you deploy projects live?",
      a: "Yes. Hosting and deployment support can be provided when required.",
    },
  ];

  const getTechIcon = (tech) => {
    const t = tech.toLowerCase();

    if (
      t.includes("react") ||
      t.includes("frontend") ||
      t.includes("html") ||
      t.includes("css")
    )
      return <FaGlobe />;

    if (
      t.includes("node") ||
      t.includes("java") ||
      t.includes("python") ||
      t.includes("backend")
    )
      return <FaServer />;

    if (t.includes("android") || t.includes("flutter"))
      return <FaMobileAlt />;

    if (t.includes("sql") || t.includes("mongo"))
      return <FaDatabase />;

    return <FaCode />;
  };

  return (
    <>
      <Helmet>
        <title>
          {project.title} | Codebaby Software
        </title>

        <meta
          name="description"
          content={
            project.shortDescription ||
            project.description ||
            `${project.title} project solution by Codebaby Software.`
          }
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BG */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[projMove1_28s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[projMove2_34s_linear_infinite]"></div>
          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase text-sm tracking-wide">
                Premium Project Solution
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                {project.description ||
                  project.shortDescription ||
                  "Professional project solution built for academic, startup or business use."}
              </p>

              {/* META */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                <div className="bg-white border border-blue-100 rounded-2xl p-4 flex gap-3">
                  <FaClock className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Timeline</p>
                    <p className="font-semibold text-gray-900">
                      {project.duration || "Flexible"}
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-blue-100 rounded-2xl p-4 flex gap-3">
                  <FaLaptopCode className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Category</p>
                    <p className="font-semibold text-gray-900">
                      {project.category || "Software Project"}
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <a
                  href={forms.projects}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Request Project <FaArrowRight />
                </a>

                <a
                  href={`https://wa.me/918073369741?text=Hi%20I%20want%20details%20about%20${encodeURIComponent(
                    project.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  WhatsApp <FaWhatsapp />
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-blue-100 bg-white">
              <img
                src={project.thumbnail || project.image || fallbackImage}
                alt={project.title}
                className="w-full h-[420px] object-cover"
              />
            </div>

          </div>

        </section>

        {/* OVERVIEW */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-3 gap-8">

            {/* FEATURES */}
            <div className="lg:col-span-2">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Project Highlights
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Features Included
              </h2>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                {features.map((item, i) => (
                  <div
                    key={i}
                    className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3"
                  >
                    <FaCheckCircle className="text-blue-600 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}

              </div>

            </div>

            {/* SIDEBAR */}
            <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-xl h-fit">

              <div className="flex items-center gap-3">
                <FaClipboardList className="text-blue-600 text-xl" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Quick Info
                </h3>
              </div>

              <div className="mt-6 space-y-4 text-sm">

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Type</span>
                  <span className="font-semibold text-gray-900">
                    {project.type || "Custom"}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Support</span>
                  <span className="font-semibold text-gray-900">
                    Available
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Delivery</span>
                  <span className="font-semibold text-gray-900">
                    Guided
                  </span>
                </div>

              </div>

              <a
                href={forms.projects}
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Start Project <FaArrowRight />
              </a>

            </div>

          </div>

        </section>

        {/* TECH STACK */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom">

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-blue-600 font-semibold uppercase text-sm">
                Technologies
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Stack Used
              </h2>
            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                    {getTechIcon(tech)}
                  </div>

                  <span className="font-semibold text-gray-800">
                    {tech}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* DELIVERABLES */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-3 gap-6">

            {deliverables.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md"
              >
                <FaFileAlt className="text-blue-600 text-2xl" />

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {item}
                </h3>

                <p className="mt-3 text-gray-600">
                  Delivered with professional support and guidance.
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom max-w-4xl">

            <div className="text-center">
              <p className="text-blue-600 font-semibold uppercase text-sm">
                FAQs
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Common Questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">

              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 rounded-2xl p-6"
                >
                  <h3 className="font-bold text-gray-900">
                    {item.q}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready To Build {project.title}?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Share your requirement and let us turn your idea into a real
              solution.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href={forms.projects}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Request Now <FaArrowRight />
              </a>

              <Link
                to="/projects"
                className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
              >
                View Projects
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* CSS */}
      <style>
        {`
          @keyframes projMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes projMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default ProjectDetails;