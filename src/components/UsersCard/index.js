import React from 'react';
import { AddButton, ListContainer, UsersContainer } from './styles';

const UsersCard = () => {
    return (
        <>
            <UsersContainer>
                <AddButton>+</AddButton>
                <ListContainer>UsersCard</ListContainer>
            </UsersContainer>
        </>
    );
};

export default UsersCard;
