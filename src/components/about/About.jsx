import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.png";
import CvBR from "../../assets/cv-br.pdf";
import CvEUPT from "../../assets/Europass-CV-PT.pdf";
import CvEUEN from "../../assets/Europass-CV-EN.pdf";

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
            <div className="about__cv">
              <a
                href={CvEUEN}
                download="Barbara-Luciano-CV-UE-EN.pdf"
                className="btn"
              >
                CV - UE (EN)
              </a>
              <a
                href={CvEUPT}
                download="Barbara-Luciano-CV-UE-PT.pdf"
                className="btn"
              >
                CV - UE (PT)
              </a>
              <a href={CvBR} download="Barbara-Luciano-CV-BR.pdf" className="btn">
                CV - BR
              </a>
            </div>
          </div>

          <div className="about__skills grid">
            <div className="about_skills__data">
              <div className="about_skills__titles">
                <h3 className="about_skills__name">Frontend Development</h3>
                <span className="about_skills__number">80%</span>
              </div>

              <div className="about_skills__bar">
                <span className="about_skills__percentage frontend"></span>
              </div>
            </div>

            <div className="about_skills__data">
              <div className="about_skills__titles">
                <h3 className="about_skills__name">Backend Development</h3>
                <span className="about_skills__number">70%</span>
              </div>

              <div className="about_skills__bar">
                <span className="about_skills__percentage backend"></span>
              </div>
            </div>

            <div className="about_skills__data">
              <div className="about_skills__titles">
                <h3 className="about_skills__name">Database Development</h3>
                <span className="about_skills__number">50%</span>
              </div>

              <div className="about_skills__bar">
                <span className="about_skills__percentage database"></span>
              </div>
            </div>

            <div className="about_skills__data">
              <div className="about_skills__titles">
                <h3 className="about_skills__name">Unit tests</h3>
                <span className="about_skills__number">60%</span>
              </div>

              <div className="about_skills__bar">
                <span className="about_skills__percentage unit"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
