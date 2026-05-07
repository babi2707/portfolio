import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.png";
import CvBR from "../../assets/Barbara_Professional_CV_PT_BR_2026.pdf";
import CvEUPT from "../../assets/Barbara_Professional_CV_PT_2026.pdf";
import CvEUEN from "../../assets/Barbara_Professional_CV_EN_2026.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              My name is Bárbara Luciano Araújo, I am 24 years old and I am a
              fullstack developer from Brazil living in Portugal. I have an
              interesting experience in Front and Back End development.
            </p>
            <div className="about__cv">
              <a
                href={CvEUEN}
                download="Barbara_Professional_CV_EN_2026.pdf"
                className="btn"
              >
                CV - EN
              </a>
              <a
                href={CvEUPT}
                download="Barbara_Professional_CV_PT_2026.pdf"
                className="btn"
              >
                CV - PT
              </a>
              <a href={CvBR} download="Barbara_Professional_CV_PT_BR_2026.pdf" className="btn">
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
