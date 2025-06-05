import React, { Component } from "react";
import "./header.css";
import logo from "../../assets/logosvg.svg";
import cart from "../../assets/cartsvg.svg";

const links = [
  { href: "#", label: "Home" },
  { href: "#", label: "Menu" },
  { href: "#", label: "Company" },
  { href: "#", label: "Login" },
];

class Header extends Component {
  render() {
    return (
      <header className="header font">
        <div className="header_left">
          <img src={logo} alt="logo" />
        </div>
        <div className="header_right">
          <nav className="nav">
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="cart">
            <img src={cart} alt="cart" className="cart__icon" />
            <span className="cart__counter">{this.props.totalQuantity}</span>
          </div>
        </div>
        <div className="extra_element"></div>
      </header>
    );
  }
}

export default Header;
