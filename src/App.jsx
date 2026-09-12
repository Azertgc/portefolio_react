import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { themes } from "./data/portfolioData";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import About from "./components/About";
import SkillsAreas from "./components/SkillsAreas";
import Journey from "./components/Journey";
import Footer from "./components/Footer";

import AllProjects from "./pages/AllProjects";

export default function App() {
  const [activeTheme, setActiveTheme] = useState("nuit");
  const theme = themes[activeTheme];

  const themeStyle = {
    "--bg": theme.bg,
    "--panel": theme.panel,
    "--text": theme.text,
    "--accent": theme.accent,
    "--accent2": theme.accent2,
  };

  return (
    <BrowserRouter>
      <div className="app" style={themeStyle}>

        <Header
          activeTheme={activeTheme}
          onThemeChange={setActiveTheme}
        />

        <Routes>

          {/* Page d'accueil */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Stats />
                <Skills />
                <SkillsAreas />
                <Journey />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Page Tous les projets */}
          <Route
            path="/projets"
            element={<AllProjects />}
          />
     
        </Routes>

      </div>
    </BrowserRouter>
  );
}