import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "../styles/global.css";

const SocialSidebar: React.FC = () => {
  const socials = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/flair_by_tate?igsh=MW5zaHNsMXJjeWFuZA%3D%3D",
      name: "Instagram",
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/profile.php?id=61581739874421",
      name: "Facebook",
    },
  ];

  return (
    <div className="social-sidebar">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
