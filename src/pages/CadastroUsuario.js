import React, { Component } from 'react';

// Componentes (components)
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';

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

                <main className="flex-center">
                    <section className="box-cad">
                        <div className="d-box-cad flex-column">
                            <h2 className="h2-cad">Cadastre-se</h2>
                            <p className="p-cad">Faça o cadastro no <span><img className="img-logo-cad" src={Logo} alt="logo" /></span></p>
                            <form action="#" className="form-box-cad flex-column">
                                <input className="input-cad" type="text" name="nome" placeholder="Nome completo" />
                                <input className="input-cad" type="text" name="e-mail" placeholder="E-mail corporativo" />
                                <input className="input-cad" type="text" name="senha" placeholder="Senha" />
                                <input className="input-cad" type="text" name="confirmação" placeholder="Confirmação de senha" />
                                <input className="input-cad" type="text" name="telefone" placeholder="Telefone" />
                                <button className="roxo btn-cad">Cadastre-se</button>
                            </form>
                            <p className="p-cad-footer">Já possui uma conta?</p>
                            <a href="" className="a-cad lnk-entrar">Entrar</a>
                        </div>
                    </section>
                </main>

                <Rodape />
            </div>
        );
    }
}

export default CadastroUsuario;