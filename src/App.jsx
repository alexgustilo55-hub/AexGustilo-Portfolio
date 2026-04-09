import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  // Initialize AOS
  useEffect(() => {
  AOS.init({
    duration: 1000,
    offset: 50,
    once: false, // <--- repeat animation on scroll
  });
  AOS.refresh(); 
}, []);


  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;