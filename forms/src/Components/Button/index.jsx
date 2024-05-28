import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ Text, onClick, disabled }) => {
    return (
        <ButtonContainer onClick={onClick} disabled={disabled}>
            {Text}
        </ButtonContainer>
    );
};

export { Button };
