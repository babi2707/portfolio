import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Bárbara Luciano Araújo</h1>
        <span className="home__education">I'm a fullstack developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn" id="button">Hire Me</a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
