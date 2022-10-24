import React from 'react';
import { CustomButton } from './styles';

function Button({ type, text, onClick }) {
    return (
        <CustomButton type={type} text={text} onClick={onClick}>
            {text}
        </CustomButton>
    );
}

export default Button;
