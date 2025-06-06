import React from "react";
import "./button.css";

function Button({ children, type = "btn__primary", onClick }) {
    const className = `btn ${type}`;
    return (
        <button className={className} onClick={onClick} type="button">
            {children}
        </button>
    );
}

export default React.memo(Button);