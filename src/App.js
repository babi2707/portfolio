import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Languages from "./components/languages/Languages";
import Idiom from "./components/idiom/Idiom";
import Interview from "./components/interview/Interview";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <main className={`main ${toggle ? "menu-open" : "menu-closed"}`}>
        <Home />
        <About />
        <Services />
        <Languages />
        <Resume />
        <Idiom />
        <Portfolio />
        <Interview />
        <Contact />
      </main>
    </>
  );
};

export default App;
