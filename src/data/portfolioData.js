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
  { name: "Django", image: django },
  { name: "React", image: react },
  //{ name: "React Native", image: reactImg }, // Réutilisation de l'image React
  { name: "JavaScript", image:js_2 }, // Autre possibilité (si dossier public)
  //{ name: "Tailwind CSS", image: css },
  { name: "SQLite / PostgreSQL", image: bd },
  //{ name: "UML & MERISE", image:uml},
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
    image: "/src/assets/images/projt.png",
    description:
      "Application web de gestion des prestataires et des prestations pour l'UIST.",
    stack: ["Django", "Python", "Tailwind CSS", "SQLite"],
  },

  {
    id: 2,
    name: "Code de la route",
    tag: "Application mobile",
    period: "2025",
    image: "/src/assets/images/1000594281-removebg-preview.png",
    description:
      "Application mobile permettant de réviser le code de la route grâce à des leçons et des quiz.",
    stack: ["React Native", "Expo", "JavaScript"],
  },

  {
    id: 3,
    name: "AVODAH",
    tag: "Marketplace de services",
    period: "2023 — 2024",
    image: "/src/assets/images/stack.png",
    description:
      "Plateforme web de mise en relation entre clients et prestataires de services.",
    stack: ["Django", "Python", "PostgreSQL", "Tailwind CSS"],
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
    value: "3",
    label: "Projets réalisés",
  },
  {
    value: "8",
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
    title: "Début dans le développement",
    description:
      "Découverte de la programmation et développement de mes premières applications web.",
  },
  {
    year: "2023 — 2024",
    title: "AVODAH",
    description:
      "Conception d'une plateforme web de mise en relation entre clients et prestataires de services.",
  },
  {
    year: "2024 — 2025",
    title: "UIST GESTION",
    description:
      "Conception et réalisation d'une application web de gestion des prestataires et des prestations pour l'UIST.",
  },
  {
    year: "2025 — 2026",
    title: "Développement Full Stack",
    description:
      "Approfondissement de Python, Django, JavaScript, React, bases de données, Git et déploiement.",
  },
  {
    year: "Aujourd'hui",
    title: "Développeur Web Junior",
    description:
      "Je continue à développer mes compétences en développement Full Stack et à construire des projets personnels.",
  },
];