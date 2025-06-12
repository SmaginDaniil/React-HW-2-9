import React from "react";
import "./button.css";


const Button = ({ children, type = "btn__primary", onClick }) => {
    return (
        <button className={`btn ${type}`} onClick={onClick}>
            {children}
        </button>
    );
};


export default Button;