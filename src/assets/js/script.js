import React from 'react';
import { functionTypeAnnotation } from '@babel/types';

// #region NavBarUser - components

export const toggleMegaphone = () => {
    const megaphone = document.getElementById('megaphone');
    megaphone.classList.toggle('active');
}

// export const toggle = () => {
//     document.onload.apply(function(){
//         document.getElementById('nav-hamburguer').click(function(){
//             document.getElementById('nav-hamburguer').classList.toggle('open');
//         });
//     });
// }

// #endregion