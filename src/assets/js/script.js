import React from 'react';
import { functionTypeAnnotation } from '@babel/types';

// #region NavBarUser - components

export const toggleMegaphone = () => {
    const megaphone = document.getElementById('megaphone');
    megaphone.classList.toggle('active');
}

export const toggleHamburguer = () => {
    const hamb = document.getElementById('nav-hamburguer');
    hamb.classList.toggle('open');
}

// #endregion