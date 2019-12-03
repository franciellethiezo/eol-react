import React, { Component } from 'react';

// Css (assets/css)
import '../assets/css/navbar-user.css';
import '../assets/css/style.css';

// Imagens (assets/img)
import Logo from '../assets/img/logo.png';
import LogoTW from '../assets/img/logo-thoughtworks.png';
import CSharp from '../assets/img/c-sharp.png';

// Scalable Vector Graphics - .SVG (assets/svg)
import Megaphone from '../assets/svg/NavBarUser/megaphone-icon.svg';
import Heart from '../assets/svg/NavBarUser/heart-icon.svg';
import HandShake from '../assets/svg/NavBarUser/handshake-icon.svg';
import LogOut from '../assets/svg/NavBarUser/logout-icon.svg';

//Script JS
// import { toggleMegaphone } from '../assets/js/navbar';

class NavBarUser extends Component {
    constructor() {
        super();
        this.state = {
            megaphone: "aside-icons-box"
        }
    }

    toggleMegaphone() {
        const element = document.querySelector('#megaphone');

        if (element) {
            this.setState({ megaphone: "aside-icons-box active" });
        }
        // else{
        //     this.setState({ megaphone: "aside-icons-box" });
        // }
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                {/* <div className="dark-modal flex-center" id="dark-modal"></div> */}
                <aside className="aside-main flex-column-between" id="aside-mobile">
                    <div className="aside-from-above">
                        <div className="aside-logo flex-center">
                            <img className="aside-img-logo" src={Logo} alt="" />
                        </div>
                        <div className="aside-icons">
                            <div className="aside-sup-navigation flex-center">
                                <a className="aside-a-icons megaphone-a flex-center" href="#">
                                    <img id="megaphone" className={this.state.megaphone} src={Megaphone} alt="Aba de Anúncios" onClick={this.toggleMegaphone.bind(this)} />
                                    <div className="aside-text-icons aside-box-icons megaphone-text">Anúncios</div>
                                </a>
                            </div>
                            <div className="aside-sup-navigation flex-center">
                                <a className="aside-a-icons heart-a flex-center" href="#">
                                    <img className="aside-icons-box" src={Heart} alt="Aba de Seus Interesses" />
                                    <div className="aside-text-icons aside-box-icons heart-text">Lista de Interesses</div>
                                </a>
                            </div>
                            <div className="aside-sup-navigation flex-center">
                                <a className="aside-a-icons hand-shake-a flex-center" href="#">
                                    <img className="aside-icons-box" src={HandShake} alt="Aba de Compras realizadas" />
                                    <div className="aside-text-icons aside-box-icons hand-shake-text">Compras Efetuadas</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="aside-under">
                        <div className="aside-logout aside-bottom-navigation flex-center">
                            <a className="aside-a-btn logout-link flex-center" href="#">
                                <img className="aside-img-logout" src={LogOut} alt="Finalizar " />
                                <div className="aside-text-logout logout-text aside-box-logout">Logout</div>
                            </a>
                        </div>
                        <div className="aside-profile aside-bottom-navigation flex-center">
                            <a className="aside-a-btn profile-link flex-center" href="#">
                                <img className="aside-img-profile" src={CSharp} alt="Página de perfil do usuário" />
                                <div className="aside-text-logout profile-text aside-box-logout">Perfil</div>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
}

export default NavBarUser;