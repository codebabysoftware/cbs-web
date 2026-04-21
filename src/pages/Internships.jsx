import { Helmet } from "react-helmet-async";
import { internships } from "../data/internships";
import { useNavigate } from "react-router-dom";

const Internships = () => {
  const navigate = useNavigate();

  return (
    <div className="section bg-gray-50">

      <Helmet>
        <title>Internships | MyCompany</title>
        <meta
          name="description"
          content="Explore internship programs with real-world experience."
        />
      </Helmet>

      <div className="container-custom">

        <div className="mb-10">
          <h1 className="text-3xl font-bold">Internship Programs</h1>
          <p className="text-gray-500 mt-2">
            Gain real industry experience and boost your career
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {internships.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/internships/${item.id}`)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 cursor-pointer"
            >

              <span className="bg-blue-100 text-primary text-xs px-3 py-1 rounded-full">
                {item.level}
              </span>

              <h2 className="text-lg font-semibold mt-3">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {item.description}
              </p>

              <p className="text-xs text-gray-400 mt-2">
                ⏱ {item.duration}
              </p>

              <div className="flex justify-between items-center mt-6">
                <span className="text-primary font-bold">
                  ₹{item.price}
                </span>

                <span className="text-primary text-sm font-semibold">
                  View Details →
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Internships;