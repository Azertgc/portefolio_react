import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats container">
      <div className="stat-card">
        <span className="stat-number">L3</span>
        <span className="stat-label">Niveau d'études</span>
      </div>

      <div className="stat-card">
        <span className="stat-number">6+</span>
        <span className="stat-label">Projets réalisés</span>
      </div>

      <div className="stat-card">
        <span className="stat-number">10+</span>
        <span className="stat-label">Technologies</span>
      </div>

      <div className="stat-card">
        <span className="stat-number">3+</span>
        <span className="stat-label">Années de pratique</span>
      </div>
    </section>
  );
}