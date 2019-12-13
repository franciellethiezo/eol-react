import React, { Component } from 'react';
import Axios from 'axios';

// Services
import { parseJwt } from '../services/Auth';

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// CSS
import '../assets/css/login.css';
import '../assets/css/style.css';

// Images
import Logo from '../assets/img/Logo Oficial.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailUsuario: '',
            senhaUsuario: '',
            erroMensagem: '',
            isLoading: false
        }
    }

    EfetuaLogin(event) {
        event.preventDefault();
        this.setState({ erroMensagem: '' })
        this.setState({ isLoading: true });

        Axios.post('https://localhost:5001/api/login', {
            emailUsuario: this.state.emailUsuario,
            senhaUsuario: this.state.senhaUsuario
        })
            .then(data => {
                if (data.status === 200) {
                    localStorage.setItem('usuario-eol', data.data.token)
                    this.setState({ isLoading: false });

                    console.log(parseJwt().Role)
                    // window.location.href ="/"
                    if (parseJwt().Role === 'Administrador') {
                        this.props.history.push('/perfil');
                    } else {
                        this.props.history.push('/');
                    }
                }
            })
            .catch(erro => {
                this.setState({ erroMensagem: 'E-mail ou senha inválidos!' })
                this.setState({ isLoading: false });
            });

    }

    AtualizaStateCampo(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <Header />
                <main className="login-main flex-center">
                    <section className="login-card-box flex-center">
                        <div className="login-div-box flex-column">
                            <h2 className="login-title-box">Login</h2>
                            <p className="login-desc-box">
                                Faça o login no <span><img className="login-img-logo" src={Logo} alt="Logo End of Life for Us" /></span>
                            </p>
                            <form className="login-form-box flex-column" onSubmit={this.EfetuaLogin.bind(this)}>
                                <input className="login-input-form" type="text" name="emailUsuario" placeholder="E-mail" value={this.state.emailUsuario} onChange={this.AtualizaStateCampo.bind(this)} />
                                <input className="login-input-form" type="password" name="senhaUsuario" placeholder="Senha" value={this.state.senhaUsuario} onChange={this.AtualizaStateCampo.bind(this)} />
                                <div className="login-remind-box flex-column">
                                    <div className="login-remind flex-center">
                                        <input id="input-remind" type="checkbox" name="remind-pass" />
                                        <label className="login-cbx" for="input-remind" >
                                            <div className="login-flip">
                                                <div className="login-front"></div>
                                                <div className="login-back">
                                                    <svg className="login-svg-cbx" width="16" height="14" viewBox="0 0 16 14">
                                                        <path className="login-path-cbx" d="M2 8.5L6 12.5L14 1.5"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </label>
                                        <label className="login-lbl-remember">Lembrar de mim</label>
                                    </div>
                                    <a className="login-forgotit-password">Esqueci minha senha</a>
                                </div>
                                <div>
                                    <p className="login-error-p">{this.state.erroMensagem}</p>
                                    <button type="submit" className="login-color-btn login-btn-card">Entrar</button>
                                </div>
                            </form>
                            <div className="login-footer-box">
                                <div className="login-hr flex-center">
                                    <hr />
                                    <p className="login-p-box">ou</p>
                                    <hr />
                                </div>
                                <div className="login-other flex-column">
                                    <p>Não tem uma conta?</p>
                                    <a className="login-link-register">faça seu cadastro</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}