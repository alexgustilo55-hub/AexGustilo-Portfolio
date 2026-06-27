import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SecuTrackImage from "../assets/securityapp.png";
import FilipinoRecipeImage from "../assets/cookingtips.png";
import DeliveryImage from "../assets/jd&s.png";
import CampusEventImage from "../assets/events.png";

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title" data-aos="zoom-in" data-aos-delay="100" data-aos-once="false">Projects</h2>

      <div className="projects-container">

        {/* PROJECT 1 */}
        <div className="project-card" data-aos="zoom-in" data-aos-delay="100" data-aos-once="false">
          <div className="project-image">
            <img src={SecuTrackImage} alt="SecuTrack" />
            <span className="type-badge fullstack">Full Stack</span>
          </div>

          <div className="project-content">
            <h3>SecuTrack System</h3>
            <p>Smart security system with real-time monitoring.</p>

            <div className="tech-stack">
              <span data-aos="fade-right" data-aos-delay="100" data-aos-once="false">HTML</span>
              <span data-aos="fade-right" data-aos-delay="200" data-aos-once="false">CSS</span>
              <span data-aos="fade-right" data-aos-delay="300" data-aos-once="false">Bootstrap</span>
              <span data-aos="fade-right" data-aos-delay="400" data-aos-once="false">React Native</span>
              <span data-aos="fade-right" data-aos-delay="500" data-aos-once="false">C++</span>
              <span data-aos="fade-right" data-aos-delay="600" data-aos-once="false">Flask</span>
              <span data-aos="fade-right" data-aos-delay="700" data-aos-once="false">MySQL</span>
            </div>

            <div className="btn-group">
              <a
                href="https://github.com/alexgustilo55-hub/smart_security_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" /> Code
              </a>

              <a href="#" target="_blank" className="live">
                <FaExternalLinkAlt className="icon" /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card" data-aos="zoom-in" data-aos-delay="200" data-aos-once="false">
          <div className="project-image">
            <img src={FilipinoRecipeImage} alt="Recipes" />
            <span className="type-badge frontend">Frontend</span>
          </div>

          <div className="project-content">
            <h3>Filipino Recipes</h3>
            <p>Responsive recipe website with clean UI.</p>

            <div className="tech-stack">
              <span data-aos="fade-up" data-aos-delay="100" data-aos-once="false">HTML</span>
              <span data-aos="fade-up" data-aos-delay="200" data-aos-once="false">CSS</span>
              <span data-aos="fade-up" data-aos-delay="300" data-aos-once="false">JavaScript</span>
            </div>

            <div className="btn-group">
              <a
                href="https://github.com/alexgustilo55-hub/filipino-recipes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" /> Code
              </a>

              <a href="https://filipino-recipes.netlify.app/" target="_blank" className="live">
                <FaExternalLinkAlt className="icon" /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card" data-aos="zoom-in" data-aos-delay="300" data-aos-once="false">
          <div className="project-image">
            <img src={DeliveryImage} alt="Delivery" />
            <span className="type-badge frontend">Frontend</span>
          </div>

          <div className="project-content">
            <h3>JD&S Delivery</h3>
            <p>Modern delivery system UI.</p>

            <div className="tech-stack">
              <span data-aos="fade-left" data-aos-delay="100" data-aos-once="false">HTML</span>
              <span data-aos="fade-left" data-aos-delay="200" data-aos-once="false">CSS</span>
              <span data-aos="fade-left" data-aos-delay="300" data-aos-once="false">Bootstrap</span>
            </div>

            <div className="btn-group">
              <a
                href="https://github.com/alexgustilo55-hub/Jangle-Delivery-and-Services---Frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" /> Code
              </a>

              <a href="#" target="_blank" className="live">
                <FaExternalLinkAlt className="icon" /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="project-card" data-aos="zoom-in" data-aos-delay="400" data-aos-once="false">
          <div className="project-image">
            <img src={CampusEventImage} alt="Events" />
            <span className="type-badge fullstack">Full Stack</span>
          </div>

          <div className="project-content">
            <h3>Campus Event System</h3>
            <p>Event management system for students.</p>

            <div className="tech-stack">
              <span data-aos="fade-right" data-aos-delay="100" data-aos-once="false">HTML</span>
              <span data-aos="fade-right" data-aos-delay="200" data-aos-once="false">CSS</span>
              <span data-aos="fade-right" data-aos-delay="300" data-aos-once="false">JS</span>
              <span data-aos="fade-right" data-aos-delay="400" data-aos-once="false">Bootstrap</span>
              <span data-aos="fade-right" data-aos-delay="500" data-aos-once="false">Flask</span>
              <span data-aos="fade-right" data-aos-delay="600" data-aos-once="false">MySQL</span>
            </div>

            <div className="btn-group">
              <a
                href="https://github.com/alexgustilo55-hub/Campus-Events-Activity-Appointment-System-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" /> Code
              </a>

              <a href="#" target="_blank" className="live">
                <FaExternalLinkAlt className="icon" /> Live Demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;