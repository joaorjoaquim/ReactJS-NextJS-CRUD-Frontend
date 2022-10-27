import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
    background-color: #3c369c;
    display: flex;
    flex-direction: column;
    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const NavbarLink = styled(NavLink)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;

    margin: 2vw;
    @media (max-width: 700px) {
        display: none;
    }

    &:hover {
        color: red;
        background-color: rgba(129, 129, 215, 1);
        border-radius: 5px;
        padding: 5px;
        transition: all 0.3s ease;
    }
    &.selected {
        background-color: rgba(129, 129, 215, 1);
        border-radius: 5px;
        padding: 5px;
    }
`;

export const NavbarLinkExtended = styled(NavLink)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 2vh;

    color: #fff;
    text-decoration: none;
    &:hover {
        color: red;
        background-color: rgba(129, 129, 215, 1);
        border-radius: 5px;
        padding: 5px;
        transition: all 0.3s ease;
    }
    a {
        background-color: rgba(129, 129, 215, 1);
        border-radius: 5px;
        padding: 5px;
    }
`;

export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 700px) {
        display: none;
    }
`;
