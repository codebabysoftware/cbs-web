import { useParams } from "react-router-dom";
import { internships } from "../data/internships";
import { Helmet } from "react-helmet-async";

const FORM_URL = "https://forms.gle/KQUdrAGHHDTeZgoA6";

const InternshipDetails = () => {
  const { id } = useParams();
  const item = internships.find((i) => i.id === Number(id));

  if (!item) return <div className="p-10 text-center">Not found</div>;

  return (
    <>
      <Helmet>
        <title>{item.title} | MyCompany</title>
      </Helmet>

      <div className="section bg-gradient-to-br from-white to-blue-50">
        <div className="container-custom">

          <h1 className="text-3xl font-bold">{item.title}</h1>
          <p className="text-gray-600 mt-2">{item.description}</p>

          <div className="mt-4 text-primary font-bold text-xl">
            ₹{item.price}
          </div>

          {/* SCREENSHOTS */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {item.images.map((img, i) => (
              <img key={i} src={img} className="rounded-xl shadow" />
            ))}
          </div>

          {/* VIDEO */}
          <div className="mt-10 aspect-video">
            <iframe
              src={item.demoVideo}
              className="w-full h-full rounded-xl"
              allowFullScreen
            ></iframe>
          </div>

          {/* RESPONSIBILITIES */}
          <div className="mt-10">
            <h2 className="text-xl font-bold">Responsibilities</h2>
            {item.responsibilities.map((r, i) => (
              <p key={i}>✔ {r}</p>
            ))}
          </div>

          {/* BENEFITS */}
          <div className="mt-10">
            <h2 className="text-xl font-bold">Benefits</h2>
            {item.benefits.map((b, i) => (
              <p key={i}>✔ {b}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href={FORM_URL}
              className="bg-primary text-white px-6 py-3 rounded-lg"
            >
              Apply Now
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default InternshipDetails;