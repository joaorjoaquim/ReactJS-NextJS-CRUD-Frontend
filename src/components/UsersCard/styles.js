import styled from 'styled-components';

export const UsersContainer = styled.div`
    align-items: center;
    width: 100%;
    height: calc(100% - 80px);
    flex-direction: column;
    display: flex;
`;

export const AddButton = styled.button`
    color: #fff;
    font-size: 20px;
    align-self: flex-end;
    margin: 20px;
    font-family: 'Poppins', sans-serif;
    border: 30px;
    background-color: #7274cb;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;

    &:hover {
        background-color: #5b61b9;
    }
`;

export const ListContainer = styled.div`
    align-items: center;
    width: 90%;
    height: calc(100% - 80px);
    background-color: #fff;
    display: flex;
    border-radius: 8px;
    padding: 20px;
`;
