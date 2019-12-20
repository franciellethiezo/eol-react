import React, { Component } from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import M from 'materialize-css';
import '../assets/css/newnavbar.css'
import Logo from '../assets/img/logo.png';
import LogoTW from '../assets/img/logo-thoughtworks.png';
import CSharp from '../assets/img/c-sharp.png';

import Megaphone from '../assets/svg/NavBarUser/megaphone-icon.svg';
import Heart from '../assets/svg/NavBarUser/heart-icon.svg';
import HandShake from '../assets/svg/NavBarUser/handshake-icon.svg';
import LogOut from '../assets/svg/NavBarUser/logout-icon.svg';

class NewNav extends Component {

  render() {
        
    return (
<div>
  <style>
    {`
            // #root > div > div {
            //   z-index: 99999 !important;
            // }
            
           
          `}
  </style>
  <SideNav
    options={{
      closeOnClick: true
    }}
    // trigger={<Button node="button">SIDE NAV DEMO</Button>}
  >
    {/* <SideNavItem
      user={{
        // background: 'https://placeimg.com/640/480/tech',
        email: 'jdandturk@gmail.com',
        image: 'static/media/react-materialize-logo.824c6ea3.svg',
        name: 'John Doe'
      }}
      userView
    /> */}

    <div classname="firstdiv">

    <SideNavItem classname="teste">
    <img className="aside-img-logo" src={Logo} alt="Logo EOL4US(End of Life for Us)" />
    </SideNavItem>
    <SideNavItem href="#!second">
    <img id="megaphone" className="aside-icons-box" src={Megaphone} alt="Aba de Anúncios" />
     <h3>Anúncios</h3> 
    </SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>
    <img className="aside-icons-box" src={Heart} alt="Aba de Seus Interesses" />
   <h3>Lista de Interesses</h3> 
    </SideNavItem>
    <SideNavItem subheader>
    <img className="aside-icons-box" src={HandShake} alt="Aba de Compras realizadas" />
   <h3>Compras Efetuadas</h3> 
    </SideNavItem>
    <SideNavItem
      href="#!third"
      waves
    >
    <img className="aside-img-logout" src={LogOut} alt="Efetuar o logout da conta" />
     <h3>Logout</h3> 
    </SideNavItem>
    <SideNavItem
      href="#!third"
      waves
    >
     <img className="aside-img-profile" src={CSharp} alt="Página de perfil do usuário" />
     <h3>Perfil</h3> 
    </SideNavItem>
    <SideNavItem
      href="#!third"
      waves
    >
    <img className="aside-img-logoTW" src={LogoTW} alt="Logo da ToughtWorks" />

    </SideNavItem>
    {/* <SideNavItem
      href="#!third"
      waves
    >

      Third Link With Waves
    </SideNavItem> */}
  </div>
  </SideNav>
</div>

  )}
}

export default NewNav;