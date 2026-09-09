import "./ProjectCard.css";

// Un composant "enfant" qui ne fait que recevoir des props et
// afficher un projet. Toute la donnée vient du parent (Projects.jsx),
// ce composant ne connaît rien du tableau global — il est
// réutilisable pour n'importe quel objet "project" qu'on lui passe.
export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
      <div>
        <div className="project-heading">
          <h3>{project.name}</h3>
          <span className="project-tag">{project.tag}</span>
        </div>
        <p className="project-period">{project.period}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="stack-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
