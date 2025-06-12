import React from "react";
import logo from "../../assets/logosvg.svg";
import InstagramIcon from "../../assets/Instagram.svg";
import TwitterIcon from "../../assets/Twitter.svg";
import YoutubeIcon from "../../assets/Youtube.svg";
import './footer.css';

function Footer() {
    const externalLinks = [
        { label: "Style Guide", url: "https://www.google.com/" },
        { label: "Changelog", url: "https://www.google.com/" },
        { label: "Licence", url: "https://www.google.com/" },
        { label: "Webflow University", url: "https://www.google.com/" },
    ];

    return (
        <footer className="footer">
            <div className="container_up">
                <div className="footer_up_left">
                    <img src={logo} className="footer_logo" alt="Logo" />
                    <div className="takeaway_text">
                        Takeaway & Delivery template for small-medium businesses.
                    </div>
                </div>
                <div className="footer_up_right">
                    <div className="footer_column common_font">
                        <p className="footer__column--uppercase">COMPANY</p>
                        {["Home", "Order", "FAQ", "Contact"].map((item) => (
                            <a href="#" key={item}>{item}</a>
                        ))}
                    </div>
                    <div className="footer_column common_font">
                        <p className="footer__column--uppercase">TEMPLATE</p>
                        {externalLinks.map(link => (
                            <a href={link.url} key={link.label} target="_blank" rel="noopener noreferrer">{link.label}</a>
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
                        Built by <a href="#" className="highlight">Flowbase</a> · Powered by <a href="#" className="highlight">WebFlow</a>
                    </div>
                </div>
                <div className="footer_down_right">
                    {[InstagramIcon, TwitterIcon, YoutubeIcon].map((icon, idx) => (
                        <img src={icon} alt="Social Icon" className="footer_icon" key={idx} />
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default React.memo(Footer);