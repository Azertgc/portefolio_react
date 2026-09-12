import { expertise } from "../data/portfolioData";
import "./SkillsAreas.css";

export default function SkillsAreas() {
  return (
    <section id="competence" className="skills-areas container">
      <div className="section-heading">
        <p className="section-label">COMPÉTENCES</p>
        <h2>Ce que je sais faire</h2>
        <p>
          Mes principaux domaines de compétence dans le développement
          d'applications web.
        </p>
      </div>

      <div className="skills-areas-grid">
        {expertise.map((skill) => (
          <div className="skills-area-card" key={skill.title}>
            <span className="skills-area-icon">{skill.icon}</span>

            <h3>{skill.title}</h3>

            <p className="skills-area-description">{skill.description}</p>

            <div className="skill-level">
              <div className="skill-level-top">
                <span>Niveau</span>
                <span>{skill.level}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-bar-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}