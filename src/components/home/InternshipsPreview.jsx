import { internships } from "../../data/internships";
import { Link } from "react-router-dom";

const InternshipsPreview = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Kickstart Your <span className="text-primary">Career</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Gain real industry experience with structured internship programs
            </p>
          </div>

          <Link to="/internships" className="btn btn-outline">
            View All Internships
          </Link>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {internships.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between group border"
            >

              {/* TOP */}
              <div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                {/* DURATION */}
                <p className="text-sm text-gray-400 mt-1">
                  ⏱ {item.duration}
                </p>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-sm mt-3 line-clamp-2">
                  {item.description}
                </p>

                {/* BENEFITS */}
                <div className="mt-4 space-y-1">
                  {item.benefits.slice(0, 3).map((benefit, index) => (
                    <p key={index} className="text-sm text-gray-600">
                      ✔ {benefit}
                    </p>
                  ))}
                </div>

              </div>

              {/* BOTTOM */}
              <div className="mt-6 flex justify-between items-center">

                <span className="text-primary font-bold text-lg">
                  ₹{item.price}
                </span>

                <Link
                  to="/apply"
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary transition"
                >
                  Apply Now
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InternshipsPreview;