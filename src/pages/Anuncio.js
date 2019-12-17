import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBIcon, MDBBadge } from "mdbreact";
import '../assets/css/anuncio.css';
import NavbarUser from '../components/NavbarUser';
import {Link} from 'react-router-dom';


import ImagemNoteDell from '../assets/img/dell1.jpg';
import Newnavbar from '../components/Newnavbar';
// import ImagemNoteApple from '../assets/img/notebook-apple.jpeg';

class Anuncio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaAnuncio: [],
            idAnuncio: '1',
            PrecoAnuncio: '',
            // idImagem: ''
        }

        this.buscarAnuncio = this.buscarAnuncio.bind(this);
        // this.imprimeAqui = this.imprimeAqui.bind(this);
    }

    buscarAnuncio() {
        fetch('http://localhost:5000/api/anuncio/tolist')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaAnuncio: data }))
            .catch((erro) => console.log(erro));
    }

    componentDidMount() {
        this.buscarAnuncio();
        // this.buscarImagem()

    }

    // imprimeAqui() {
    //     console.log(this.state.PrecoAnuncio);
    // }

    render() {
        return (
            <div>
                <div className='anuncio-div-central'>
                    <section className="text-center my-5">
                        <h2 className="titulo-anuncio">Anúncios</h2>

                        {
                            this.state.listaAnuncio.map(function(anuncio) {
                                return (                            
                                    <MDBRow value={anuncio.idAnuncio} className='anuncio-row-caixas' key={anuncio.idAnuncio}>
                                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                                            <MDBCard className="align-items-center">
                                                <MDBCardImage
                                                    src={ImagemNoteDell}
                                                    top
                                                    alt="foto de um notebook dell"
                                                    overlay="white-slight"
                                                />
                                                <MDBCardBody className="text-center">
                                                    <a href="#!" className="grey-text">
                                                        <h5>{anuncio.fkIdProdutoNavigation.nomeProduto}</h5>
                                                    </a>
                                                    <h4 className="font-weight-bold blue-text-valor">
                                                        R${anuncio.precoAnuncio},00
                                                    </h4>
                                                    <button className="botao-anuncio" onClick={() => {window.location.href = '/produto?idAnuncio=' + anuncio.idAnuncio}}>
                                                    Ver Mais
                                                    </button>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                );
                            }.bind(this))
                        }
                    </section>
                </div>
            </div>
        )
    }
}
export default Anuncio;

