import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const WHATSAPP_NUMBER = "8073369741"; // 👉 change
const EMAIL = "your@email.com"; // 👉 change
const MAP_URL =
  "https://www.google.com/maps?q=Bangalore&output=embed"; // 👉 change location
const FORM_URL = "https://forms.gle/YOUR_FORM_LINK";

const Contact = () => {
  return (
    <div className="section bg-gradient-to-br from-white to-blue-50">

      <Helmet>
        <title>Contact Us | MyCompany</title>
        <meta
          name="description"
          content="Contact MyCompany for courses, internships, and projects."
        />
      </Helmet>

      <div className="container-custom">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Contact <span className="text-primary">Us</span>
          </h1>

          <p className="text-gray-600 mt-3">
            Have questions? Reach out to us directly or apply through our form.
          </p>
        </div>

        {/* 🔥 CONTACT CARDS */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <FaWhatsapp className="text-green-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-sm text-gray-500 mt-1">
              Chat with us instantly
            </p>
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${EMAIL}`}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <FaEnvelope className="text-primary text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-gray-500 mt-1">
              {EMAIL}
            </p>
          </a>

          {/* LOCATION */}
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <FaMapMarkerAlt className="text-red-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">Location</h3>
            <p className="text-sm text-gray-500 mt-1">
              Bangalore, India
            </p>
          </div>

        </div>

        {/* 🔥 GOOGLE FORM */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Apply / Contact Form
          </h2>

          <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow">

            <iframe
              src={FORM_URL.replace("viewform", "viewform?embedded=true")}
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form"
            >
              Loading…
            </iframe>

          </div>
        </div>

        {/* 🔥 MAP */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Our Location
          </h2>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow">

            <iframe
              src={MAP_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>

          </div>
        </div>

        {/* 🔥 CTA */}
        <div className="mt-20 text-center bg-white p-10 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Let’s Build Your Career Together 
          </h2>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            Apply Now
          </a>

        </div>

      </div>
    </div>
  );
};

export default Contact;