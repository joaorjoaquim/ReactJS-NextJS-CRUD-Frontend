import styled from 'styled-components';

export const MyNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3c369c;
    padding: 0.5em;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    max-height: 10vh;
    max-width: 90vw;
    margin: 5vw auto;
    transition: all 1.3s ease-in;
    position: fixed;

    @media (min-width: 700px) {
        margin: 3vw auto;
    }
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

export const Header = styled.div`
    display: flex;
    justify-content: center;
`;

export const ExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    max-height: 100vh;

    background-color: #3c369c;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const Img = styled.img`
    height: 70px;
    width: 70px;
    margin-left: 10px;
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;

    @media (max-width: 700px) {
        display: none;
    }
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

    @media (max-width: 700px) {
    }
`;

export const DropDownButton = styled.button`
    width: 70px;
    height: 50px;
    margin-right: 50px;
    background: none;
    border: none;
    color: #fff;
    font-size: 40px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;
