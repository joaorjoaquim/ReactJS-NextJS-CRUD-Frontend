import userEvent from '@testing-library/user-event';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log('login auth', { email, password });
        setUser({ id: '123', email });
    };
    const logout = () => {
        console.log('logout');
    };
    return (
        <AuthContext.Provider
            value={{ authenticated: !!userEvent, user, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
