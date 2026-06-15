import Cert1 from "../assets/certificates/CID.png";
import Cert2 from "../assets/certificates/Py_Boothcamp.jpg";

function Certificates() {
  return (
    <section id="certificates">
      <h2 className="section-title" data-aos="zoom-in">
        Certificates
      </h2>

      <div className="projects-container">

        {/* CERT 1 */}
        <div className="project-card" data-aos="zoom-in" data-aos-delay="100">

          <div className="project-image">
            <img src={Cert1} alt="CID Certificate" />
          </div>

          <div className="project-content">
            <h3>CID 2025 – Challenge Master Recognition</h3>
            <p>
              In recognition of outstanding dedication and valuable contribution
              as a Challenge Master during the CID 2025: <i>Level Up the Glitch Tower</i>,
              held on September 10, 2025 at PHINMA University of Iloilo, Rizal St., Iloilo City.
            </p>

            <div className="btn-group">
              <a
                className="certificate-links"
                href={Cert1}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* CERT 2 */}
        <div className="project-card" data-aos="zoom-in" data-aos-delay="200">

          <div className="project-image">
            <img src={Cert2} alt="Python Bootcamp Certificate" />
          </div>

          <div className="project-content">
            <h3>Python Bootcamp – Mentor Recognition</h3>
            <p>
              In grateful recognition of outstanding dedication and invaluable contribution
              as a Mentor during the Python Bootcamp held on December 10, 2025 at
              PHINMA University of Iloilo.
            </p>

            <div className="btn-group">
              <a
                className="certificate-links"
                href={Cert2}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Certificates;