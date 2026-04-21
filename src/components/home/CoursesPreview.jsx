import { courses } from "../../data/courses";
import { Link, useNavigate } from "react-router-dom";

const CoursesPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="section bg-white">
      <div className="container-custom">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Explore Our <span className="text-primary">Courses</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Industry-relevant programs designed to make you job-ready
            </p>
          </div>

          <Link to="/courses" className="btn btn-outline">
            View All Courses
          </Link>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {courses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition duration-300"
                />

                <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5">

                <h3 className="text-base sm:text-lg font-semibold line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {course.description}
                </p>

                {/* META */}
                <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-3">
                  <span>⏱ {course.duration}</span>
                  <span>⭐ 4.8</span>
                </div>

                {/* CTA */}
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
    </section>
  );
};

export default CoursesPreview;