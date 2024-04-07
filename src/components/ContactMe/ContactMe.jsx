import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

export const ContactMe = () => {

  return (
    <section className="contact-container" id="contact">
      <h5>Contact Me</h5>

      <div className="contact-content">

        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="contact@alexortega.dev"
          />
          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/alexdevzen"
          />
        </div>

        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
