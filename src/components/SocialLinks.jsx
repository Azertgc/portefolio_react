import { IconGithub, IconLinkedin, IconMail } from "./icons/Icons";
import { socialLinks } from "../data/portfolioData";
import "./SocialLinks.css";

// On associe chaque nom de réseau à son icône. On aurait pu mettre
// ça dans les données elles-mêmes, mais garder la logique visuelle
// (quelle icône afficher) séparée des données (quel lien utiliser)
// rend portfolioData.js plus simple à modifier pour toi.
const ICONS = {
  GitHub: IconGithub,
  LinkedIn: IconLinkedin,
  Email: IconMail,
};

export default function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link) => {
        const Icon = ICONS[link.name]; // un composant peut être stocké dans une variable
        return (
          <a key={link.name} href={link.url} className="social-link">
            {Icon && <Icon size={16} />}
            {link.name}
          </a>
        );
      })}
    </div>
  );
}
