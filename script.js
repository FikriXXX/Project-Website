const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle Class Active Searchform
const searchForm = document.querySelector('search-form');
const searchBox = document.querySelector('#search-box') 

document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
}

//end disini

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
