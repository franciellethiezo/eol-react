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

                <main className="flex-center">
                    <section className="box-cad">
                        <div className="d-box flex-column">
                            <h2>Login</h2>
                            <p>
                                Faça o login no <span><img src={Logo} alt="logo" /></span>
                            </p>
                            <form action="#" className="form-box flex-column">
                                <input type="text" name="e-mail" placeholder="E-mail corporativo" />
                                <input type="text" name="senha" placeholder="Senha" />
                                <div className="remind-box flex-column">
                                    <div className="remind flex-between">
                                        <input type="checkbox" name="remind_pass" id="remind_input" /><label for="remind_pass">Lembrar de mim</label>
                                    </div>
                                    <a href="#">Esqueci minha senha</a>
                                </div>
                                <button className="roxo btn-cad" onclick=" window.location.href = '\adverts.html';">entrar</button>
                            </form>
                            <div className="rambo">
                                <div className="hr-log flex-center">
                                    <hr />
                                    <p>ou</p>
                                    <hr />
                                </div>
                                <div className="flex-column">
                                    <p>Não tem uma conta?</p>
                                    <a href="./cadastro-caixa.html" className="lnk-entrar">faça seu cadastro</a>
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