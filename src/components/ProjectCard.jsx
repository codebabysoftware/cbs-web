// src/components/ProjectCard.jsx

import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaLayerGroup,
  FaCode,
  FaLaptopCode,
  FaStar,
  FaTools,
} from "react-icons/fa";

const fallbackImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const {
    id,
    slug,
    title,
    category,
    type,
    duration,
    thumbnail,
    shortDescription,
  } = project;
 
  const url = `/projects/${slug || id}`;

  return (
    <div className="group h-full bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden">

        <img
          src={thumbnail || fallbackImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-blue-700 text-xs font-semibold shadow">
          {category || "Project"}
        </span>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-gray-800 text-xs font-medium shadow">
          <FaStar className="text-yellow-500" />
          Premium Build
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col h-[calc(100%-13rem)]">

        {/* ICON */}
        <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
          <FaCode />
        </div>

        {/* TITLE */}
        <h3 className="mt-4 text-xl font-bold text-gray-900 line-clamp-2 leading-snug">
          {title}
        </h3>

        {/* DESC */}
        <p className="mt-3 text-sm text-gray-600 line-clamp-3 leading-relaxed">
          {shortDescription ||
            "Modern project solution with source code, documentation and guidance."}
        </p>

        {/* META */}
        <div className="mt-5 space-y-2 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <FaClock className="text-blue-500 shrink-0" />
            <span>{duration || "Flexible Timeline"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaLayerGroup className="text-blue-500 shrink-0" />
            <span>{category || "Software"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaTools className="text-blue-500 shrink-0" />
            <span>{type || "Custom Build"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaLaptopCode className="text-blue-500 shrink-0" />
            <span>Source + Guidance</span>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-auto pt-6">

          <Link
            to={url}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            View Project
            <FaArrowRight className="text-sm" />
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;