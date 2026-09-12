import ThemeSwitcher from "./ThemeSwitcher";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ activeTheme, onThemeChange }) {
  return (
    <header className="header container">
      <Link to="/" className="back-home"> <span className="logo">GTBE</span></Link>
      <nav className="nav">
        <a href="#projets">Projets</a>
        <a href="#profil">Profil</a>
        <a href="#contact">Contact</a>
        <a href="#competence">Competence</a>
      </nav>
      
      <ThemeSwitcher activeTheme={activeTheme} onChange={onThemeChange} />
    </header>
    
  );
}
