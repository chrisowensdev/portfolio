const menuBtn = document.getElementById('menu-button');
const nav = document.querySelector('.navbar');
const navList = document.querySelector('.navlist');
const navListItems = document.querySelectorAll('.navlist li');

window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 50) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
});

navListItems.forEach((item) => {
    item.addEventListener('click', () => {
        navList.classList.remove('show');
    });
});
