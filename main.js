//fixed header
function scrollHeader(){
    if(window.scrollY > 100) {
        document.querySelector('.header').classList.add('fixed'); //.header.fixed
    }else{
        document.querySelector('.header').classList.remove('fixed');  
    }
}
window.addEventListener('scroll', scrollHeader);

//menu show
const showMenu = (toggleId, navId)=> {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show'); //javascript css to display nav menu
        });
    }
};
showMenu('nav-toggle','nav-menu');

// Remove nav menu on mobile view
const navLink = document.querySelectorAll('.nav_link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show'); //When we click on each nav_link we remove the show class se
}
navLink.forEach((n) => n.addEventListener('click',linkAction));