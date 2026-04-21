import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container-custom text-center">

        <h2 className="text-3xl font-bold">
          Start Your Career Journey Today
        </h2>

        <p className="mt-3 text-blue-100">
          Apply now and our team will guide you forward.
        </p>

        <Link
          to="/apply"
          className="mt-6 inline-block bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Apply Now
        </Link>

      </div>
    </section>
  );
};

export default CTASection;