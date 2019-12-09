import React, { Component } from 'react';

// Componentes (components)
import Cabecalho from '../components/Header';
import Rodape from '../components/Footer';

// Css (assets/css)
import '../assets/css/cadastro-usuario.css';
import '../assets/css/style.css';

// Imagens (assets/images)
import Logo from '../assets/img/Logo Oficial.png';

class CadastroUsuario extends Component {
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

                <main className="register-user-main flex-center">
                    <section className="register-card-box">
                        <div className="register-div-box flex-column">
                            <h2 className="register-h2">Cadastre-se</h2>
                            <p className="register-p">Faça o cadastro no <span><img className="register-img-logo img-logo-cad" src={Logo} alt="logo" /></span></p>
                            <form action="#" className="register-form-box flex-column">
                                <input className="register-input" type="text" name="nome" placeholder="Nome completo" />
                                <input className="register-input" type="text" name="e-mail" placeholder="E-mail corporativo" />
                                <input className="register-input" type="text" name="senha" placeholder="Senha" />
                                <input className="register-input" type="text" name="confirmação" placeholder="Confirmação de senha" />
                                <input className="register-input" type="text" name="telefone" placeholder="Telefone" />
                                <button className="register-color register-btn">Cadastre-se</button>
                            </form>
                            <p className="register-p-footer">Já possui uma conta?</p>
                            <a href="#" className="register-a-login register-link-login">Entrar</a>
                        </div>
                    </section>
                </main>

                <Rodape />
            </div>
        );
    }
}

export default CadastroUsuario;