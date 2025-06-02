import React from "react";
import "./button.css";

const Button = ({ children, type = "btn__primary" }) => {
  return (
    <button className={`btn ${type}`}>{children}</button> 
  );
};

export default Button;
