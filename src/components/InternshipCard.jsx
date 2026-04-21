const InternshipCard = ({ internship }) => {

  const enroll = () => {
    let list = JSON.parse(localStorage.getItem("internships")) || [];
    list.push(internship);
    localStorage.setItem("internships", JSON.stringify(list));
    alert("Enrolled in internship!");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">

      <h2 className="text-lg font-semibold">{internship.title}</h2>

      <p className="text-gray-500 text-sm mt-2">
        {internship.description}
      </p>

      <p className="text-sm mt-2 text-gray-400">
        Duration: {internship.duration}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-primary font-bold">
          ₹{internship.price}
        </span>

        <button
          onClick={enroll}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;