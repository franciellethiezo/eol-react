import React from 'react';

// Css (assets/css)
import '../assets/css/navbar-user.css';
import '../assets/css/style.css';

// Imagens (assets/images)
import Logo from '../assets/img/logo.png';
import LogoTW from '../assets/img/logo-thoughtworks.png';

//Script JS
import '../assets/js/navbar';

function NavBarUser() {
    return (
        <div>
            <div className="dark-modal flex-center" id="dark-modal"></div>
            <aside className="aside-main flex-column-between" id="aside-mobile">
                <div className="aside-sup">
                    <div className="aside-logo flex-center">
                        <img className="asige-img-logo" src={Logo} alt="" />
                        <i class="fas fa-times" onclick="toggleAside()"></i>
                    </div>
                    <div class="aside-icons flex-column">
                        <div class="aside-icon-box flex-center" onclick="toggleAside()">
                            <a href="#">
                                <i class="fas fa-bullhorn" id="megaphone"></i>
                            </a>
                        </div>
                        <div class="aside-icon-box flex-center" >
                            <a href="#">
                                <i class="fas fa-heart flex-center"></i>
                            </a>
                        </div>
                        <div class="aside-icon-box flex-center">
                            <a href="#">
                                <i class="far fa-handshake"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="aside-bottom flex-column">
                    <div class="aside-profile flex-center">
                        <div class="aside-img-profile background-center"></div>
                    </div>
                    <img class="aside-thought-logo" src={LogoTW} alt="" />
                </div>
            </aside>
        </div>
    );
}

export default NavBarUser;