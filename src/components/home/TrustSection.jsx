const TrustSection = () => {
  return (
    <section className="section bg-blue-50">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {[
          { number: "1000+", label: "Students Trained" },
          { number: "50+", label: "Projects Delivered" },
          { number: "20+", label: "Internships" },
          { number: "95%", label: "Success Rate" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-primary">
              {item.number}
            </h2>
            <p className="text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TrustSection; 