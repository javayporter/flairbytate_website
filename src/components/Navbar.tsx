import React from "react";
import logo from "../assets/image0.png";
import "../styles/global.css";

// Types
interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logoSrc?: string;
  links?: NavLink[];
}

// Default navbar links
const defaultLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC<NavbarProps> = ({
  logoSrc = logo,
  links = defaultLinks,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logoSrc} alt="Logo" className="navbar-logo" />

        <ul className="navbar-links">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
