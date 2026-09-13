import { useState } from "react";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../data/portfolioData";
import Reveal from "./Reveal";
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
const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("Envoi en cours...");

  try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        description: formData.description,
    },
    {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }
   );

    setStatus("Message envoyé avec succès ! Je vous répondrai bientôt.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      description: "",
    });
  } catch (error) {
    console.error("Erreur EmailJS :", error);

    setStatus(
      "Une erreur est survenue. Veuillez réessayer ou me contacter sur WhatsApp."
    );
  }
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

          <Reveal direction="bottom" delay={0} className="contact-image">
            <div className="contact-image-placeholder">
              <img
                src={contact}
                alt="Illustration contact"
              />
            </div>
          </Reveal>

          <div className="contact-links">

            {/* WHATSAPP */}
            <Reveal direction="bottom" delay={0.15}>
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
            </Reveal>

            {/* EMAIL */}
            {email && (
              <Reveal direction="bottom" delay={0.3}>
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
              </Reveal>
            )}

          </div>

        </div>

        {/* =========================
            DROITE : FORMULAIRE
        ========================= */}

        <Reveal
          as="form"
          direction="bottom"
          delay={0.45}
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

        </Reveal>

      </div>

      {/* FOOTER
          On le laisse ici pour l'instant.
          Nous le déplacerons dans Footer.jsx à l'étape 13.
      */}



    </section>
  );
}