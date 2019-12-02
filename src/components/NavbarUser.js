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
import '../assets/js/navbar';

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
                    <div className="aside-icons flex-column">
                        <div className="flex-center" onclick="toggleAside()">
                            <a href="#">
                                {/* <i className="fas fa-bullhorn" id="megaphone"></i> */}
                                <img id="" className="aside-icon-box aside-icon-megaphone" src={Megaphone} alt="Aba de Anúncios" />
                            </a>
                        </div>
                        <div className="flex-center" >
                            <a href="#">
                                {/* <i className="fas fa-heart flex-center"></i> */}
                                <img className="aside-icon-box" src={Heart} alt="Aba de Seus Interesses" />
                            </a>
                        </div>
                        <div className="flex-center">
                            <a href="#">
                                {/* <i className="far fa-handshake"></i> */}
                                <img className="aside-icon-box" src={HandShake} alt="Aba de Compras realizadas" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="aside-under">
                    <div className="aside-logout aside-navigation flex-center">
                        <a className="aside-a-btn" href="#">
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