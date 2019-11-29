import React from 'react';

// Css (assets/css)
import '../assets/css/cabecalho.css';
import '../assets/css/style.css';

// Imagens (assets/images)
import Logo from '../assets/img/Logo Oficial.png';

function Cabecalho() {
    return (
        <header className="header-home flex-between">
            <div className="tw-logo flex-center">
                <img className="img-logo" src={Logo} alt="logo" />
            </div>
            <nav className="nav-header flex-center">
                <a className="nav-header-a" href="#">
                    <button className="btn">Sobre nós</button>
                </a>
                <a className="nav-header-a" href="#">
                    <button className="btn">Como funciona?</button>
                </a>
                <a className="nav-header-a" href="#">
                    <button className="btn">Dúvidas</button>
                </a>
                <a className="nav-header-a" href="#">
                    <button className="btn" id="btn-cadastro">Cadastro</button>
                </a>
            </nav>
        </header>
    );
}

export default Cabecalho;