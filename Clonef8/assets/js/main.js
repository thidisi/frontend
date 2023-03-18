const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Scroll Top

var scrollTop = function () {
    var header = $(".app");
    header.scrollIntoView({ behavior: "smooth", block: "start" });
}
var scrollBtn = $(".scroll-top");
scrollBtn.addEventListener("click", scrollTop);
window.addEventListener("scroll", scrollBtnDisplay);

function scrollBtnDisplay() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// search
let menuSearch = $("#searchOn");
let searchOn = $("#searchBox");
let searchOff = $(".search-close");

menuSearch.onclick = function() {
    searchOn.style.transform = 'translateX(0)';
}

searchOff.onclick = function() {
    searchOn.style.transform = 'translateX(-100%)';
}

// map
let menubars = $("#mapOn");
let mapOn = $(".bars-map");
let mapOff = $("#map__close");

menubars.onclick = function() {
    mapOn.style.transform = 'translateX(0)';
    mapOn.style.opacity = '1';

}

mapOff.onclick = function() {
    mapOn.style.transform = 'translateX(100%)';
    mapOn.style.opacity = '0';

}

// active toggle
let menuToggle = $(".navbar-toggle");
let menuLayover = $(".menu__overlay");
let menuContent = $(".menu-content");

function showMobileNav() {
    menuToggle.classList.add('active');
    menuLayover.classList.add('show__overlay');
    menuContent.classList.add('show-menu__content');
}
function hideMobileNav() {
    menuToggle.classList.remove('active');
    menuLayover.classList.remove('show__overlay');
    menuContent.classList.remove('show-menu__content');
}
menuToggle.addEventListener('click', showMobileNav);
menuLayover.addEventListener('click', hideMobileNav);

// Active link
var links = $$(".navbar-item__link");
links.forEach((link) => {

    link.onclick = function () {
        $('.navbar-item__link.active').classList.remove('active');
        this.classList.add('active');
    }
});
