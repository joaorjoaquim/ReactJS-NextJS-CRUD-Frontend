import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Img, MyNav, Ul, Li } from './styles';
import logo from '../../img/logo192.png';

function Navbar() {
    return (
        <MyNav>
            <Container>
                <NavLink to="/">
                    <Img src={logo} alt="Home" />
                </NavLink>
                <Ul>
                    <Li>
                        <NavLink to="/home" activeStyle>
                            Home
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/users" activeStyle>
                            Usuários
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/projects" activeStyle>
                            Projetos
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/tasks" activeStyle>
                            Tarefas
                        </NavLink>
                    </Li>
                </Ul>
            </Container>
        </MyNav>
    );
}

export default Navbar;
