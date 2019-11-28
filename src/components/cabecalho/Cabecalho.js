import React from 'react';

function Cabecalho() {
    return (
        <header class="flex-between home-header">
            <div class="logo flex-center">
                <img src="./imgs/Logo Oficial.png" alt="logo" />
            </div>
            <nav class="flex-center">
                <a href="#"><button class="btn">Sobre nós</button></a>
                <a href="#"><button class="btn">Como funciona?</button></a>
                <a href="duvidas.html"><button class="btn">Dúvidas</button></a>
                <a href="./cadastro-caixa.html"><button class="btn" id="btn-cadastro">Cadastro</button></a>
            </nav>
        </header>
    );
}

export default Cabecalho;