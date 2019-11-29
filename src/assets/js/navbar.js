/* #region Aside */

const aside = document.getElementById('aside-mobile');
const darkModal = document.getElementById('dark-modal');
const filterModal = document.getElementById('filter-modal');

const toggleAside = () => {
    darkModal.classList.toggle('show');
    aside.classList.toggle('aside-show');
}

const toggleFilter = () => {
    darkModal.classList.toggle('show');
    filterModal.classList.toggle('show');
}

/* #endregion */