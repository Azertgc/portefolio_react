import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ activeTheme, onThemeChange }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header container">

      {/* Logo */}
      <Link to="/" className="back-home">
        <span className="logo">GTBE</span>
      </Link>

      {/* Navigation ordinateur */}
      <nav className="nav">
        <a href="#projets">Projets</a>
        <a href="#profil">Profil</a>
        <a href="#contact">Contact</a>
        <a href="#competence">Compétence</a>
      </nav>

      {/* Thème */}
      <ThemeSwitcher
        activeTheme={activeTheme}
        onChange={onThemeChange}
      />

      {/* Bouton hamburger */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Menu mobile */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <a href="#projets" onClick={closeMenu}>
          Projets
        </a>

        <a href="#profil" onClick={closeMenu}>
          Profil
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a href="#competence" onClick={closeMenu}>
          Compétence
        </a>

      </nav>

    </header>
  );
}