import { FaGithub, FaFacebook, FaEnvelope, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT INFO */}
        <div className="footer-box">
          <h3>Alex Gustilo</h3>
          <p>BSIT Student | Aspiring Web Developer</p>
          <p className="footer-bio">
            Passionate about building modern web applications and continuously learning new technologies.
          </p>

          <div className="availability">
            🟢 Available for collaboration
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="footer-box">
          <h4>Connect</h4>

          <div className="social-icons">
            <a href="https://github.com/alexgustilo55-hub" target="_blank">
              <FaGithub />
            </a>

            <a href="https://web.facebook.com/alex.gustilo.10" target="_blank">
              <FaFacebook />
            </a>

            <a href="mailto:yourgmail@gmail.com">
              <FaEnvelope />
            </a>

            <a href="#" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* BACK TO TOP */}
        <div className="footer-box">
          <h4>Navigation</h4>

          <button onClick={scrollTop} className="back-to-top">
            <FaArrowUp /> Back to Top
          </button>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="footer-bottom">
        <p>Built with React • Designed by Alex</p>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;