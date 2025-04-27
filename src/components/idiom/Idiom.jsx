import React from "react";
import "./idiom.css";
import Certificate from "../../assets/english_certificate.pdf";

const Idiom = () => {
  return (
    <section className="idiom container section" id="idiom">
      <h2 className="section__title">Languages</h2>

      <div className="idiom__container grid">
        <div className="idiom__data grid">
          <table className="idiom__table">
            <thead>
              <tr>
                <th>Language</th>
                <th>Speaking</th>
                <th>Writing</th>
                <th>Listening</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Portuguese</td>
                <td>Native</td>
                <td>Native</td>
                <td>Native</td>
              </tr>
              <tr>
                <td>English</td>
                <td>Intermediate</td>
                <td>Advanced</td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td>Spanish</td>
                <td>Beginner</td>
                <td>Intermediate</td>
                <td>Intermediate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <a href={Certificate} download="Barbara-Luciano-English-Certificate.pdf" className="btn certificate">
        English Certificate
      </a>
    </section>
  );
};

export default Idiom;
