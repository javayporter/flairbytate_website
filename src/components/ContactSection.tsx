// import React from "react";

// interface ContactSectionProps {
//   phoneNumber?: string;
//   email?: string;
//   title?: string;
//   showIcons?: boolean;
//   className?: string;
// }

// const ContactSection: React.FC<ContactSectionProps> = ({
//   phoneNumber = "(678) 247-9494",
//   email = "designs@flairbytate.com",
//   title = "Contact Us",
//   showIcons = true,
//   className = "",
// }) => {
//   const formattedPhoneHref = `tel:${phoneNumber.replace(/\D/g, "")}`;
//   const emailHref = `mailto:${email}`;

//   return (
//     <section className={`contact-section ${className}`} id="contact">
//       <h2 className="contact-title">{title}</h2>

//       <div className="contact-container">
//         <a href={formattedPhoneHref} className="contact-link phone-link">
//           {showIcons && (
//             <span role="img" aria-label="phone">
//               📞
//             </span>
//           )}{" "}
//           {phoneNumber}
//         </a>

//         <a href={emailHref} className="contact-link email-link">
//           {showIcons && (
//             <span role="img" aria-label="email">
//               📧
//             </span>
//           )}{" "}
//           {email}
//         </a>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

// import React from "react";
// import { FaInstagram, FaFacebook } from "react-icons/fa";

// interface ContactSectionProps {
//   phoneNumber?: string;
//   email?: string;
//   title?: string;
//   showIcons?: boolean;
//   className?: string;
// }

// const ContactSection: React.FC<ContactSectionProps> = ({
//   phoneNumber = "(678) 247-9494",
//   email = "designs@flairbytate.com",
//   title = "Contact Us",
//   showIcons = true,
//   className = "",
// }) => {
//   const formattedPhoneHref = `tel:${phoneNumber.replace(/\D/g, "")}`;
//   const emailHref = `mailto:${email}`;

//   const socials = [
//     {
//       icon: <FaInstagram />,
//       url: "https://www.instagram.com/flair_by_tate/",
//       name: "Instagram",
//     },
//     {
//       icon: <FaFacebook />,
//       url: "https://www.facebook.com/profile.php?id=61581739874421",
//       name: "Facebook",
//     },
//   ];

//   return (
//     <section className={`contact-section ${className}`} id="contact">
//       <h2 className="contact-title">{title}</h2>

//       <div className="contact-container">
//         <a href={formattedPhoneHref} className="contact-link phone-link">
//           {showIcons && (
//             <span role="img" aria-label="phone">
//               📞
//             </span>
//           )}{" "}
//           {phoneNumber}
//         </a>

//         <a href={emailHref} className="contact-link email-link">
//           {showIcons && (
//             <span role="img" aria-label="email">
//               📧
//             </span>
//           )}{" "}
//           {email}
//         </a>

//         <div className="social-inline">
//           {socials.map((social) => (
//             <a
//               key={social.name}
//               href={social.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="contact-link social-link"
//               aria-label={social.name}
//             >
//               {showIcons && social.icon}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

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

  const socials = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/flair_by_tate/",
      name: "Instagram",
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/profile.php?id=61581739874421",
      name: "Facebook",
    },
  ];

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

        <div className="social-inline">
          {socials.map((social, index) => (
            <React.Fragment key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link social-link"
                aria-label={social.name}
              >
                {showIcons && social.icon}
              </a>
              {index < socials.length - 1 && (
                <span className="social-divider" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
