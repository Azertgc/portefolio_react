import { journey } from "../data/portfolioData";
import "./Journey.css";

export default function Journey() {
  return (
    <section className="journey container">
      <div className="section-heading">
        <p className="section-label">MON PARCOURS</p>

        <h2>Mon évolution</h2>

        <p>
          Les principales étapes de mon parcours dans le développement
          informatique.
        </p>
      </div>

      <div className="journey-timeline">
        {journey.map((item, index) => (
          <div className="journey-item" key={index}>
            <div className="journey-year">
              {item.year}
            </div>

            <div className="journey-dot"></div>

            <div className="journey-content">
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}