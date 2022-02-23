import Project from "./Project";
import PROJECTS from "../../data/projects";

function Projects() {
  return (
    <section className="w-full px-20">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p>Look at the projects I've built till now.</p>
      </div>
      <div className="w-full px-1 py-24 mx-auto md:w-3/4 lg:w-full lg:px-24 lg:py-24">
        {PROJECTS.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
