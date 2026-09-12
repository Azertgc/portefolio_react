import { useState } from "react";
import { socialLinks } from "../data/portfolioData";
import "./Contact.css";
import contact from "../assets/images/contact.png";

export default function Contact() {
  const email = socialLinks.find((link) => link.name === "Email");

  // Les données saisies dans le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  // Message affiché après l'envoi
  const [status, setStatus] = useState("");

  // Cette fonction est appelée à chaque modification d'un champ
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Cette fonction est appelée lorsqu'on clique sur "Envoyer"
  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Merci pour votre message ! Je vous répondrai bientôt.");

    // On vide le formulaire
    setFormData({
      name: "",
      email: "",
      phone: "",
      description: "",
    });
  };

  return (
    <section id="contact" className="container contact">

      <p className="section-label">CONTACT</p>

      <h2 className="contact-title">
        Un projet à construire ? Écrivons-le ensemble.
      </h2>

      <div className="contact-main">

        {/* =========================
            GAUCHE : IMAGE + CONTACTS
        ========================= */}

        <div className="contact-left">

          <div className="contact-image">
            <div className="contact-image-placeholder">
              <img
                src={contact}
                alt="Illustration contact"
              />
            </div>
          </div>

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

        {/* =========================
            DROITE : FORMULAIRE
        ========================= */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          {/* NOM */}
          <div className="form-group">

            <label htmlFor="name">
              Votre nom
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Entrez votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          {/* EMAIL */}
          <div className="form-group">

            <label htmlFor="email">
              Email de contact
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemple@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          {/* TELEPHONE */}
          <div className="form-group">

            <label htmlFor="phone">
              Numéro de téléphone
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+225 07 00 00 00 00"
              value={formData.phone}
              onChange={handleChange}
            />

          </div>

          {/* DESCRIPTION */}
          <div className="form-group">

            <label htmlFor="description">
              Description du projet
            </label>

            <textarea
              id="description"
              name="description"
              rows="6"
              placeholder="Décrivez brièvement votre projet..."
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>

          </div>

          {/* MESSAGE DE SUCCÈS */}
          {status && (
            <p className="contact-success">
              {status}
            </p>
          )}

          {/* BOUTON */}
          <button
            type="submit"
            className="contact-submit"
          >
            Envoyer
          </button>

        </form>

      </div>

      {/* FOOTER
          On le laisse ici pour l'instant.
          Nous le déplacerons dans Footer.jsx à l'étape 13.
      */}



    </section>
  );
}