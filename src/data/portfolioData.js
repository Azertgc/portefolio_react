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



import uistgImg from "../assets/images/uistg.png"
import avodahImg from "../assets/images/stackA.png"
import clinicyaveImg from "../assets/images/clinicyave.png"
import meteoImg from "../assets/images/meteo.png"
import todoImg from "../assets/images/todo.png"
import flaskAdminImg from "../assets/images/flask.png"




export const greeting = {
  name: "GONTY",
  prenom:"Tia Ben-Emmanuel",
  nickname: "Développeur Web Junior",
  subtitle:
    "Étudiant en L3 Techniques et Sciences de l'Informatique à l'UIST. Je construis des plateformes web avec Django et React.",
  resumeLink: "/CV_Gonty_Tia_Ben_Emmanuel_Developpeur.pdf",
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
    image: uistgImg,
    description:
      "Application web de gestion des prestataires et des prestations pour l'UIST.",
    presentation:
      "UIST GESTION est mon projet de fin de cycle : une plateforme institutionnelle qui digitalise la gestion des prestataires externes de l'université (nettoyage, maintenance, événementiel...). Le projet part d'une analyse complète des besoins et d'une modélisation UML (cas d'utilisation, classes, séquence), avant le développement avec Django. Il gère quatre rôles utilisateurs distincts (direction, administration, informatique, prestataires), avec un système de mise en concurrence des offres basé sur une formule de score personnalisée, un calcul automatique du statut des prestations, la gestion documentaire et un journal d'événements pour la traçabilité.",
    stack: ["Django", "Python", "Tailwind CSS", "SQLite"],
    repo: "https://github.com/Azertgc/uist_gestion",
  },

  {
    id: 2,
    name: "AVODAH",
    tag: "Marketplace de services",
    period: "2023 — 2024",
    image: avodahImg,
    description:
      "Plateforme de services domestiques à Abidjan mettant en relation clients et prestataires.",
    presentation:
      "AVODAH est une marketplace web mettant en relation des familles abidjanaises avec des prestataires de services domestiques (ménage, garde d'enfants, cuisine, lessive). Développée avec Django, elle permet aux clients de publier des demandes, aux prestataires de faire des propositions, et intègre un système de négociation et d'expiration automatique des offres. C'est le tout premier grand projet de mon parcours, et son architecture a ensuite servi de base à UIST GESTION après une transformation complète de la logique métier.",
    stack: ["Django", "Python", "MySQL", "HTML/CSS"],
    repo: "https://github.com/Azertgc/avodah_plateforme_complete",
  },

  {
    id: 3,
    name: "ClinicYave",
    tag: "Application médicale",
    period: "2025 — 2026",
    image: clinicyaveImg,
    description:
      "Application de gestion médicale construite avec Vue 3, Vite et Tailwind CSS.",
    presentation:
      "ClinicYave est un tableau de bord médical développé en Vue 3 et Tailwind CSS, pensé pour le suivi quotidien d'un cabinet : vue d'ensemble des patients vus, des rendez-vous du jour et des consultations, liste des patients récents et alertes pour les cas urgents. L'interface met l'accent sur la lisibilité rapide des informations clés pour le personnel médical.",
    stack: ["Vue 3", "Vite", "Tailwind CSS", "JavaScript"],
    repo: "https://github.com/Azertgc/ClinicYave",
  },

  {
    id: 4,
    name: "Météo App",
    tag: "Application mobile",
    period: "2025 — 2026",
    image: meteoImg,
    description:
      "Application météo Flutter permettant de rechercher une ville et d'afficher les conditions en temps réel, avec un thème visuel adaptatif.",
    presentation:
      "Application mobile Flutter connectée à l'API OpenWeather : l'utilisateur recherche une ville et obtient la température, le ressenti, l'humidité, le vent, la pression, la visibilité ainsi que les heures de lever et coucher du soleil. Le fond d'écran change dynamiquement de couleur selon la température et la condition météo (pluie, neige, orage, nuit), avec des transitions animées (fondu et glissement) à chaque nouvelle recherche.",
    stack: ["Flutter", "Dart"],
    repo: "https://github.com/Azertgc/flutter-app-meteo",
  },

  {
    id: 5,
    name: "Ionic Todo App",
    tag: "Application mobile",
    period: "2025 — 2026",
    image: todoImg,
    description:
      "Application mobile de gestion de tâches, développée avec Ionic, Angular et Capacitor sur une architecture standalone.",
    presentation:
      "Application mobile de gestion de tâches construite avec Ionic et Angular (composants standalone) puis packagée avec Capacitor. Elle permet d'ajouter, modifier et supprimer des tâches via un formulaire dédié, avec une navigation typique d'application mobile entre l'écran de liste et l'écran d'ajout/modification.",
    stack: ["Ionic", "Angular", "TypeScript", "Capacitor"],
    repo: "https://github.com/Azertgc/ionic-todo-app",
  },

  {
    id: 6,
    name: "Flask Admin",
    tag: "Panel d'administration",
    period: "2025",
    image: flaskAdminImg,
    description:
      "Interface d'administration web développée avec Flask, HTML et CSS.",
    presentation:
      "Back-office développé avec Flask pour un cabinet médical fictif : authentification, gestion des médecins, des patients et des rendez-vous, avec un tableau de bord affichant les principaux indicateurs (nombre de médecins, de patients, de rendez-vous) et le suivi des rendez-vous récents. Un système de messages flash confirme chaque action (ajout, modification, suppression) à l'utilisateur.",
    stack: ["Flask", "Python", "HTML", "CSS"],
    repo: "https://github.com/Azertgc/Projet_flask_admin",
  },
];

// Inspiré du système multi-thèmes du template : plusieurs
// palettes nommées, et un composant ThemeSwitcher qui change
// laquelle est active via un useState.
export const themes = {
  nuit: { name: "Nuit", bg: "#141B26", panel: "#1B2432", text: "#EDE7DA", accent: "#D9A441", accent2: "#4E9E97" },
  ocean: { name: "Océan", bg: "#EDF9FE", panel: "#FFFFFF", text: "#001C55", accent: "#0E6BA8", accent2: "#02b3ff" },
  foret: { name: "Forêt", bg: "#FFFFEB", panel: "#FFFFFF", text: "#003F2F", accent: "#55A630", accent2: "#7e8000" },
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