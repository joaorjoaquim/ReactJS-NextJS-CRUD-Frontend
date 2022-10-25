import styled from 'styled-components';

export const MyNav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #3c369c;
    padding: 0.5em;
    border-radius: 10px;
    width: 100%;
    max-width: 95vw;
    height: 100%;
    max-height: 10vh;
    margin: 10px auto;
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
    height: 80px;
    width: 80px;
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
`;

export const Li = styled.li`
    margin-right: 1em;

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            color: red;
        }
        &.active {
            color: green;
        }
    }
`;
