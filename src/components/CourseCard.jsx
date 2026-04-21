const CourseCard = ({ course }) => {

  const enroll = () => {
    let enrolled = JSON.parse(localStorage.getItem("courses")) || [];
    enrolled.push(course);
    localStorage.setItem("courses", JSON.stringify(enrolled));
    alert("Enrolled successfully!");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">

      {/* Image */}
      <div className="overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold">{course.title}</h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {course.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-bold">
            ₹{course.price}
          </span>

          <button
            onClick={enroll}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;