import { projects } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import "./AllProjects.css";
import { Link } from "react-router-dom";

export default function AllProjects() {
  return (
    <main className="all-projects container">

      <div className="all-projects-heading">
        <p className="section-label">MES PROJETS</p>

        <h1>Tous mes projets</h1>

        <p>
          Découvrez les différents projets que j'ai réalisés
          dans le cadre de ma formation et de mes projets personnels.
        </p>
      </div>

      <div className="all-projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </main>
  );
}