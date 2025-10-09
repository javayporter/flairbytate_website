import React from "react";

const phoneNumber = "(678) 247-9494";
const email = "designs@flairbytate.com";

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <a href="tel:+16782479494" className="phone-link">
          📞 Phone: {phoneNumber}
        </a>
        <a href="mailto:designs@flairbytate.com" className="email-link">
          📧 Email: {email}
        </a>
        {/* <p>
        🌐 Follow us:
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Instagram
        </a>{" "}
        |
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Facebook
        </a>
      </p> */}
      </div>
    </section>
  );
};

export default ContactSection;
