import "./ProjectCard.css";
import { IconGithub } from "./icons/Icons";

export default function ProjectCard({
  project,
  onSelect,
  isActive,
  showDescription = false,
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

        {/* La présentation complète n'apparaît que sur la page
            "Voir plus de projets" (showDescription = true) */}
        {showDescription && (
          <p className="project-card-description">
            {project.presentation || project.description}
          </p>
        )}

        {/* Technologies */}
        <div className="project-card-stack">
          {project.stack.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {/* Lien GitHub */}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="project-card-repo"
            onClick={(e) => e.stopPropagation()}
          >
            <IconGithub size={15} />
            Voir sur GitHub
          </a>
        )}

      </div>
      <hr />
    </article>
  );
}
