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
    <header>
      <p className="welcome">Welcome to my Portfolio</p>
      <h1>{text}</h1>
      <p className="profession">
        IT Student | Web Developer | Back-end Developer | Problem Solver | Continuous Learner
      </p>
    </header>
  );
}

export default Header;