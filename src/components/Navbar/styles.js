import styled from 'styled-components';

export const MyNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3c369c;
    padding: 0.5em;
    border-radius: 10px;
    width: 100%;
    max-width: 95vw;
    height: 100%;
    max-height: 10vh;
    margin: 10px auto;
    transition: all 1.3s ease-in;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
    font-size: 20px;
    width: 100%;
    max-width: 1200px;
`;

export const Img = styled.img`
    height: 70px;
    width: 70px;
    margin-left: 10px;
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    align-items: flex-end;
`;

export const Li = styled.li`
    margin-right: 2em;

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            color: red;
            background-color: rgba(129, 129, 215, 1);
            border-radius: 5px;
            padding: 5px;
            transition: all 0.3s ease;
        }
        &.active {
            background-color: rgba(129, 129, 215, 1);
            border-radius: 5px;
            padding: 5px;
        }
    }
`;
