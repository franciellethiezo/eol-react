import React from 'react';
// import { animate } from "../assets/js/script";

// Css (assets/css)
import '../assets/css/rodape.css';
import '../assets/css/style.css';

// Imagens (assets/img)
import LogoThoughtWorks from '../assets/img/logo-thoughtworks.png';

// Scalable Vector Graphics - .SVG (assets/svg)
import LogoFacebook from '../assets/svg/facebook-logo.svg';
import LogoInstagram from '../assets/svg/instagram-logo.svg';
import LogoTwitter from '../assets/svg/twitter-logo.svg';
import LogoLinkedIn from '../assets/svg/linkedin-logo.svg';
import LogoGitHub from '../assets/svg/github-logo.svg';

function Rodape() {
    return (
        <footer className="footer-home flex-between">
            <img className="logo-tw flex-between" src={LogoThoughtWorks} alt="" />
            <div className="footer-links flex-center">
                <div className="footer-icons flex-around">
                    <img className="logo-rede-sociais" src={LogoFacebook} />
                    <img className="logo-rede-sociais" src={LogoInstagram} />
                    <img className="logo-rede-sociais" src={LogoTwitter} />
                    <img className="logo-rede-sociais" src={LogoLinkedIn} />
                    <img className="logo-rede-sociais" src={LogoGitHub} />
                </div>
            </div>
        </footer>
    );
}

export default Rodape;