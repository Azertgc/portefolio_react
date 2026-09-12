import { useRef, useState } from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import projt from "../assets/images/projt.png"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Permet de contrôler la zone qui défile
  const scrollRef = useRef(null);

  // Aller vers une carte précise
  const selectProject = (index) => {
    setCurrentIndex(index);
    setSelectedProject(projects[index]);

    // Récupère toutes les cartes
    const cards = scrollRef.current?.children;

    if (cards && cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  // Projet précédent
  const previousProject = () => {
    const newIndex =
      currentIndex === 0
        ? projects.length - 1
        : currentIndex - 1;

    selectProject(newIndex);
  };

  // Projet suivant
  const nextProject = () => {
    const newIndex =
      currentIndex === projects.length - 1
        ? 0
        : currentIndex + 1;

    selectProject(newIndex);
  };

  return (
    <section id="projets" className="container projects">

      <p className="section-label">PROJETS</p>

      <div className="projects-layout">

        {/* GAUCHE */}
        <div className="projects-left">

          <h2>Mes réalisations</h2>

          <div className="projects-carousel">

            {/* Flèche gauche */}
            <button
              className="carousel-arrow"
              onClick={previousProject}
              aria-label="Projet précédent"
            >
              ←
            </button>

            {/* Cartes */}
            <div
              className="projects-scroll"
              ref={scrollRef}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={() => selectProject(index)}
                  isActive={index === currentIndex}
                />
              ))}
            </div>

            {/* Flèche droite */}
            <button
              className="carousel-arrow"
              onClick={nextProject}
              aria-label="Projet suivant"
            >
              →
            </button>

          </div>

          {/* Points */}
          <div className="carousel-dots">

            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`carousel-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => selectProject(index)}
                aria-label={`Afficher le projet ${index + 1}`}
              />
            ))}

          </div>

        </div>

        {/* DROITE */}
        <div className="projects-right">

          <div className="projects-image-placeholder">

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
            />

          </div>

        </div>
        <div className="projects-right-fixed">

          <div className="projects-image-placeholder-fixed">

            <img
              src={projt}
              alt=""
            />

          </div>

        </div>

      </div>

    </section>
  );
}