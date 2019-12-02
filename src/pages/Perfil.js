import React, { Component } from 'react';

// Componentes (components)
import NavBarUser from '../components/NavbarUser';

// Css (assets/css)
import '../assets/css/perfil.css';
import '../assets/css/style.css';

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        //#region Métodos que a classe utiliza
        //#endregion
    }

    render() {
        return (
            <section className="web-app">
                <NavBarUser />
                
                {/* <section className="app-page" id="app-page-produto">
                    <nav class="mobile-nav flex-center">
                        <div class="wrap container flex-between">
                            <div class="hamburger-menu" onclick="toggleAside()">
                                <div class="line line-0"></div>
                                <div class="line line-1"></div>
                                <div class="line"></div>
                            </div>
                            <img class="logo" src="./imgs/logo.png" alt="" />
                            <img class="profile" src="./imgs/profile-square.png" alt="" />
                        </div>
                    </nav>


                    <main>
                        <header class="titulo_perfil flex-center" id="header-perfil">
                            <h1 class="flex-align-center">
                                <span><i class="far fa-user"></i></span>Perfil
                        </h1>
                            <div class="cont-img flex-space-evenly">
                                <div class="image-profile background-center">
                                    <img src="./img/Logo Oficial.png" alt="" />
                                </div>
                            </div>
                        </header>
                        <section class="up-info flex-justify-center">
                            <section class="info-dados flex-space-evenly">
                                <div class="up-left flex-column">
                                    <div class="nome flex-direction-column">
                                        <label for="">Nome</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div class="tel flex-direction-column">
                                        <label for="">Telefone</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                </div>
                                <div class="up-right flex-column">
                                    <div class="email flex-direction-column">
                                        <label for="">Email</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div class="notif flex-direction-column">
                                        <div class="bb flex-align-center">
                                            <label class="switch">
                                                <input type="checkbox" />
                                                <span class="slider round"></span>
                                            </label>
                                            <p>Notificação A</p>
                                        </div>
                                        <div class="bb flex-align-center">
                                            <label class="switch">
                                                <input type="checkbox" />
                                                <span class="slider round"></span>
                                            </label>
                                            <p>Notificação B</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <div class="save-config flex-justify-align">
                            <input type="button" value="Salvar Configurações" />
                        </div>
                        <hr />
                        <h2 id="change_pass">Alterar Senha</h2>
                        <section class="password flex-justify-center">
                            <section class="pass-data flex-space-evenly">
                                <div class="new-pass flex-direction-column">
                                    <label for="">Nova Senha</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div class="confirm-pass flex-direction-column">
                                    <label for="">Confirme a Senha</label>
                                    <input type="text" name="" id="" />
                                </div>
                            </section>
                        </section>
                        <div class="save-config flex-justify-align">
                            <input type="button" value="Alterar Senha" />
                        </div>
                    </main>
                </section> */}
            </section>
        );
    }
}

export default Perfil;