import AlexImg from "../assets/alex.jpg";


function About() {
  return (
    <section id="about" data-aos="zoom-in" data-aos-delay="100" data-aos-once="false">
      <h2>About Me</h2>

      <div className="about-card" data-aos="zoom-in" data-aos-delay="200" data-aos-once="false">
        {/* Profile Image */}
        <img
          src={AlexImg}
          className="profile-image"
        />

        {/* Story / Journey */}
        <div className="about-part developer" data-aos="zoom-in" data-aos-delay="300" data-aos-once="false">
          <span className="label">💻 My Journey</span>
          <p>
            Hi, I'm <strong>Alex</strong>, an IT student passionate about technology.
            My journey started small, exploring how apps can solve everyday problems.
            I experimented with basic websites and gradually moved to building full-stack applications.
          </p>
        </div>

        <div className="about-part problem-solver" data-aos="zoom-in" data-aos-delay="400" data-aos-once="false">
          <span className="label">🛠 Story Continued</span>
          <p>
            Along the way, I faced challenges that pushed me to learn backend development, database management, and efficient coding practices.
            Each project taught me to break down complex problems and create user-friendly solutions.
          </p>
        </div>

        {/* What I Bring */}
        <div className="about-part contributor" data-aos="zoom-in" data-aos-delay="500" data-aos-once="false">
          <span className="label">🌟 What I Bring</span>
          <p>
            I bring a combination of <strong>problem-solving skills</strong>, <strong>adaptability</strong>, and a drive for continuous learning.
            My goal is to contribute to projects that enhance user experience, streamline processes, and make technology more accessible.
          </p>
        </div>

        <div className="about-part explorer" data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
          <span className="label">🚀 Explorer</span>
          <p>
            Outside of coding, I enjoy exploring new technologies, experimenting with small projects, and challenging myself to learn something new every day.
            This curiosity keeps me updated and ready to innovate in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;