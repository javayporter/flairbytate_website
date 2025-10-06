import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      {/* <p>📞 Phone: (123) 456-7890</p> */}
      <p>📧 Email: designs@luxdesign.com</p>
      <p>
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
      </p>
    </section>
  );
};

export default ContactSection;
