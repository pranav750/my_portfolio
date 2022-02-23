import Technologies from "../Technologies/Technologies";
import Websites from "../Websites/Websites";

function Project({ project }) {
  return (
    <div className="flex flex-col w-full p-10 mb-24 shadow-2xl rounded-2xl lg:flex-row">
      <div className="flex-1 w-full my-auto lg:px-5 lg:mx-4">
        <img className="w-full" src={project.image} alt={project.title} />
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <h1 className="mb-2 text-xl font-bold">{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div className="mb-4">
          <Technologies technologies={project.technologies} />
        </div>
        <div className="mb-4">
          <Websites links={project.links} />
        </div>
      </div>
    </div>
  );
}

export default Project;
