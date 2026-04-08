import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

  // Initialize AOS
  useEffect(() => {
  AOS.init({
    duration: 1000,
    offset: 50,
    once: false, // <--- repeat animation on scroll
  });
  AOS.refresh(); // refresh para ma-detect lahat ng elements
}, []);


  // Toggle dark class on body
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  

  return (
    <div className={dark ? "dark" : ""}>
      <button className="toggle" onClick={() => setDark(!dark)}>🌙</button>

      <Header />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;