// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {

    const toggleButton = 
    document
    .querySelector(".navbar__mobile-menu-toggle");

    const mobileMenu = 
    document.querySelector(".navbar__mobile-menu-items");

    toggleButton
    .addEventListener("click", () => {
        mobileMenu
        .classList
        .toggle("active");
    });
});

// Main Menu Scroll

window.addEventListener("scroll", () => {

    const navScroll = document.querySelector(".navbar");

    if (window.scrollY > 0) {
        navScroll
        .classList
        .add("navbar--scroll");
    } else {
        navScroll
        .classList
        .remove("navbar--scroll");
    }
});