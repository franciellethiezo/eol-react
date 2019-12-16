import React, { Component } from 'react';
import NavbarUser from '../components/NavbarUser';
import "../assets/css/style.css";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Anuncio from './Anuncio';



// import Dell from "../assets/img/dell1.jpg"
// import MacFront from "../assets/img/mac-user-inte.jpg";
// import MacLate from "../assets/img/mac02.jpg";
// import MacLateE from "../assets/img/mac03.jpg";

class Produto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProduto: [],
            nomeProduto: '',
            precoAnuncio: '',
            modeloProduto: '',
            nomeFabricanteB: '',
            imagem1: '',
            imagem2: '',
            idProduto: '',
            idFabricante: '',
            idImagem: '',
            idAnuncio: '',
            idInteresse: '',
            listaUsuario: []

        }
            // this.cadastraInteresse = this.cadastraInteresse.bind(this)
        this.dividirURL = this.dividirURL.bind(this)
        // this.cadastraIdAnuncio = this.cadastraIdAnuncio.bind(this)  
    }

    teste(){
        console.log(this.idAnuncio)
    }

    async  componentDidMount() {
        await this.dividirURL()
        await this.buscarProduto()
        await this.buscarUsuario()
        this.buscarFabricante()
        this.buscarImagem()
        this.teste()
        // this.cadastraIdAnuncio()

        // console.log(this.nomeProduto)
    }

    buscarProduto() {
        let id = 1;
        fetch('http://localhost:5000/api/anuncio/search/'+id)
            .then(resposta => resposta.json())
            .then(data => {
                // console.log(data.fkIdProdutoNavigation.fkIdFabricante)
                this.setState({
                    nomeProduto: data.fkIdProdutoNavigation.nomeProduto,
                    precoAnuncio: data.precoAnuncio,
                    estadoConservacao: data.fkIdConservacaoNavigation.estadoConservacao,
                    idFabricante: data.fkIdProdutoNavigation.fkIdFabricante,
                    idAnuncio: data.idAnuncio
                })
                this.setState({ loading: false });
            })
            .catch(error => {
                { }
                this.setState({ loading: false })
            })

    }
    buscarFabricante() {
        setTimeout(() => {
            // let idf = this.state.idFabricante
            fetch('https://localhost:5001/api/fabricante/search/' + this.state.idFabricante)
                .then(resposta => resposta.json())
                .then(data => {
                    // console.log(data)
                    this.setState({
                        nomeFabricante: data.nomeFabricante
                    })
                    this.setState({ loading: false });
                }).catch(error => {
                    { }
                    this.setState({ loading: false })
                })
        }, 1000);
    }
    buscarImagem() {
        setTimeout(() => {
            let img = this.state.idImagem
            fetch('https://localhost:5001/api/imagem/search/' + img)
                .then(resposta => resposta.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                    })
                    this.setState({ loading: false });
                }).catch(error => {
                    { }
                    this.setState({ loading: false })
                })
        }, 1000);
    }
    dividirURL() {
        var url = window.location.href
        var id = url.split('=')[1]
        this.setState({ idProduto: id })
    }

    Anuncio = () => {
        console.log(this.state.idAnuncio
                    ,this.state.idFabricante
                    ,this.state.idImagem
                    ,this.state.idInteresse
                    ,this.state.idProduto
                    ,this.state.imagem1
                    ,this.state.imagem2
                    ,this.state.listaProduto
                    ,this.state.modeloProduto
                    ,this.state.nomeFabricanteB
                    ,this.state.nomeProduto
                    ,this.state.precoAnuncio)
    }

buscarUsuario(){
    localStorage.getItem('usuario-eol')

}

    
    // cadastraIdAnuncio() {


    //     fetch('https://localhost:5001/api/interesse/insert', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             dataInteresse: this.state.idInteresse.dataInteresse,
    //             fkIdUsuario: this.state.idInteresse.idUsuario,
    //             fkIdAnuncio: this.state.idInteresse.idAnuncio,
                
    //         }),
    //         headers: {
    //             'Accept': 'application/json',
    //             'content-type': 'application/json',
    //             // 'authorization': 'Bearer ' + localStorage.getItem('autenticarlogin')
    //         }
    //     })
    //         .then(resposta => {
    //             if (resposta === 200) {
    //                 console.log('Cadastro concluído com sucesso')
    //             }
    //             else {
    //                 console.log( this.state.idAnuncio)  
    //             }
    //         })
    //         .catch(error => console.log(error))
    // }
    // Aqui é o metodo de post de interesse do usuário 

    // cadastraInteresse(event) {
    //     event.preventDefault(); //Evito comportamento padões da pg

    //     fetch('https://localhost:5001/api/interesse/tolist',
    //         {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 dataInteresse: this.state.dataInteresse,

    //             }),
    //             headers: {
    //                 "Content-type": "application/json"
    //             }
    //         })
    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 console.log('Interesse Cadastrado!');
    //             }
    //         })
    //         .catch(erro => console.log(erro))
    //         .then(this.buscarInteresse)
    // }

    render() {
        console.log(localStorage.getItem('usuario-eol'))
        return (
            <div>
                {/* <NavbarUser/> */}
                <body class="web-app">
                    <NavbarUser/>
                    <section class="app-page" id="app-page-produto">
                        
                        <main class="main-produto" id="main-produto">
                            <div class="sup flex-around">
                                <div class="img-box img-box-produto flex-center flex-column">
                                    <img src={this.state.imagem1} alt="" />
                                    <div class="thumb-nav flex-between">
                                        <a href="#" /><img src={this.state.imagem2} width="100" alt="" />
                                        {/* <a href="#" /><img src={MacLate} width="100" alt="" />
                                        <a href="#" /><img src={MacLateE} width="100" alt="" /> */}
                                    </div>
                                </div>
                                <div class="infos-box flex-center">
                                    <div class="handle">

                                        <h2>{this.state.nomeProduto}</h2>
                                        <h2>R${this.state.precoAnuncio},00</h2>
                                        <div class="filters flex-around filters-produto">
                                            <div class="filter">
                                                <h3>Marca</h3>
                                                <div class="show-box flex-center">{this.state.nomeFabricante}</div>
                                            </div>
                                            <div class="filter">
                                                <h3>Condição</h3>
                                                <div class="show-box flex-center">
                                                    <h3>{this.state.estadoConservacao}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="interest-box flex-center">
                                            <button class="interest" onClick={this.Anuncio}> <i class="fas fa-heart flex-center"></i> Tenho Interesse</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tecnical-infos">
                                <div class="description">
                                    <h3>Descrição</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem similique sit eum,
                                        earum et consectetur consequatur inventore minus veniam laborum accusantium! Vel quos debitis
                                        quasi nostrum animi consequatur minima.
                                    </p>
                                </div>

                            </div>
                        </main>
                    </section>

                </body>
            </div>
        )
    }
}

export default Produto;
