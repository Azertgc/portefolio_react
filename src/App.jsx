import { useState } from "react";
import { themes } from "./data/portfolioData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  // useState() est le hook le plus fondamental de React : il crée
  // une variable ("activeTheme") qui, quand on la change via
  // setActiveTheme, déclenche un nouveau rendu du composant (et de
  // tous ses enfants qui en dépendent). C'est comme ça que cliquer
  // sur un point de couleur change toute la page.
  const [activeTheme, setActiveTheme] = useState("nuit");
  const theme = themes[activeTheme];

  // On traduit le thème choisi en variables CSS appliquées sur le
  // conteneur racine. Tous les fichiers .css du projet lisent ces
  // variables (var(--accent), var(--bg)...), donc changer un seul
  // objet ici recolore l'application entière.
  const themeStyle = {
    "--bg": theme.bg,
    "--panel": theme.panel,
    "--text": theme.text,
    "--accent": theme.accent,
    "--accent2": theme.accent2,
  };

  return (
    <div className="app" style={themeStyle}>
      <Header activeTheme={activeTheme} onThemeChange={setActiveTheme} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
