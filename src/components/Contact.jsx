import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" data-aos="fade-up" data-aos-once="false">
      <h2>Contact Me</h2>

      <p className="contact-description">
        Feel free to connect with me through the platforms below.
      </p>

      <div className="contact">
        <a
          href="https://github.com/alexgustilo55-hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://web.facebook.com/alex.gustilo.10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook /> Facebook
        </a>

        <a href="https://mail.google.com/mail/u/0/#sent">
          <FaEnvelope /> Email
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>

      <div className="availability">
        <span>🟢 Open for collaboration and learning opportunities</span>
      </div>
    </section>
  );
}

export default Contact;