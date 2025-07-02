import React from 'react';
import "./input.css"

const Input = React.forwardRef((props, ref) => {
    const {
        size = "medium",
        className = "",
        placeholder,
        title,
        ...rest
    } = props;

    const inputClass = `custom-input amount--${size}${className ? " " + className : ""}`;

    return (
        <input
            ref={ref}
            className={inputClass}
            placeholder={placeholder || "Enter value"}
            title={title || placeholder || "Input field"}
            {...rest}
        />
    );
});

export default Input;