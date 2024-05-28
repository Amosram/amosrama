/*animate bacground*/
const hero = document.querySelector('.hero');

for (var i = 0; i <= 100; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('blocks');
    hero.appendChild(blocks);
}

function animateBlocks () {
    anime({
        targets: '.blocks',
        translateX: function() {
            return anime.random(-700, 700);
        },
        translateY: function() {
            return anime.random(-500, 500);
        },
        scale: function() {
            return anime.random(1, 3);
        },

        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks,
    })
}

animateBlocks()

/******MENU BARS*****/
let menuIcon = document.querySelector('#menu-icon');
let sideBar = document.querySelector('.sidebar');
let overLay = document.querySelectorAll('.overlay');


menuIcon.onclick = () => {
    sideBar.classList.toggle("active");
}

/*ACTIVE ELEMENTS*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector(".header");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    header.classList.toggle("sticky", window.scrollY > 70 );

    sideBar.classList.remove('active');
}

/*AOS LIBRARY*/
const mqlist =window.matchMedia('max-width: 500px');
if (mqlist.matches) {
    setDelay(400);
}
mqlist.addEventListener('change', function(mql) {
    if (mql.matches) {
        setDelay(400);
    }
})

AOS.init({once: true});





