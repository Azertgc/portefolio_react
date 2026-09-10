import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import projet from "../assets/images/projt.png"

export default function Projects() {
  return (
    <section id="projets" className="container projects">

      <p className="section-label">PROJETS</p>

      <div className="projects-layout">

        {/* GAUCHE : liste des projets */}
        <div className="projects-left">

          <h2>Mes réalisations</h2>

          <div className="projects-scroll">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

        </div>

        {/* DROITE : emplacement de l'image */}
        <div className="projects-right">
          <div className="projects-image-placeholder">
            <span><img src={projet} alt="" srcset="" /></span>
            
          </div>
        </div>

      </div>

    </section>
  );
}