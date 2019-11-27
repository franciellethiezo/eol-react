import React from 'react';

// Css (assets/css)
import '../assets/css/login.css';

// Imagens (assets/images)
import Logo from '../assets/images/Logo Oficial.png';

function Cabecalho() {
    return (
        <header className="flex-between home-header">
            <div className="logo flex-center">
                <img src={Logo} alt="logo" />
            </div>
            <nav className="flex-center">
                <a href="#">
                    <button className="btn">Sobre nós</button>
                </a>
                <a href="#">
                    <button className="btn">Como funciona?</button>
                </a>
                <a href="duvidas.html">
                    <button className="btn">Dúvidas</button>
                </a>
                <a href="./cadastro-caixa.html">
                    <button className="btn" id="btn-cadastro">Cadastro</button>
                </a>
            </nav>
        </header>
    );
}

export default Cabecalho;