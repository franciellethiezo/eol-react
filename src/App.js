import React from 'react';

import './assets/css/style.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape'; 
import ImagemBanner from '../src/assets/img/Imagem banner.png';



function App() {
    return (
        <div className="App">
            <Cabecalho />
            <main class="main-home flex-center">
                <section class="home flex-center"> 
                    <img className="Imagem-banner.png" src={ImagemBanner} />
                    <div class="flex-column entrar">
                        <div class="text">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quos, temporibus! Consequuntur nesciunt laboriosam a voluptatum, at provident
                                iste reprehenderit, sed soluta dolores illo recusandae omnis ex alias! Quaerat, adipisci aut!
                    </p>
                        </div>
                        <a href="./login-caixa.html"><button class="btn btn-entrar purple">Entrar</button></a>
                    </div>
                </section>
            </main>
            <Rodape />

        </div>
    );
}

export default App;
