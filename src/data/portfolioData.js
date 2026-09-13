// ────────────────────────────────────────────────────────────
// C'est le SEUL fichier que tu dois modifier pour personnaliser
// ton portfolio avec tes vraies infos. Les composants viennent
// juste lire ces données — c'est le même principe que le fichier
// portfolio.js du template que tu as analysé : séparer le
// CONTENU (ici) du CODE (dans les composants).
// ────────────────────────────────────────────────────────────
import bd from "../assets/images/bd.jpeg"
import django from "../assets/images/django.jpeg"
import git from "../assets/images/git.jpeg"
import html from "../assets/images/html.jpeg"
import js_2 from "../assets/images/js_2.jpeg"
import js from "../assets/images/js.jpeg"
import python from "../assets/images/python.jpeg"
import react from "../assets/images/react.jpeg"
import flutter from "../assets/images/flutter.svg"
import flask from "../assets/images/flask.svg"
import ionic from "../assets/images/ionic.png"
import java from "../assets/images/java.svg"
import php from "../assets/images/php.svg"
import bootstrap from "../assets/images/bootstrap.svg"
import docker from "../assets/images/docker.svg"






export const greeting = {
  name: "GONTY",
  prenom:"Tia Ben-Emmanuel",
  nickname: "Développeur Web Junior",
  subtitle:
    "Étudiant en L3 Techniques et Sciences de l'Informatique à l'UIST. Je construis des plateformes web avec Django et React.",
  resumeLink: "#",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Azertgc" },
  { name: "LinkedIn", url: "https://linkedin.com/in/ton-profil" },
  { name: "Email", url: "mailto:gontben3@gmail.com" },
];

export const skills = [
  { name: "Python", image: python },
  //{ name: "Java", image: java },
  { name: "PHP", image: php },
  { name: "Django", image: django },
  { name: "Flask", image: flask },
  { name: "React", image: react },
  { name: "Flutter / Dart", image: flutter },
  { name: "Ionic / Angular", image: ionic },
  { name: "JavaScript / TypeScript", image: js_2 },
  { name: "HTML / CSS", image: html },
  { name: "Bootstrap", image: bootstrap },
  { name: "SQLite / MySQL / MariaDB / PostgreSQL", image: bd },
  { name: "Docker", image: docker },
  //{ name: "UML / StarUML", image: uml },
  { name: "Git", image: git },
];

// Un tableau d'objets : chaque projet est une "fiche" avec la
// même forme. C'est ce tableau qu'on va "map()" dans Projects.jsx
// pour générer une carte par projet, sans copier-coller de JSX.
export const projects = [
  {
    id: 1,
    name: "UIST GESTION",
    tag: "Projet de fin de cycle",
    period: "2024 — 2025",
    image: "/src/assets/images/uistg.png",
    description:
      "Application web de gestion des prestataires et des prestations pour l'UIST.",
    stack: ["Django", "Python", "Tailwind CSS", "SQLite"],
    repo: "https://github.com/Azertgc/uist_gestion",
  },

  {
    id: 2,
    name: "AVODAH",
    tag: "Marketplace de services",
    period: "2023 — 2024",
    image: "/src/assets/images/stackA.png",
    description:
      "Plateforme de services domestiques à Abidjan mettant en relation clients et prestataires.",
    stack: ["Django", "Python", "MySQL", "HTML/CSS"],
    repo: "https://github.com/Azertgc/avodah_plateforme_complete",
  },

  {
    id: 3,
    name: "ClinicYave",
    tag: "Application médicale",
    period: "2025 — 2026",
    image: "/src/assets/images/clinicyave.png",
    description:
      "Application de gestion médicale construite avec Vue 3, Vite et Tailwind CSS.",
    stack: ["Vue 3", "Vite", "Tailwind CSS", "JavaScript"],
    repo: "https://github.com/Azertgc/ClinicYave",
  },

  {
    id: 4,
    name: "Météo App",
    tag: "Application mobile",
    period: "2025 — 2026",
    image: "/src/assets/images/meteo.png",
    description:
      "Application météo Flutter permettant de rechercher une ville et d'afficher les conditions en temps réel, avec un thème visuel adaptatif.",
    stack: ["Flutter", "Dart"],
    repo: "https://github.com/Azertgc/flutter-app-meteo",
  },

  {
    id: 5,
    name: "Ionic Todo App",
    tag: "Application mobile",
    period: "2025 — 2026",
    image: "/src/assets/images/todo.png",
    description:
      "Application mobile de gestion de tâches, développée avec Ionic, Angular et Capacitor sur une architecture standalone.",
    stack: ["Ionic", "Angular", "TypeScript", "Capacitor"],
    repo: "https://github.com/Azertgc/ionic-todo-app",
  },

  {
    id: 6,
    name: "Flask Admin",
    tag: "Panel d'administration",
    period: "2025",
    image: "/src/assets/images/flask.png",
    description:
      "Interface d'administration web développée avec Flask, HTML et CSS.",
    stack: ["Flask", "Python", "HTML", "CSS"],
    repo: "https://github.com/Azertgc/Projet_flask_admin",
  },
];

