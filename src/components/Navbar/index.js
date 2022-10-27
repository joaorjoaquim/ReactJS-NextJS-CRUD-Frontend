import React, { useState } from 'react';
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
} from './styles';
import LogoImg from '../../img/logo192.png';

function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/home"> Home</NavbarLink>
                        <NavbarLink to="/users">Usuários</NavbarLink>
                        <NavbarLink to="/projects">Projetos</NavbarLink>
                        <NavbarLink to="/tasks">Tarefas</NavbarLink>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo src={LogoImg}></Logo>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/users">
                        Usuários
                    </NavbarLinkExtended>
                    <NavbarLinkExtended to="/projects">
                        Projetos
                    </NavbarLinkExtended>
                    <NavbarLinkExtended to="/tasks">Tarefas</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}

export default Navbar;
