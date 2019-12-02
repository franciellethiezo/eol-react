import React from 'react';

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
import { myFunction, myFunction2 } from '../assets/js/navbar';

function NavBarUser() {
    return (
        <div>
            <div className="dark-modal flex-center" id="dark-modal"></div>
            <aside className="aside-main flex-column-between" id="aside-mobile">
                <div className="aside-from-above">
                    <div className="aside-logo flex-center">
                        <img className="aside-img-logo" src={Logo} alt="" />
                        {/* <i class="fas fa-times" onclick="toggleAside()"></i> */}
                    </div>
                    <div className="aside-icons">
                        <div className="aside-sup-navigation flex-center" onclick="toggleAside()">
                            <a className="aside-a-icons megaphone-a flex-center" href="#">
                                <img id="megaphone" className="aside-icons-box megaphone" src={Megaphone} alt="Aba de Anúncios" />
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
                        <a className="aside-a-btn flex-center" href="#">
                            <img className="aside-img-logout" src={LogOut} alt="" />
                            <div className="aside-text-logout aside-box-logout">Logout</div>
                        </a>
                    </div>
                    <div className="aside-profile flex-center">
                        <a href="#">
                            <img className="aside-img-profile" src={CSharp} alt="" />
                        </a>
                    </div>
                </div>

                {/* <div class="aside-bottom flex-column">
                    <div class="aside-profile flex-center">
                        <div class="aside-img-profile background-center"></div>
                    </div>
                    <img class="aside-thought-logo" src={LogoTW} alt="" />
                </div> */}
            </aside>
        </div>
    );
}

export default NavBarUser;