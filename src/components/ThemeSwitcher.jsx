import { themes } from "../data/portfolioData";
import "./ThemeSwitcher.css";

// Ce composant reçoit deux "props" (des paramètres passés par le
// parent, App.jsx) : la clé du thème actif, et une fonction pour
// la changer. Le composant ne stocke rien lui-même — c'est App.jsx
// qui est le "propriétaire" du state. C'est un pattern très courant
// en React : "lifting state up" (faire remonter l'état au parent
// commun quand plusieurs composants doivent le partager).
export default function ThemeSwitcher({ activeTheme, onChange }) {
  return (
    <div className="theme-switcher">
      {Object.entries(themes).map(([key, theme]) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`theme-dot ${activeTheme === key ? "active" : ""}`}
          style={{ backgroundColor: theme.accent }}
          aria-label={`Thème ${theme.name}`}
          title={theme.name}
        />
      ))}
    </div>
  );
}
