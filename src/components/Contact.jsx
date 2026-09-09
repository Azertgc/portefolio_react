import { socialLinks } from "../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const email = socialLinks.find((link) => link.name === "Email");

  return (
    <section id="contact" className="container contact">
      <p className="section-label">CONTACT</p>
      <h2 className="contact-title">
        Un projet à construire ? Écrivons-le ensemble.
      </h2>
      {email && (
        <a href={email.url} className="contact-email">
          {email.url.replace("mailto:", "")}
        </a>
      )}
      <footer className="footer">UIST — L3 TCSI · Abidjan</footer>
    </section>
  );
}
