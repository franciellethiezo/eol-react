import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBBtn } from 'mdbreact';
import NavbarAdm from '../components/NavbarAdm';

import '../components/NavbarAdm';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../assets/css/interesses.css';

import IconeData from '../assets/img/icone-calendario.svg';
import IconeMail from '../assets/img/icone-mail.svg';
import IconeCheck from '../assets/img/icone-check.svg';

import ImagemUsuario from '../assets/img/profile-small.jpg';

class Interesse extends Component {
    render() {
        return (
            <div>
                <div className='pagina-interesse'>
                    <NavbarAdm/>
                    <div className='pagina-interesse-conteudo'>

                        <div class="titulo-interesse-h2">
                            <h2>Interessados</h2>
                        </div>
                        <MDBTable striped>
                            <MDBTableBody>
                                <tr className='tabela-interesse-usuario'>
                                    <td class="flex-around interesse-nome-e-email">
                                        <img class="interesse-imagem-perfil"
                                            src={ImagemUsuario} alt="Imagem de um usuario" />
                                            <td>
                                                <h3 class="interesse-nome-usuario">João Alves</h3>
                                            </td>
                                            <td>
                                                <h3 class="interesse-email-usuario">joão.alves123@gmail.com</h3>
                                            </td>
                                    </td>
                                    <td>
                                        <div class="flex-around">
                                            <div class="icones-lista-interesse-box flex-column">
                                                <img className='icones-interesse-size' src={IconeData} />
                                                <h3>01/10/2019</h3>
                                            </div>
                                            <div class="icones-lista-interesse-box flex-column">
                                                <a href='#'> <img className='icones-interesse-size' src={IconeMail} /> </a>
                                                <h3>Entrar em contato</h3>
                                            </div>
                                            <div class="icones-lista-interesse-box flex-column">
                                                <a href='#'> <img className='icones-interesse-size' src={IconeCheck} /></a>
                                                <h3>Finalizar</h3>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='tabela-interesse-usuario'>
                                    <td class="flex-around interesse-nome-e-email">
                                        <img class="interesse-imagem-perfil"
                                            src={ImagemUsuario} alt="Imagem de um usuario" />
                                            <td>
                                                <h3 class="interesse-nome-usuario">Matheus Pereira</h3>
                                            </td>
                                            <td>
                                                <h3 class="interesse-email-usuario">matheus.123@gmail.com</h3>
                                            </td>
                                    </td>
                                    <td>
                                        <div class="flex-around">
                                            <div class="icones-lista-interesse-box flex-column">
                                                <img className='icones-interesse-size' src={IconeData} />
                                                <h3>02/10/2019</h3>
                                            </div>
                                            <div class="icones-lista-interesse-box flex-column">
                                                <a href='#'> <img className='icones-interesse-size' src={IconeMail} /> </a>
                                                <h3>Entrar em contato</h3>
                                            </div>
                                            <div class="icones-lista-interesse-box flex-column">
                                                <a href='#'> <img className='icones-interesse-size' src={IconeCheck} /></a>
                                                <h3>Finalizar</h3>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='tabela-interesse-usuario'>
                                    <td class="flex-around interesse-nome-e-email">
                                        <img class="interesse-imagem-perfil"
                                            src={ImagemUsuario} alt="Imagem de um usuario" />
                                        <td>
                                            <h3 class="interesse-nome-usuario">Lucas silva</h3>
                                        </td>
                                        <td>
                                            <h3 class="interesse-email-usuario">lucas.silva123@gmail.com</h3>
                                        </td>
                                    </td>
                                    <td>
                                        <div class="flex-around">
                                            <div class="icones-lista-interesse-box flex-column">
                                                <img className='icones-interesse-size' src={IconeData} />
                                                <h3>03/10/2019</h3>
                                            </div>
                                            <div class="icones-lista-interesse-box flex-column">
                                                <a href='#'> <img className='icones-interesse-size' src={IconeMail} /> </a>
                                                <h3>Entrar em contato</h3>
                                            </div>
                                            <div class="icones-lista-interesse-box flex-column">
                                                <a href='#'> <img className='icones-interesse-size' src={IconeCheck} /></a>
                                                <h3>Finalizar</h3>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>

                    </div>
                </div>
            </div>
        )
    }
}
export default Interesse;