import { IconMapPin, IconArrowUpRight } from "./icons/Icons";
import { greeting } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero container">
      <div>
        <p className="hero-location">
          <IconMapPin size={14} /> Abidjan, Côte d'Ivoire
        </p>
        <h1 className="hero-title">{greeting.name}</h1>
        <h2 className="hero-nickname">{greeting.nickname}</h2>
        <p className="hero-subtitle">{greeting.subtitle}</p>
        <SocialLinks />
        <a href="#projets" className="hero-cta">
          Voir mes projets <IconArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
