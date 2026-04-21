const ProjectCard = ({ project }) => {

  const buyProject = () => {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects));
    alert("Project added!");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5">

      <h2 className="text-lg font-semibold">{project.title}</h2>

      <p className="text-gray-500 text-sm mt-2">
        {project.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-primary font-bold">
          ₹{project.price}
        </span>

        <button
          onClick={buyProject}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;