import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import '../assets/css/newnavbar.css'


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
import {
    toggleMegaphone,
    toggleHamburguer,
    toggleAside
} from '../assets/js/script';
export default () => (
  <BrowserRouter>

    <MDBNav className="new-nav">
      <MDBNavLink active to="#!">Active</MDBNavLink>
      <MDBNavLink to="#!"><img className="aside-img-logo" src={Logo} alt="Logo EOL4US(End of Life for Us)" /></MDBNavLink>
      <MDBNavLink to="#!"> <img id="megaphone" className="aside-icons-box" src={Megaphone} alt="Aba de Anúncios" />
                            <div className="aside-text-icons aside-box-icons megaphone-text">Anúncios</div>
      </MDBNavLink>
      <MDBNavLink to="#!"> <img className="aside-icons-box" src={Heart} alt="Aba de Seus Interesses" />
                           <div className="aside-text-icons aside-box-icons heart-text">Perfil</div>
      </MDBNavLink>
      <MDBNavLink to="#!"></MDBNavLink>
      <MDBNavLink to="#!">Link</MDBNavLink>
      <MDBNavLink disabled to="#!"><img className="aside-img-logout" src={LogOut} alt="Efetuar o logout da conta" />
                                    <div className="aside-text-logout logout-text aside-box-logout">Logout</div>
      </MDBNavLink>
      <MDBNavLink to="#!"><img className="aside-img-logoTW" src={LogoTW} alt="Logo da ToughtWorks" /></MDBNavLink>
    </MDBNav>

  </BrowserRouter>
);

