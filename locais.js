// Menu Hambúrguer - Responsividade
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Alterna o menu ao clicar no botão hambúrguer
    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('open'); // Adiciona ou remove a classe .open para animar o menu
        hamburgerMenu.classList.toggle('open'); // Anima o botão hambúrguer
    });
});
