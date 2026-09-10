import ThemeSwitcher from "./ThemeSwitcher";
import "./Header.css";

export default function Header({ activeTheme, onThemeChange }) {
  return (
    <header className="header container">
      <span className="logo">portfolio</span>
      <nav className="nav">
        <a href="#projets">Projets</a>
        <a href="#profil">Profil</a>
        <a href="#contact">Contact</a>
      </nav>
      
      <ThemeSwitcher activeTheme={activeTheme} onChange={onThemeChange} />
    </header>
    
  );
}
