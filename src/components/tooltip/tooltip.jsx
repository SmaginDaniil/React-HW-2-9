import React from "react";
import "./tooltip.css";

function Tooltip({ text, children, as: Tag = "span" }) {
    return (
        <Tag className="tooltip">
            {children}
            <span className="tooltipText">{text}</span>
        </Tag>
    );
}

export default React.memo(Tooltip);