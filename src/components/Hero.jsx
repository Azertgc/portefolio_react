import { IconMapPin, IconArrowUpRight } from "./icons/Icons";
import { greeting } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";
import "./Hero.css";
import profil from "../assets/images/photo-profil.png";

export default function Hero() {
  return (
    <section className="hero container">

      {/* Partie gauche */}
      <div className="hero-content">

        <p className="hero-location">
          <IconMapPin size={14} />
          Abidjan, Côte d'Ivoire
        </p>

        <h1 className="hero-title">
          {greeting.name}
        </h1>

        <h2 className="hero-name">
          {greeting.prenom}
        </h2>

        <p className="hero-nickname">
          {greeting.nickname}
        </p>

        <p className="hero-subtitle">
          {greeting.subtitle}
        </p>

        <SocialLinks />

        {/* Boutons */}
        <div className="hero-buttons">

          <a href="#projets" className="hero-cta">
            Voir mes projets
            <IconArrowUpRight size={14} />
          </a>

          <a
            href={greeting.resumeLink}
            className="hero-cta hero-cta-secondary"
            download
          >
            Télécharger mon CV
          </a>

        </div>

      </div>

      {/* Partie droite */}
      <div className="hero-image">
        <img
          src={profil}
          alt="Photo de profil"
        />
      </div>

    </section>
  );
}