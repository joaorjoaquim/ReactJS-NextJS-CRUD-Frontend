import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Img, MyNav, Ul, Li, DropDownButton } from './styles';
import logo from '../../img/logo192.png';

function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <MyNav>
            <Container>
                <NavLink to="/">
                    <Img src={logo} alt="Home" />
                </NavLink>
                <Ul extendNavBar={extendNavbar}>
                    <Li>
                        <NavLink to="/home">Home</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/users">Usuários</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/projects">Projetos</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/tasks">Tarefas</NavLink>
                    </Li>
                </Ul>
                <DropDownButton
                    onClick={() => {
                        setExtendNavbar(!extendNavbar);
                    }}
                >
                    {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                </DropDownButton>
            </Container>
        </MyNav>
    );
}

export default Navbar;
