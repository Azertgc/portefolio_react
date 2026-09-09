import { skills } from "../data/portfolioData";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="profil" className="container skills">
      <p className="section-label">PROFIL</p>
      <div className="skills-list">
        {/* .map() transforme le tableau `skills` en une liste de
            <span>. Chaque élément généré par une boucle a besoin
            d'une prop `key` unique pour que React sache lequel est
            lequel s'il faut re-render la liste. */}
        {skills.map((skill) => (
          <span key={skill} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
