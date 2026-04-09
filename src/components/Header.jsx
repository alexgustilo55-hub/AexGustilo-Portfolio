import { useEffect, useState } from "react";

function Header() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Alex";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <header >
      <p className="welcome" data-aos="fade-right" data-aos-delay="100" data-aos-once="false">Welcome to my Portfolio</p>
      <h1>{text}</h1>
      <p className="profession" data-aos="fade-left" data-aos-delay="200" data-aos-once="false">
        IT Student | Web & Back-end Developer | Problem Solver | Continuous Learner
      </p>

      {/* Floating social icons */}
      <div className="social-icons" data-aos="zoom-in" data-aos-delay="300" data-aos-once="false">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;