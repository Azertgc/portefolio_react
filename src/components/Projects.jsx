import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projets" className="container projects">
      <p className="section-label">PROJETS</p>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
