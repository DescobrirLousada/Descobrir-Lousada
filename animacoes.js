window.addEventListener("scroll", function() {
    const nav = document.querySelector(".fixed-nav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    function handleScroll() {
        animatedElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
// JavaScript Document