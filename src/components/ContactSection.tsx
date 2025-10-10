import React from "react";

interface ContactSectionProps {
  phoneNumber?: string;
  email?: string;
  title?: string;
  showIcons?: boolean;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  phoneNumber = "(678) 247-9494",
  email = "designs@flairbytate.com",
  title = "Contact Us",
  showIcons = true,
  className = "",
}) => {
  const formattedPhoneHref = `tel:${phoneNumber.replace(/\D/g, "")}`;
  const emailHref = `mailto:${email}`;

  return (
    <section className={`contact-section ${className}`} id="contact">
      <h2 className="contact-title">{title}</h2>

      <div className="contact-container">
        <a href={formattedPhoneHref} className="contact-link phone-link">
          {showIcons && (
            <span role="img" aria-label="phone">
              📞
            </span>
          )}{" "}
          {phoneNumber}
        </a>

        <a href={emailHref} className="contact-link email-link">
          {showIcons && (
            <span role="img" aria-label="email">
              📧
            </span>
          )}{" "}
          {email}
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
