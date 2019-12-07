import React from 'react';
import { functionTypeAnnotation } from '@babel/types';

// #region KK

const helloWorld = 
`
.o88b.  .d88b.  d8888b. d88888b   db    db d8888b.
d8P  Y8 .8P  Y8. 88   8D 88'        8b  d8' 88  8D
8P      88    88 88   88 88ooooo     8bd8'  88oodD'
8b      88    88 88   88 88         .dPYb.  88  
Y8b  d8  8b  d8' 88  .8D 88.       .8P  Y8. 88     
  Y88P'   Y88P'  Y8888D' Y88888P   YP    YP 88    
`; 

console.log(helloWorld);

// #endregion

// #region NavBarUser - components

export const toggleMegaphone = () => {
    const megaphone = document.getElementById('megaphone');
    megaphone.classList.toggle('active');
}

export const toggleHamburguer = () => {
    const hamb = document.getElementById('nav-hamburguer');
    hamb.classList.toggle('open');
}

export const toggleAside = () => {
    const aside = document.getElementById('aside-desktop');
    aside.classList.toggle('aside-show');
}

// #endregion