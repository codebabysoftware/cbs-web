import { Helmet } from "react-helmet-async";
import { courses } from "../data/courses";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="section">
      <Helmet>
        <title>Courses | MyCompany</title>
        <meta
          name="description"
          content="Explore professional courses in development, AI, and cloud computing."
        />
      </Helmet>

      <div className="container-custom">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Courses
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Choose the right course to build your career
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition"
                />

                <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5">

                <h2 className="text-base sm:text-lg font-semibold line-clamp-2">
                  {course.title}
                </h2>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-3">
                  <span>⏱ {course.duration}</span>
                  <span>⭐ 4.8</span>
                </div>

                <div className="flex justify-between items-center mt-5">

                  <span className="text-primary font-bold text-base sm:text-lg">
                    ₹{course.price}
                  </span>

                  <button
                    onClick={() => navigate(`/courses/${course.id}`)}
                    className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary transition"
                  >
                    View Details
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Courses;