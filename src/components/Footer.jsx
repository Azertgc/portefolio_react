import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* IDENTITÉ */}
        <div className="footer-brand">

          <span className="footer-logo">
            GT
          </span>

          <div>
            <strong>Gonty</strong>

            <p>
              Développeur Web Junior
            </p>
          </div>

        </div>

        {/* LIENS */}
        <div className="footer-links">

          <a href="#projets">
            Projets
          </a>

          <a href="#profil">
            Profil
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        {/* COPYRIGHT */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Gonty.
          Tous droits réservés.
        </p>

      </div>

    </footer>
  );
}