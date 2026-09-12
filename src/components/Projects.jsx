import { useRef, useState } from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import projt from "../assets/images/projt.png";
import { Link } from "react-router-dom";

export default function Projects() {

  // On affiche seulement les 3 premiers projets
  const displayedProjects = projects.slice(0, 3);

  // Projet actuellement sélectionné
  const [selectedProject, setSelectedProject] = useState(
    displayedProjects[0]
  );

  // Index du projet actuellement sélectionné
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef(null);


  // =========================
  // SÉLECTIONNER UN PROJET
  // =========================

  const selectProject = (index) => {

    setCurrentIndex(index);

    setSelectedProject(displayedProjects[index]);

    const cards = scrollRef.current?.children;

    if (cards && cards[index]) {

      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

    }
  };


  // =========================
  // PROJET PRÉCÉDENT
  // =========================

  const previousProject = () => {

    const newIndex =
      currentIndex === 0
        ? displayedProjects.length - 1
        : currentIndex - 1;

    selectProject(newIndex);
  };


  // =========================
  // PROJET SUIVANT
  // =========================

  const nextProject = () => {

    const newIndex =
      currentIndex === displayedProjects.length - 1
        ? 0
        : currentIndex + 1;

    selectProject(newIndex);
  };


  return (

    <section
      id="projets"
      className="container projects"
    >

      {/* =========================
          TITRE
      ========================= */}

      <p className="section-label">
        PROJETS
      </p>


      <div className="projects-layout">


        {/* =========================
            GAUCHE : PROJETS
        ========================= */}

        <div className="projects-left">

          <h2>
            Mes réalisations
          </h2>


          {/* CAROUSEL */}

          <div className="projects-carousel">


            {/* PROJET PRÉCÉDENT */}

            <button
              className="carousel-arrow"
              onClick={previousProject}
              aria-label="Projet précédent"
            >
              ←
            </button>


            {/* LISTE DES PROJETS */}

            <div
              className="projects-scroll"
              ref={scrollRef}
            >

              {displayedProjects.map(
                (project, index) => (

                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={() =>
                      selectProject(index)
                    }
                    isActive={
                      index === currentIndex
                    }
                  />

                )
              )}

            </div>


            {/* PROJET SUIVANT */}

            <button
              className="carousel-arrow"
              onClick={nextProject}
              aria-label="Projet suivant"
            >
              →
            </button>

          </div>


          {/* =========================
              POINTS
          ========================= */}

          <div className="carousel-dots">

            {displayedProjects.map(
              (project, index) => (

                <button
                  key={project.id}
                  className={`carousel-dot ${
                    index === currentIndex
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    selectProject(index)
                  }
                  aria-label={`Afficher le projet ${
                    index + 1
                  }`}
                />

              )
            )}

          </div>

        </div>


        {/* =========================
            DESKTOP
            IMAGE FIXE
        ========================= */}

        <div className="projects-right-fixed">

          <div className="projects-image-placeholder-fixed">

            <img
              src={projt}
              alt="Aperçu des projets"
            />

          </div>


          {/* BOUTON DESKTOP */}

          <Link
            to="/projets"
            className="projects-more"
          >
            Voir plus de projets →
          </Link>

        </div>


        {/* =========================
            MOBILE / TABLETTE
            IMAGE DYNAMIQUE
        ========================= */}

        <div className="projects-right">

          <div className="projects-image-placeholder">

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
            />

          </div>

        </div>


        {/* =========================
            BOUTON MOBILE
        ========================= */}

        <div className="more-fixed">

          <Link
            to="/projets"
            className="projects-more"
          >
            Voir plus de projets →
          </Link>

        </div>


      </div>

    </section>

  );
}