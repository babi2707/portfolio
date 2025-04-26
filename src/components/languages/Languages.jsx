import React from "react";
import "./languages.css";

const Languages = () => {
  return (
    <section className="languages container section" id="languages">
      <h2 className="section__title">Programming languages</h2>

      <div className="languages__container grid">
        <div className="languages__data grid">
          <div className="languages__skills grid">
            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">HTML</h3>

                <div className="skills__bar">
                  <span className="skills__percentage html"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">CSS</h3>

                <div className="skills__bar">
                  <span className="skills__percentage css"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">SCSS</h3>

                <div className="skills__bar">
                  <span className="skills__percentage css"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">React</h3>

                <div className="skills__bar">
                  <span className="skills__percentage react"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">Angular</h3>

                <div className="skills__bar">
                  <span className="skills__percentage angular"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">WPF</h3>

                <div className="skills__bar">
                  <span className="skills__percentage wpf"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">Flutter</h3>

                <div className="skills__bar">
                  <span className="skills__percentage flutter"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">Kotlin</h3>

                <div className="skills__bar">
                  <span className="skills__percentage kotlin"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">C / C++ / C#</h3>

                <div className="skills__bar">
                  <span className="skills__percentage c"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">Java</h3>

                <div className="skills__bar">
                  <span className="skills__percentage java"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">JavaScript</h3>

                <div className="skills__bar">
                  <span className="skills__percentage js"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">TypeScript</h3>

                <div className="skills__bar">
                  <span className="skills__percentage ts"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">.NET</h3>

                <div className="skills__bar">
                  <span className="skills__percentage dot"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">SQL</h3>

                <div className="skills__bar">
                  <span className="skills__percentage sql"></span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__content">
                <h3 className="skills__name">PostgreSQL</h3>

                <div className="skills__bar">
                  <span className="skills__percentage psql"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
