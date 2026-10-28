document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links li a");

    // Toggle Mobile Menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close Mobile Menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
});