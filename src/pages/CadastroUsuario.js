import React, { Component } from 'react';

// Componentes (components)
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';

// Css (assets/css)
import '../assets/css/login.css';
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

                <main className="flex-center">
                    <section className="box-cad">
                        <div className="d-box flex-column">
                            <h2>Cadastre-se</h2>
                            <p>Faça o cadastro no <span><img className="img-logo-cad" src={Logo} alt="logo" /></span></p>
                            <form action="#" className="form-box flex-column">
                                <input type="text" name="nome" placeholder="Nome completo" />
                                <input type="text" name="e-mail" placeholder="E-mail corporativo" />
                                <input type="text" name="senha" placeholder="Senha" />
                                <input type="text" name="confirmação" placeholder="Confirmação de senha" />
                                <input type="text" name="telefone" placeholder="Telefone" />
                                <button className="roxo btn-cad">Cadastre-se</button>
                            </form>
                            <p>já possui uma conta?</p>
                            <a href="./login-caixa.html" className="a-cad lnk-entrar">entrar</a>
                        </div>
                    </section>
                </main>

                <Rodape />
            </div>
        );
    }
}

export default CadastroUsuario;