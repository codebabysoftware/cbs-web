// src/pages/InternshipDetails.jsx

import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaLaptopCode,
  FaCheckCircle,
  FaWhatsapp,
  FaUsers,
  FaCertificate,
  FaBriefcase,
  FaStar,
  FaClipboardList,
  FaRocket,
} from "react-icons/fa";

import internshipsData from "../data/internships";
import forms from "../data/forms";

const fallbackImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";

const InternshipDetails = () => {
  const { slug } = useParams();

  const internship =
    internshipsData.find(
      (item) =>
        item.slug === slug ||
        String(item.id) === String(slug)
    ) || null;

  if (!internship) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Internship Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            The internship program you are looking for is unavailable or updated.
          </p>

          <Link
            to="/internships"
            className="inline-flex mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Back To Internships
          </Link>
        </div>
      </main>
    );
  }

  const modules =
    internship.modules ||
    internship.syllabus ||
    [
      "Orientation & Career Roadmap",
      "Core Technical Training",
      "Task Based Practical Work",
      "Mini Projects",
      "Team Collaboration",
      "Final Assessment",
    ];

  const benefits = [
    "Real Industry Exposure",
    "Mentor Guided Learning",
    "Live Tasks & Projects",
    "Internship Certificate",
    "Portfolio Development",
    "Job Readiness Support",
  ];

  const faqs = [
    {
      q: "Is this internship for beginners?",
      a: "Yes. Many internship programs are structured for beginners and students.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes. Eligible participants receive internship completion certificates.",
    },
    {
      q: "Is it online or offline?",
      a: "Programs may be available online, offline or hybrid depending on batch availability.",
    },
    {
      q: "Will I work on projects?",
      a: "Yes. Practical assignments and project-based learning are core parts of the internship.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {internship.title} | Codebaby Software
        </title>

        <meta
          name="description"
          content={
            internship.shortDescription ||
            internship.description ||
            `${internship.title} internship program by Codebaby Software.`
          }
        />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-white">

          {/* BG */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full animate-[intMove1_28s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/20 blur-3xl rounded-full animate-[intMove2_34s_linear_infinite]"></div>
          </div>

          <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase text-sm tracking-wide">
                Premium Internship Program
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {internship.title}
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                {internship.description ||
                  internship.shortDescription ||
                  "Gain real-world experience with mentor-guided internship training."}
              </p>

              {/* META */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                <div className="bg-white border border-blue-100 rounded-2xl p-4 flex gap-3">
                  <FaClock className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-900">
                      {internship.duration || "Flexible"}
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-blue-100 rounded-2xl p-4 flex gap-3">
                  <FaLaptopCode className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Domain</p>
                    <p className="font-semibold text-gray-900">
                      {internship.category || "Technology"}
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <a
                  href={forms.internships}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Apply Now <FaArrowRight />
                </a>

                <a
                  href={`https://wa.me/918073369741?text=Hi%20I%20want%20details%20about%20${encodeURIComponent(
                    internship.title
                  )}%20internship.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  WhatsApp <FaWhatsapp />
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-blue-100 bg-white">
              <img
                src={internship.thumbnail || internship.image || fallbackImage}
                alt={internship.title}
                className="w-full h-[420px] object-cover"
              />
            </div>

          </div>

        </section>

        {/* PROGRAM OVERVIEW */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-3 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2">

              <p className="text-blue-600 font-semibold uppercase text-sm">
                Program Structure
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                What You’ll Experience
              </h2>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                {modules.map((item, i) => (
                  <div
                    key={i}
                    className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3"
                  >
                    <FaCheckCircle className="text-blue-600 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-xl h-fit">

              <div className="flex items-center gap-3">
                <FaClipboardList className="text-blue-600 text-xl" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Quick Info
                </h3>
              </div>

              <div className="mt-6 space-y-4 text-sm">

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Mode</span>
                  <span className="font-semibold text-gray-900">
                    Online / Hybrid
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Mentorship</span>
                  <span className="font-semibold text-gray-900">
                    Guided
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Certificate</span>
                  <span className="font-semibold text-gray-900">
                    Included
                  </span>
                </div>

              </div>

              <a
                href={forms.internships}
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Apply Internship <FaArrowRight />
              </a>

            </div>

          </div>

        </section>

        {/* BENEFITS */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom">

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-blue-600 font-semibold uppercase text-sm">
                Benefits
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Why Join This Internship
              </h2>
            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                    <FaStar />
                  </div>

                  <p className="mt-5 text-gray-800 font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* EXTRA CARDS */}
        <section className="py-16 md:py-24 bg-white">

          <div className="container-custom grid lg:grid-cols-3 gap-6">

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaUsers className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Team Collaboration
              </h3>
              <p className="mt-3 text-gray-600">
                Learn communication and workflow with collaborative tasks.
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaCertificate className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Certificate
              </h3>
              <p className="mt-3 text-gray-600">
                Earn completion recognition after successful participation.
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md">
              <FaBriefcase className="text-blue-600 text-2xl" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Job Readiness
              </h3>
              <p className="mt-3 text-gray-600">
                Improve portfolio and employability with real experience.
              </p>
            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">

          <div className="container-custom max-w-4xl">

            <div className="text-center">
              <p className="text-blue-600 font-semibold uppercase text-sm">
                FAQs
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                Common Questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">

              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 rounded-2xl p-6"
                >
                  <h3 className="font-bold text-gray-900">
                    {item.q}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">

          <div className="container-custom text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready To Join {internship.title}?
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Start your internship journey and gain practical experience that
              matters.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href={forms.internships}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Apply Now <FaArrowRight />
              </a>

              <Link
                to="/internships"
                className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
              >
                View All Internships
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* CSS */}
      <style>
        {`
          @keyframes intMove1 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(170px,70px); }
          }

          @keyframes intMove2 {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(-150px,-80px); }
          }
        `}
      </style>
    </>
  );
};

export default InternshipDetails;