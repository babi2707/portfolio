import React from "react";
import "./interview.css"; // Crie este CSS seguindo o estilo do contact.css

const Interview = () => {
  return (
    <section className="interview container section" id="interview">
      <h2 className="section__title">Book an Interview</h2>

      <div className="interview__container grid">
        <div className="interview__info">
          <h3 className="interview__title">Let’s Talk!</h3>
          <p className="interview__details">
            Schedule a 60-minute call with me through Calendly.
          </p>
          <a
            href="https://calendly.com/barbara-araujo-1299141-sga/60min"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>

        <div className="interview__calendar">
          <iframe
            src="https://calendly.com/barbara-araujo-1299141-sga/60min?hide_event_type_details=1&hide_gdpr_banner=1"
            width="100%"
            height="600"
            frameBorder="0"
            title="Calendly Widget"
            style={{ minWidth: "320px", borderRadius: "8px" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Interview;