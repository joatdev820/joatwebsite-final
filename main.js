let mobileMenu = document.getElementById("mobile-menu");
let hamburgerButton = document.getElementById("hamburger-icon");
let menuCloseButton = document.getElementById("close-menu");
let aboutButton = document.getElementById("about-button");

hamburgerButton.addEventListener("click", function showMenu() {
    
    mobileMenu.style.display = "flex";
});

menuCloseButton.addEventListener("click", function closeMenu() {
    
    mobileMenu.style.display = "none";
});





