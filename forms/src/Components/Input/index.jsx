import React from "react";
import { InputContainer, Label } from "./styles";

const Input = ({ Text, placeholder, type, value, onChange }) => {
    return (
        <InputContainer>
            <Label htmlFor={Text}>{Text}</Label>
            <input
                name={Text}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    );
};

export { Input };
