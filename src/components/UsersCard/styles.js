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
    font-size: 25px;
    align-self: flex-end;
    margin-top: 20px;
    margin-right: 65px;
    margin-bottom: 20px;
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
    align-items: baseline;
    justify-content: space-between;
    width: 90%;
    height: calc(100% - 80px);
    background-color: #fff;
    display: flex;
    border-radius: 8px;
    padding: 20px;
    flex-direction: column;
    overflow-x: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const MyTable = styled.table`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;

    thead {
        width: 100%;
        justify-content: space-evenly;
    }

    tr {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }

    th {
        padding: 5px 10px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    tbody {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
    }

    td {
        display: flex;
        justify-content: space-evenly;
        padding: 5px 10px;
        width: 100%;
    }
`;
