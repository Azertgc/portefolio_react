import { socialLinks } from "../data/portfolioData";
import "./Contact.css";
import contact from "../assets/images/contact.png";

export default function Contact() {
  const email = socialLinks.find((link) => link.name === "Email");

  return (
    <section id="contact" className="container contact">

      <p className="section-label">CONTACT</p>

      <h2 className="contact-title">
        Un projet à construire ? Écrivons-le ensemble.
      </h2>

      <div className="contact-main">

        {/* GAUCHE : IMAGE + CONTACTS */}
        <div className="contact-left">

          {/* IMAGE */}
          <div className="contact-image">
            <div className="contact-image-placeholder">
              <img
                src={contact}
                alt="Illustration contact"
              />
            </div>
          </div>

          {/* WHATSAPP + EMAIL SOUS L'IMAGE */}
          <div className="contact-links">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/2250501075694"
              target="_blank"
              rel="noreferrer"
              className="contact-glass"
            >
              <span className="contact-icon">☏</span>

              <div>
                <strong>WhatsApp</strong>
                <small>Discutons directement</small>
              </div>
            </a>

            {/* EMAIL */}
            {email && (
              <a
                href={email.url}
                className="contact-glass"
              >
                <span className="contact-icon">✉</span>

                <div>
                  <strong>Email</strong>

                  <small>
                    {email.url.replace("mailto:", "")}
                  </small>
                </div>
              </a>
            )}

          </div>

        </div>


        {/* DROITE : FORMULAIRE */}
        <form className="contact-form">

          <div className="form-group">
            <label htmlFor="name">Votre nom</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Entrez votre nom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email de contact</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemple@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Numéro de téléphone</label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+225 07 00 00 00 00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Description du projet
            </label>

            <textarea
              id="description"
              name="description"
              rows="6"
              placeholder="Décrivez brièvement votre projet..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-submit"
          >
            Envoyer
          </button>

        </form>

      </div>
           
      <footer className="footer"> <hr />
  <div className="footer-content">

    <div className="footer-brand">
      <span className="footer-logo">GT</span>
      <div>
        <strong>Gonty</strong>
        <p>Développeur Web Junior</p>
      </div>
    </div>

    <div className="footer-links">
      <a href="#projets">Projets</a>
      <a href="#profil">Profil</a>
      <a href="#contact">Contact</a>
    </div>

    <p className="footer-copy">
      © {new Date().getFullYear()} Gonty. Tous droits réservés.
    </p>

  </div>
</footer>

    </section>
  );
}