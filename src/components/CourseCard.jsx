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
    <div className="group h-full bg-white/95 backdrop-blur-md border border-blue-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">

      {/* ======================================
          IMAGE
      ====================================== */}
      <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">

        <img
          src={thumbnail || fallbackImage}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        {/* Category */}
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 rounded-full bg-white/95 text-blue-700 text-[11px] sm:text-xs font-semibold shadow">
          {category || "Course"}
        </span>

        {/* Badge */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-gray-800 text-[11px] sm:text-xs font-medium shadow">
          <FaStar className="text-yellow-500 shrink-0" />
          Trending Program
        </div>

      </div>

      {/* ======================================
          CONTENT
      ====================================== */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">

        {/* Icon */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg sm:text-xl">
          <FaLaptopCode />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 leading-snug min-h-[56px] sm:min-h-[60px]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-600 line-clamp-3 leading-relaxed min-h-[64px]">
          {shortDescription ||
            "Industry-focused course with real-time practical training."}
        </p>

        {/* Meta */}
        <div className="mt-5 space-y-2 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <FaClock className="text-blue-500 shrink-0" />
            <span className="line-clamp-1">
              {duration || "Flexible Duration"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaSignal className="text-blue-500 shrink-0" />
            <span className="line-clamp-1">
              {level || "All Levels"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaLayerGroup className="text-blue-500 shrink-0" />
            <span className="line-clamp-1">
              {category || "Technology"}
            </span>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-auto pt-6">

          <Link
            to={url}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all"
          >
            View Course
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
          </Link>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;