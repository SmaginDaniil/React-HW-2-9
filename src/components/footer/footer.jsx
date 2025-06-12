import React, { Component } from "react";
import logo from "../../assets/logosvg.svg";
import Instagram from "../../assets/Instagram.svg";
import Twitter from "../../assets/Twitter.svg";
import Youtube from "../../assets/Youtube.svg";
import './footer.css';

class Footer extends Component {
    render() {
        const googleLink = "https://www.google.com/";
        const templateLinks = [
            { href: googleLink, label: "Style Guide" },
            { href: googleLink, label: "Changelog" },
            { href: googleLink, label: "Licence" },
            { href: googleLink, label: "Webflow University" }
        ];

        return (
            <footer className="footer">
                <div className="container_up">
                    <div className="footer_up_left">
                        <div className="takeaway_text">
                            Takeaway & Delivery template for small-medium businesses.
                        </div>
                        <img src={logo} className="footer_logo" alt="Logo" />
                    </div>
                    <div className="footer_up_right">
                        <div className="footer_column common_font">
                            <p className="footer__column--uppercase">COMPANY</p>
                            <a href="#">Home</a>
                            <a href="#">Order</a>
                            <a href="#">FAQ</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="footer_column common_font">
                            <p className="footer__column--uppercase">TEMPLATE</p>
                            {templateLinks.map(link => (
                                <a href={link.href} key={link.label}>{link.label}</a>
                            ))}
                        </div>
                        <div className="footer_column common_font">
                            <p className="footer__column--uppercase">FLOWBASE</p>
                            <a href="#">More Cloneables</a>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="container_down">
                    <div className="footer_down_left">
                        <div className="font">
                            Powered by <a href="#" className="highlight">WebFlow</a> · Built by <a href="#" className="highlight">Flowbase</a>
                        </div>
                    </div>
                    <div className="footer_down_right">
                        {[Instagram, Twitter, Youtube].map((icon, idx) => (
                            <img src={icon} alt={["Instagram", "Twitter", "YouTube"][idx]} className="footer_icon" key={idx} />
                        ))}
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;