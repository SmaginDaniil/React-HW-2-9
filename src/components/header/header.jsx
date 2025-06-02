import React from "react";
import "./header.css";
import logo from "../../assets/logosvg.svg";


const links = [
  { href: "#", label: "Home" },
  { href: "#", label: "Menu" },
  { href: "#", label: "Company" },
  { href: "#", label: "Login" },
];

const Header = () => {
  return (
    <header className="header font">
      <div className="header_left">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_right">
        <nav className="nav">
          {links.map((link) => (
            <a href={link.href}>{link.label}</a>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default Header;
