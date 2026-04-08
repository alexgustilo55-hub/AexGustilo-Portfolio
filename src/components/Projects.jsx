import SecuTrackImage from "../assets/securityapp.png";
import FilipinoRecipeImage from "../assets/cookingtips.png"
import DeliveryImage from "../assets/jd&s.png"
import CampusEventImage from "../assets/events.png"


function Projects() {
  return (
    <section id="projects" data-aos="fade-up" data-aos-once="false">
      <h2>Projects</h2>

      <div className="projects">
        <div className="project-card" data-aos="fade-right" data-aos-delay="100" data-aos-once="false">
          <img src={SecuTrackImage} alt="SecuTrack" />
          <h3>SecuTrack System</h3>
          <p>Smart security system integrating web, mobile, and Arduino platforms using REST API and WebSocket for real-time monitoring, live device connectivity, and improved overall security management.</p>
          <a href="https://github.com/alexgustilo55-hub/smart_security_app" target="_blank">View</a>
        </div>

        <div className="project-card" data-aos="fade-right" data-aos-delay="200" data-aos-once="false">
          <img src={FilipinoRecipeImage} alt="Recipes" />
          <h3>Filipino Recipes</h3>
          <p>Front-end website showcasing Filipino recipes with intuitive navigation and responsive design for all devices.</p>
          <a href="https://github.com/alexgustilo55-hub/filipino-recipes" target="_blank">View</a>
        </div>

        <div className="project-card" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
          <img src={DeliveryImage} alt="Delivery" />
          <h3>JD&S Jangle Delivery</h3>
          <p>Delivery service front-end application with modern UI and seamless user experience for placing and tracking orders.</p>
          <a href="https://github.com/alexgustilo55-hub/Jangle-Delivery-and-Services---Frontend" target="_blank">View</a>
        </div>

        <div className="project-card" data-aos="fade-right" data-aos-delay="400" data-aos-once="false">
          <img src={CampusEventImage} alt="Events" />
          <h3>Campus Event System</h3>
          <p>System for managing campus events and student appointments efficiently with easy-to-use interface.</p>
          <a href="https://github.com/alexgustilo55-hub/Campus-Events-Activity-Appointment-System-" target="_blank">View</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;