import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiFlask, SiMysql, SiArduino, SiPython } from 'react-icons/si'; 

function Skills() {
  return (
    <section id="skills" data-aos="zoom-in" data-aos-delay="100" data-aos-once="false">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {/* Front-End */}
        <div className="skill-category" data-aos="zoom-in" data-aos-delay="200" data-aos-once="false">
          <h3 className="frontend" data-aos="fade-right" data-aos-delay="100" data-aos-once="false">Front-End</h3>
          <div className="skills-grid">
            <div className="skill" data-aos="fade-right" data-aos-delay="200" data-aos-once="false"><FaHtml5 /> HTML</div>
            <div className="skill" data-aos="fade-right" data-aos-delay="300" data-aos-once="false"><FaCss3Alt /> CSS</div>
            <div className="skill" data-aos="fade-right" data-aos-delay="400" data-aos-once="false"><FaJsSquare /> JavaScript</div>
            <div className="skill" data-aos="fade-right" data-aos-delay="500" data-aos-once="false"><FaReact /> ReactJS</div>
          </div>
        </div>

        {/* Back-End */}
        <div className="skill-category" data-aos="zoom-in" data-aos-delay="300" data-aos-once="false">
          <h3 className="backend">Back-End</h3>
          <div className="skills-grid">
            <div className="skill" data-aos="fade-up" data-aos-delay="100" data-aos-once="false"><SiFlask /> Flask</div>
            <div className="skill" data-aos="fade-up" data-aos-delay="200" data-aos-once="false"><SiPython /> FastAPI</div> {/* replaced with Python icon */}
            <div className="skill" data-aos="fade-up" data-aos-delay="300" data-aos-once="false"><SiMysql /> MySQL</div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-category" data-aos="zoom-in" data-aos-delay="400" data-aos-once="false">
          <h3 className="tools">Tools</h3>
          <div className="skills-grid">
            <div className="skill" data-aos="fade-left" data-aos-delay="100" data-aos-once="false"><SiArduino /> Arduino</div>
            <div className="skill" data-aos="fade-left" data-aos-delay="200" data-aos-once="false"><FaGitAlt /> Git & GitHub</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;