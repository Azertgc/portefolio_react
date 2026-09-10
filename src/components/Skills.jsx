import { skills } from "../data/portfolioData";
import stack from "../assets/images/stack.png";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="profil" className="container skills">

      <p className="section-label">PROFIL</p>

      <div className="skills-layout">

        {/* GAUCHE : PHOTO */}
        <div className="profile-photo">
          <img src={stack} alt="Photo de profil" />
        </div>

        {/* DROITE : COMPÉTENCES */}
        <div className="skills-content">

          <h2>Technologie Clés</h2>

          <p className="skills-description">
            Technologies et outils que j'utilise pour concevoir
            des applications web modernes.
          </p>

          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">

                <img
                  src={skill.image}
                  alt={`Logo ${skill.name}`}
                  className="skill-icon"
                />

                <span>{skill.name}</span>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}