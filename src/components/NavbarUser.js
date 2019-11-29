import React from 'react';
function NavbarUser() {
    return (
        <aside class="flex-column-between" id="aside-mobile">
            <div class="top">
                <div class="logo flex-center">
                    <img src="./imgs/logo.png" alt="" />
                    <i class="fas fa-times" onclick="toggleAside()"></i>
                </div>
                <div class="icons flex-column">
                    <div class="icon-box flex-center">
                        <a href="./adverts.html"><i class="fas fa-bullhorn" id="megaphone"></i></a>
                    </div>
                    <div class="icon-box flex-center">
                        <i class="fas fa-heart flex-center"></i>
                    </div>
                    <div class="icon-box flex-center">
                        <i class="far fa-handshake"></i>
                    </div>
                </div>
            </div>
            <div class="bottom flex-column">
                <div class="profile flex-center">
                    <div class="img-profile background-center"></div>
                </div>
                <img src="./imgs/logo-thoughtworks.png" alt="" class="thought-logo" />
            </div>

        </aside>
    );
}
export default NavbarUser;