// Inspiré du système multi-thèmes du template : plusieurs
// palettes nommées, et un composant ThemeSwitcher qui change
// laquelle est active via un useState.
export const themes = {
  nuit: { name: "Nuit", bg: "#141B26", panel: "#1B2432", text: "#EDE7DA", accent: "#D9A441", accent2: "#4E9E97" },
  ocean: { name: "Océan", bg: "#EDF9FE", panel: "#FFFFFF", text: "#001C55", accent: "#0E6BA8", accent2: "#A6E1FA" },
  foret: { name: "Forêt", bg: "#FFFFEB", panel: "#FFFFFF", text: "#003F2F", accent: "#55A630", accent2: "#dddf00" },
};

export const stats = [
  {
    value: "L3",
    label: "Informatique",
  },
  {
    value: "6",
    label: "Projets réalisés",
  },
  {
    value: "15",
    label: "Technologies",
  },
  {
    value: "2+",
    label: "Années de pratique",
  },
];

export const about = {
  title: "À propos de moi",
  description:
    "Je suis étudiant en informatique et développeur web junior. Je m'intéresse particulièrement à la conception d'applications web modernes et aux technologies permettant de créer des solutions utiles et évolutives.",
  vision:
    "Mon objectif est de continuer à développer mes compétences en ingénierie logicielle et de concevoir des applications fiables, simples à utiliser et adaptées aux besoins réels.",
};


export const expertise = [
  {
    icon: "💻",
    title: "Frontend",
    level: 75,
    description: "Création d'interfaces web modernes et responsives.",
  },
  {
    icon: "⚙️",
    title: "Backend",
    level: 85,
    description: "Développement d'applications avec Python et Django.",
  },
  {
    icon: "🔌",
    title: "API",
    level: 75,
    description: "Création et utilisation d'API pour connecter les applications.",
  },
  {
    icon: "🗄️",
    title: "Bases de données",
    level: 80,
    description: "Conception et gestion de bases de données SQL.",
  },
  {
    icon: "🚀",
    title: "Déploiement",
    level: 65,
    description: "Mise en ligne et configuration des applications web.",
  },
];

export const journey = [
  {
    year: "2023",
    title: "Baccalauréat série D",
    description:
      "Obtention du Baccalauréat au Lycée Moderne LYMAS, point de départ vers des études supérieures en informatique.",
  },
  {
    year: "2023 — 2024",
    title: "Entrée à l'UIST — AVODAH",
    description:
      "Début de la Licence Développement d'Applications Web et Mobile (DAWM) à l'UIST. Premier grand projet : AVODAH, une plateforme Django de mise en relation entre clients et prestataires de services à Abidjan.",
  },
  {
    year: "2024 — 2025",
    title: "Diversification technique",
    description:
      "Exploration de plusieurs stacks au-delà de Django : Flask (panel d'administration médicale), Flutter/Dart (application météo), Ionic/Angular (application de tâches). Programme L3 TCSI, année académique 2024–2025.",
  },
  {
    year: "2024 — 2026",
    title: "UIST GESTION — Projet de fin de cycle",
    description:
      "Analyse des besoins, modélisation UML (cas d'utilisation, classes, séquence) et développement avec Django d'une plateforme de gestion des prestataires et des prestations de services pour l'UIST, de la conception à la mise en œuvre.",
  },
  {
    year: "2026",
    title: "Licence DAWM obtenue",
    description:
      "Licence en Informatique — Développement d'Applications Web et Mobile, Université Internationale des Sciences et Technologies (UIST), Abidjan.",
  },
  {
    year: "Aujourd'hui",
    title: "Développeur Web Junior",
    description:
      "À la recherche d'une opportunité pour mettre mes compétences au service de projets concrets et poursuivre mon développement professionnel.",
  },
];