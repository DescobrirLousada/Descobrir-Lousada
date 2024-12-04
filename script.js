let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider .slide');
    const totalSlides = slides.length;

    // Ajusta o índice para permanecer dentro do intervalo
    currentSlideIndex = (index + totalSlides) % totalSlides;

    // Atualiza a posição do slider para mostrar o conjunto correto de imagens
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

// Inicializa o slideshow
showSlide(currentSlideIndex);

// Seleciona todas as divs dos locais
const localCards = document.querySelectorAll('.local-card');

// Inicializa o índice dos locais a serem exibidos
let currentIndex = 0;

// Função para alternar os locais
function changeLocal() {
    // Remove a classe 'active' de todos os locais
    localCards.forEach((card) => {
        card.classList.remove('active');
    });

    // Adiciona a classe 'active' ao local atual
    localCards[currentIndex].classList.add('active');

    // Atualiza o índice para o próximo local
    currentIndex = (currentIndex + 1) % localCards.length; // Volta ao primeiro após o último local
}

// Inicializa a exibição do primeiro local
changeLocal();

// Muda o local a cada 5 segundos
setInterval(changeLocal, 5000);

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

