export default function ProjectCard({ project }) {
  return (
    <article className="project-card">

      {/* Image */}
      <div className="project-card-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      {/* Nom */}
      <h3>{project.title}</h3>

      {/* Description */}
      <p>{project.description}</p>

    </article>
  );
}