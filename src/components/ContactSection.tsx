import React from "react";

const phoneNumber = "(678) 247-9494";
const email = "designs@flairbytate.com";

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>📞 Phone: {phoneNumber}</p>
      <p>📧 Email: {email}</p>
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
    </section>
  );
};

export default ContactSection;
