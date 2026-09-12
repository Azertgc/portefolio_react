import "./ProjectCard.css";
import { Link } from "react-router-dom";
import "./ProjectCard.css";


export default function ProjectCard({
  project,
  onSelect,
  isActive
}) {
  return (
    <article
      className={`project-card ${isActive ? "active" : ""}`}
      onClick={onSelect}
    >
      {/* Image du projet */}
      <div className="project-card-image">
        <img
          src={project.image}
          alt={project.name}
        />
      </div>

      {/* Informations */}
      <div className="project-card-content">

        <span className="project-card-tag">
          {project.tag}
        </span>

        <h3>{project.name}</h3>

        

        {/* Technologies */}
        <div className="project-card-stack">
          {project.stack.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

      </div>
      <hr />
    </article>
  );
}

/* ajout de lien git apres*/