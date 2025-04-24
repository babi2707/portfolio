import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              My name is Bárbara Luciano Araújo, I am 23 years old and I am a
              fullstack developer from Belo Horizonte, Brazil. I have an
              interesting experience in Front and Back end development.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
                <div className="skills__titles">
                    <h3 className="skills__name">Frontend Development</h3>
                    <span className="skills__number">80%</span>
                </div>

                <div className="skills__bar">
                    <span className="skills__percentage frontend"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__titles">
                    <h3 className="skills__name">Backend Development</h3>
                    <span className="skills__number">70%</span>
                </div>

                <div className="skills__bar">
                    <span className="skills__percentage backend"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__titles">
                    <h3 className="skills__name">Database Development</h3>
                    <span className="skills__number">50%</span>
                </div>

                <div className="skills__bar">
                    <span className="skills__percentage database"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__titles">
                    <h3 className="skills__name">Unit tests</h3>
                    <span className="skills__number">60%</span>
                </div>

                <div className="skills__bar">
                    <span className="skills__percentage unit"></span>
                </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
