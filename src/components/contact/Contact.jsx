import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_md1oj2s', 'template_zpmken5', form.current, 'zKt-aJV-7PrB1XyZa')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong. Try again.");
      });
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get in Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Contact me</h3>
          <p className="contact__details">Send me an email.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="text"
                name="subject"
                className="contact__form-input"
                placeholder="Insert your subject"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                className="contact__form-input"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
