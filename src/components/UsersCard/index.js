import React from 'react';
import {
    AddButton,
    ListContainer,
    UsersContainer,
    MyTable,
    IconButton,
    IconDiv,
} from './styles';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const UsersCard = () => {
    return (
        <>
            <UsersContainer>
                <AddButton>+</AddButton>
                <ListContainer>
                    <MyTable>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Token</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>101201212</td>
                                <td>Pedro</td>
                                <td>pedro@gmasa.comas</td>
                                <td>12sasaS32FfFFFew33</td>
                                <td>
                                    <IconDiv>
                                        <IconButton>
                                            <MdEdit size={20} />
                                        </IconButton>
                                        <IconButton>
                                            <MdDeleteForever size={20} />
                                        </IconButton>
                                    </IconDiv>
                                </td>
                            </tr>
                            <tr>
                                <td>14145</td>
                                <td>Gui</td>
                                <td>gui@gmasa.as</td>
                                <td>12saasasaS32FfFFFew33</td>
                                <td>Editar & Excluir</td>
                            </tr>
                        </tbody>
                    </MyTable>
                </ListContainer>
            </UsersContainer>
        </>
    );
};

export default UsersCard;
