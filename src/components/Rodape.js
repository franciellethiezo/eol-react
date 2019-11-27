import React from 'react';

// Css (assets/css)
import '../assets/css/login.css';

// Imagens (assets/images)
import LogoThoughtWorks from '../assets/images/logo-thoughtworks.png';

function Rodape() {
    return (
        <footer className="footer-home flex-between">
            <img className="flex-between" src={LogoThoughtWorks} alt="" />
            <div className="footer-links flex-center">
                <div className="footer-icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-github-square"></i>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;