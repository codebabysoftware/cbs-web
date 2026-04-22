// src/components/CourseCard.jsx

import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaSignal,
  FaLayerGroup,
  FaStar,
  FaLaptopCode,
} from "react-icons/fa";

const fallbackImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80";

const CourseCard = ({ course }) => {
  if (!course) return null;

  const {
    id,
    slug,
    title,
    category,
    level,
    duration,
    thumbnail,
    shortDescription,
  } = course;

  const url = `/courses/${slug || id}`;

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
          {category || "Course"}
        </span>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-gray-800 text-xs font-medium shadow">
          <FaStar className="text-yellow-500" />
          Trending Program
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col h-[calc(100%-13rem)]">

        {/* ICON */}
        <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
          <FaLaptopCode />
        </div>

        {/* TITLE */}
        <h3 className="mt-4 text-xl font-bold text-gray-900 line-clamp-2 leading-snug">
          {title}
        </h3>

        {/* DESC */}
        <p className="mt-3 text-sm text-gray-600 line-clamp-3 leading-relaxed">
          {shortDescription ||
            "Industry-focused course with real-time practical training."}
        </p>

        {/* META */}
        <div className="mt-5 space-y-2 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <FaClock className="text-blue-500 shrink-0" />
            <span>{duration || "Flexible Duration"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaSignal className="text-blue-500 shrink-0" />
            <span>{level || "All Levels"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaLayerGroup className="text-blue-500 shrink-0" />
            <span>{category || "Technology"}</span>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-auto pt-6">

          <Link
            to={url}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            View Course
            <FaArrowRight className="text-sm" />
          </Link>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;