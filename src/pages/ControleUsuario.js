import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import NavbarAdm from '../components/NavbarAdm';

import '../assets/css/controleUsuario.css';
import '../components/NavbarAdm';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import IconeLixeira from '../assets/img/delete-icone.png'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Axios from 'axios';

class ControleUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaUsuario: [],
            listaAtivos: [],
            emailUsuario: '',
            nomeUsuario: '',
            statusUsuario: '',
            usuarioBuscado: {}
        }
        this.buscarUsuario = this.buscarUsuario.bind(this);
    }

    buscarUsuario() {
        fetch('http://localhost:5000/api/usuario/tolist/')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaUsuario: data }))
            .catch((erro) => console.log(erro));


        console.log(this.state.listaUsuario)
    }




    SetarAtivo = (id) => {
        this.buscarUsuarioPorId(id);
        fetch('http://localhost:5000/api/usuario/update' + id, {
            method: 'PUT',
            body: JSON.stringify({
                idUsuario: this.state.usuarioBuscado.idUsuario,
                nomeUsuario: this.state.usuarioBuscado.nomeUsuario,
                telefoneUsuario: this.state.usuarioBuscado.telefoneUsuario,
                emailUsuario: this.state.usuarioBuscado.emailUsuario,
                statusUsuario: false,
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error))


        // usuario.statusUsuario !== usuario.statusUsuario
    }



    buscarUsuarioPorId(id) {
        fetch('http://localhost:5000/api/usuario/search/' + id)
            .then(resposta => resposta.json())
            .then(data => this.setState({ usuarioBuscado: data }))
            .catch((erro) => console.log(erro));
    }


    // cadastrarUsuario(event) {
    //     event.preventDefault(); // Evito comportamentos padrão da página
    //     fetch('http://localhost:5000/api/usuario',
    //         {
    //             method: 'POST', // Declara o método que será utilizado
    //             body: JSON.stringify({ nomeUsuario: this.state.nomeUsuario }),
    //             headers: {
    //                 'Content-type': 'application/json'
    //             }
    //         })
    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 console.log('Categoria Cadastrada!')
    //             }
    //         })
    //         .catch(erro => console.log(erro))
    //         .then(this.buscarUsuario) // Atualiza na tabela a categoria registrada
    // }
    // excluirUsuario(id){
    //     let id =2;
    //     fetch('http://localhost:5000/api/usuario/search/' + id,)
    //     .then(resposta => resposta.json())
    //     .then(data => this.setState({idUsuario: data.idUsuario}))
    //     .catch((erro) => console.log(erro));
    // }

    componentDidMount() {
        this.buscarUsuario();

        console.log(this.state.listaAtivos)
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
                                        {
                                            this.state.listaUsuario.map(usuario => {
                                                return (
                                                    usuario.statusUsuario == true ? (
                                                        <div>
                                                            <tr key={usuario.idUsuario}>
                                                                <td>{usuario.emailUsuario}</td>
                                                                <td>{usuario.statusUsuario}</td>
                                                                <td><a href='#'> <img className='icone-excluir-usuario' src={IconeLixeira} /></a></td>
                                                            </tr>
                                                        </div>
                                                    )
                                                        : (
                                                            <div></div>
                                                        )
                                                )
                                            })}
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
                                            {
                                                this.state.listaUsuario.map(usuario => {
                                                    return (
                                                        usuario.statusUsuario == false ? (
                                                            <div>
                                                                <tr key={usuario.idUsuario}>
                                                                    <td>{usuario.emailUsuario}</td>
                                                                    <td>Inativo</td>
                                                                    <td><a href='#'> <img className='icone-excluir-usuario' src={IconeLixeira} /></a></td>
                                                                </tr>
                                                                <MDBBtn onClick={this.SetarAtivo(usuario.idUsuario)} color="grey" size="sm">Ativar</MDBBtn>
                                                            </div>
                                                        )
                                                            : (
                                                                <div></div>
                                                            )
                                                    )
                                                })}
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