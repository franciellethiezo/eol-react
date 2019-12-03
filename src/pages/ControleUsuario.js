import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import '../assets/css/controleUsuario.css'
import '../components/NavbarAdm';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class ControleUsuario extends Component {

    render() {
        return (
            <div>
                <div class="header-controle-usuario">
                    <a href="#">Cadastrados</a>
                    <a href="#">Aguardando Aprovação</a>
                </div>
                <div className='controle-usuario-cadastrado'>
                    
                <MDBTable striped>
                    <MDBTableHead>
                        <tr>
                            <th>E-mail</th>
                            <th>Status</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>Maria@gmail.com</td>
                            <td>Ativo</td>
                        </tr>
                        <tr>
                            <td>Marcos@gmail.com</td>
                            <td>Ativo</td>
                        </tr>
                        <tr>
                            <td>Paulo@gmail.com</td>
                            <td>Ativo</td>
                        </tr>
                        <tr>
                            <td>Andre@gmail.com</td>
                            <td>Ativo</td>
                        </tr>
                        <tr>
                            <td>Matheus@gmail.com</td>
                            <td>Ativo</td>
                        </tr>
                        <tr>
                            <td>Lucas@gmail.com</td>
                            <td>Ativo</td>
                        </tr>
                        <tr>
                            <td>Larissa@gmail.com</td>
                            <td>Ativo</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
                </div>

                <div className='controle-usuario-aguardando'> 
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
                            <td>Maria@gmail.com</td>
                            <td>Inativo</td>
                            <MDBBtn color="grey" size="sm">Aceitar</MDBBtn>
                        </tr>
                        <tr>
                            <td>Marcos@gmail.com</td>
                            <td>Inativo</td>
                            <MDBBtn color="grey" size="sm">Aceitar</MDBBtn>
                        </tr>
                        <tr>
                            <td>Paulo@gmail.com</td>
                            <td>Inativo</td>
                            <MDBBtn color="grey" size="sm">Aceitar</MDBBtn>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
                </div>
            </div>
        )
    }
}

export default ControleUsuario;