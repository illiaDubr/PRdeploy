import React, { useState, useRef } from "react";

const PhoneInput = () => {
    const [value, setValue] = useState("");
    const placeholder = "(__) - ___ - __-__";
    const inputRef = useRef(null);

    const formatPhone = () => {
        const digits = value.split("");
        let digitIndex = 0;
        return placeholder
            .split("")
            .map((char) => (char === "_" && digitIndex < digits.length ? digits[digitIndex++] : char))
            .join("");
    };

    const handleInputChange = (e) => {
        const input = e.target.value.replace(/\D/g, "").slice(0, 9);
        setValue(input);
    };

    const handleFocus = () => inputRef.current.focus();

    return (
        <div
            onClick={handleFocus}
            style={{
                position: "relative",
                display: "inline-block",
                width: "250px",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "text",
                backgroundColor: "#fff",
            }}
        >
            <div>
                {formatPhone()}
            </div>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={handleInputChange}
                style={{
                    display: "none",
                }}
                aria-label="Phone number input"
            />
        </div>
    );
};

export default PhoneInput;