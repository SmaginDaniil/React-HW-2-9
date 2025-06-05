import React, { Component } from "react";
import "./button.css";

function Button({ onClick, children, variant = "btn__primary" }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;