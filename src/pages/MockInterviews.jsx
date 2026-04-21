import { Helmet } from "react-helmet-async";
import { FaUserTie, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

const BASE_FORM ="https://forms.gle/L48i8VvoPApqGprP8";

const getFormLink = (role = "General Mock Interview") => {
  return `${BASE_FORM}?usp=pp_url&entry.123456=${encodeURIComponent(role)}`;
};

const MockInterviews = () => {
  return (
    <div className="section bg-gradient-to-br from-white to-blue-50">

      <Helmet>
        <title>Mock Interviews | MyCompany</title>
        <meta
          name="description"
          content="Practice real interview scenarios with expert mock interviews."
        />
      </Helmet>

      <div className="container-custom">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Mock Interviews with <span className="text-primary">Experts</span>
          </h1>

          <p className="text-gray-600 mt-4">
            Get real interview experience, detailed feedback, and improve your chances of getting hired.
          </p>

          <a
            href={getFormLink()}
            className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg"
          >
            Book Mock Interview
          </a>
        </div>

        {/* TYPES */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Frontend Interview",
            "Backend Interview",
            "Full Stack Interview",
            "DSA Interview",
            "HR Interview",
            "System Design"
          ].map((type, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

              <FaLaptopCode className="text-primary text-2xl mb-3" />

              <h3 className="font-semibold">{type}</h3>

              <p className="text-sm text-gray-500 mt-2">
                Practice real interview questions and get expert feedback.
              </p>

              <a
                href={getFormLink(type)}
                className="mt-4 inline-block text-primary font-semibold"
              >
                Book →
              </a>

            </div>
          ))}

        </div>

        {/* PROCESS */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              "Book slot",
              "Attend interview",
              "Get feedback",
              "Improve & succeed"
            ].map((step, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold">Step {i + 1}</h3>
                <p className="text-sm text-gray-500 mt-2">{step}</p>
              </div>
            ))}

          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            What You Get
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">

            {[
              "Real interview experience",
              "Detailed feedback",
              "Confidence boost",
              "Improved communication",
              "Technical guidance"
            ].map((b, i) => (
              <div key={i} className="flex gap-3 bg-white p-4 rounded-xl shadow">
                <FaCheckCircle className="text-primary" />
                {b}
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-primary text-white p-10 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Ready to crack your interviews? 🚀
          </h2>

          <a
            href={getFormLink()}
            className="mt-6 inline-block bg-white text-primary px-6 py-3 rounded-lg"
          >
            Book Now
          </a>
        </div>

      </div>
    </div>
  );
};

export default MockInterviews;