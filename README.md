# Mon Portfolio

Un portfolio React (Vite) inspiré du template "Software Developer Master Portfolio",
en version allégée et pédagogique.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:5173

## Structure

- `src/data/portfolioData.js` — **le fichier à modifier** pour mettre tes vraies infos
  (nom, réseaux, compétences, projets, thèmes de couleur).
- `src/components/` — un composant par section (Hero, Skills, Projects, Contact...).
- `src/App.jsx` — assemble les sections et gère le thème actif avec `useState`.

## Prochaines étapes pour continuer à apprendre

1. Ajoute un 4ᵉ thème dans `themes` (data/portfolioData.js) et regarde-le apparaître
   automatiquement dans le sélecteur — tu ne touches à aucun composant.
2. Ajoute un champ `link` à un projet dans `projects` et affiche-le comme un bouton
   dans `ProjectCard.jsx`.
3. Essaie de faire disparaître le header au scroll vers le bas avec `useEffect` +
   un `scroll` event listener.
