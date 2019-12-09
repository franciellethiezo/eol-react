import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import NavbarAdm from '../components/NavbarAdm';

import '../assets/css/controleUsuario.css'
import '../components/NavbarAdm';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import IconeLixeira from '../assets/img/delete-icone.png'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class ControleUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaUsuarios: [],
            nomeUsuario: '',
        }
    }

    render() {
        return (
            <div>
                <div className='pagina-controle-usuario'>
                    <NavbarAdm />
                    <div className='controle-usuario-cadastrado'>
                        <Tabs>
                            <div className="header-controle-usuario">
                                <TabList className='titulo-cadastro-usuario'>
                                    <Tab><a>Cadastrados</a></Tab>
                                    <Tab><a>Aguardando Aprovação</a></Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <MDBTable striped>
                                    <MDBTableHead>
                                        <tr>
                                            <th>E-mail</th>
                                            <th>Status</th>
                                            <th>Excluir</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <td>Maria@gmail.com</td>
                                            <td>Ativo</td>
                                            <td><a href='#'> <img className='icone-excluir-usuario' src={IconeLixeira} /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Marcos@gmail.com</td>
                                            <td>Ativo</td>
                                            <td><a href='#'> <img className='icone-excluir-usuario' src={IconeLixeira} /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Paulo@gmail.com</td>
                                            <td>Ativo</td>
                                            <td><a href='#'> <img className='icone-excluir-usuario' src={IconeLixeira} /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Andre@gmail.com</td>
                                            <td>Ativo</td>
                                            <td><a href='#'> <img className='icone-excluir-usuario' src={IconeLixeira} /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Matheus@gmail.com</td>
                                            <td>Ativo</td>
                                            <td><a href='#'> <img className='icone-excluir-usuario' src={IconeLixeira} /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Larissa@gmail.com</td>
                                            <td>Ativo</td>
                                            <td><a href='#'> <img className='icone-excluir-usuario' src={IconeLixeira} /></a></td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </TabPanel>
                            <div className='controle-usuario-aguardando'>
                                <TabPanel>
                                    <MDBTable striped>
                                        <MDBTableHead>
                                            <tr>
                                                <th>E-mail</th>
                                                <th>Status</th>
                                                <th>Confirmação</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>Pedro@gmail.com</td>
                                                <td>Inativo</td>
                                                <MDBBtn color="grey" size="sm">Aceitar</MDBBtn>
                                            </tr>
                                            <tr>
                                                <td>Mariana@gmail.com</td>
                                                <td>Inativo</td>
                                                <MDBBtn color="grey" size="sm">Aceitar</MDBBtn>
                                            </tr>
                                            <tr>
                                                <td>Leonardo@gmail.com</td>
                                                <td>Inativo</td>
                                                <MDBBtn color="grey" size="sm">Aceitar</MDBBtn>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>

        )
    }
}


export default ControleUsuario;