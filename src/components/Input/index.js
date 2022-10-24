import React from 'react';
import { CustomInput } from './styles';

function Input({ name, placeholder, onChange, type }) {
    return (
        <CustomInput
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
        />
    );
}

export default Input;
