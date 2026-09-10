// ────────────────────────────────────────────────────────────
// C'est le SEUL fichier que tu dois modifier pour personnaliser
// ton portfolio avec tes vraies infos. Les composants viennent
// juste lire ces données — c'est le même principe que le fichier
// portfolio.js du template que tu as analysé : séparer le
// CONTENU (ici) du CODE (dans les composants).
// ────────────────────────────────────────────────────────────

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
  "Python", "Django", "React", "React Native", "JavaScript",
  "Tailwind CSS", "SQLite / PostgreSQL", "UML & MERISE", "Git",
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
    description:
      "Plateforme institutionnelle Django pour piloter des prestataires de services externes : quatre rôles utilisateurs, formule de scoring pour comparer les offres, suivi documentaire.",
    stack: ["Django", "Python", "Tailwind CSS", "SQLite"],
  },
  {
    id: 2,
    name: "Code de la route",
    tag: "Application mobile",
    period: "2025",
    description:
      "Application Android hors-ligne pour réviser le code de la route : plus de 30 leçons, système de quiz et d'examen blanc, suivi de progression, thème clair/sombre.",
    stack: ["React Native", "Expo", "EAS Build"],
  },
  {
    id: 3,
    name: "AVODAH",
    tag: "Marketplace de services",
    period: "2023 — 2024",
    description:
      "Marketplace mettant en relation clients et prestataires à Abidjan, avant sa transformation en outil de gestion institutionnelle (UIST GESTION).",
    stack: ["Django 4.2", "PostgreSQL", "Tailwind CSS"],
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
