const header = document.querySelector('.header');
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
});

menuToggle.addEventListener('click', toggleMenu);
menuLinks.forEach(link => link.addEventListener('click', toggleMenu));

function toggleMenu() {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}