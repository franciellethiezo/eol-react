import React, { Component } from 'react';

// Componentes (components)
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';

// Css (assets/css)
import '../assets/css/login.css';
import '../assets/css/style.css';

// Imagens (assets/images)
import Logo from '../assets/img/Logo Oficial.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        //#region Métodos que a classe utiliza
        //#endregion
    }

    render() {
        return (
            <div>
                <Cabecalho />

                <main className="main-login flex-center">
                    <section className="box-cad flex-center">
                        <div className="d-box flex-column">
                            <h2 className="h2-login">Login</h2>
                            <p className="p-title-login">
                                Faça o login no <span><img className="img-logo-login" src={Logo} alt="logo" /></span>
                            </p>
                            <form action="#" className="form-box flex-column">
                                <input className="input-form-login" type="text" name="e-mail" placeholder="E-mail corporativo" />
                                <input className="input-form-login" type="text" name="senha" placeholder="Senha" />
                                <div className="remind-box flex-column">
                                    <div className="remind flex-center">
                                        <input id="remind-input" type="checkbox" name="remind-pass" />
                                        <label className="cbx" for="remind-input">
                                            <div className="flip">
                                                <div className="front"></div>
                                                <div className="back">
                                                    <svg className="svg-cbx" width="16" height="14" viewBox="0 0 16 14">
                                                        <path className="path-cbx" d="M2 8.5L6 12.5L14 1.5"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </label>
                                        <label className="lbl-remember-me">Lembrar de mim</label>
                                    </div>
                                    <a className="forgot-it-password" href="#">Esqueci minha senha</a>
                                </div>
                                <button className="roxo btn-cad">Entrar</button>
                            </form>
                            <div className="box-footer">
                                <div className="hr-log flex-center">
                                    <hr />
                                    <p className="p-box-log">ou</p>
                                    <hr />
                                </div>
                                <div className="flex-column">
                                    <p>Não tem uma conta?</p>
                                    <a href="#" className="lnk-entrar">faça seu cadastro</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Rodape />
            </div>
        );
    }
}

export default Login;