import "./About.css";
import profil from "../assets/images/a_propos.png";

export default function About() {
  return (
    <section id="profil" className="about container">

      <div className="about-image">
        <img src={profil} alt="Photo de Gonty Tia Ben-Emmanuel" />
      </div>

      <div className="about-content">

        {/* Carte 1 : Qui suis-je */}
        <div className="about-card">
          <p className="section-label">À PROPOS</p>

          <h2>Qui suis-je ?</h2>

          <p>
            Je suis Gonty Tia Ben-Emmanuel, diplômé en Informatique, spécialisé dans le développement d'applications web et mobile. Je conçois des solutions web modernes en utilisant notamment Django, React et JavaScript.
          </p>

          <p>
            Je m'intéresse particulièrement au développement web et à la
            conception d'applications utiles, modernes et faciles à utiliser.
          </p>
        </div>

        {/* Carte 2 : Ma vision */}
        <div className="about-card">
          <h3>Ma vision</h3>

          <p>
            Mon objectif est de continuer à progresser dans le développement
            logiciel et de concevoir des solutions qui répondent à de vrais
            besoins.
          </p>
        </div>

        {/* Carte 3 : Mes objectifs */}
        <div className="about-card">
          <h3>Mes objectifs</h3>

          <p>
            Développer mes compétences en développement Full Stack, approfondir
            React et Django et évoluer progressivement vers le métier
            d'ingénieur logiciel.
          </p>
        </div>

      </div>

    </section>
  );
}
