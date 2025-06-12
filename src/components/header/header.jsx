import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logosvg.svg";
import cart from "../../assets/cartsvg.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "#", label: "Company" },
  { to: "#", label: "Login" },
];

const Header = ({ totalQuantity }) => {
  return (
    <header className="header font">
      <div className="extra_element"></div>
      <div className="header_left">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_right">
        <nav className="nav">
          {links.map((link) =>
            link.to.startsWith("/") ? (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.to}>
                {link.label}
              </a>
            )
          )}
        </nav>
        <div className="cart">
          <img src={cart} alt="cart" className="cart__icon" />
          <span className="cart__counter">{totalQuantity}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
