// Variável para controlar o índice da imagem atual
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const dots = document.querySelectorAll('.dot');

// Função para mudar de imagem
function changeImage(direction) {
    // Remove a classe active da imagem e dot atuais
    images[currentImageIndex].classList.remove('active');
    dots[currentImageIndex].classList.remove('active');
    
    // Calcula o novo índice
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    
    // Adiciona a classe active na nova imagem e dot
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
}

// Função para ir para uma imagem específica
function goToImage(index) {
    // Remove a classe active da imagem e dot atuais
    images[currentImageIndex].classList.remove('active');
    dots[currentImageIndex].classList.remove('active');
    
    // Define o novo índice
    currentImageIndex = index;
    
    // Adiciona a classe active na nova imagem e dot
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
}

// Função para rolar até a seção de contato (footer)
function scrollToContact() {
    const footer = document.querySelector('.footer');
    footer.scrollIntoView({ behavior: 'smooth' });
}

// Auto-play da galeria (opcional)
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeImage(1);
    }, 5000); // Muda a cada 5 segundos
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Iniciar auto-play quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    startAutoPlay();
    
    // Parar auto-play quando o usuário interagir com a galeria
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.addEventListener('mouseenter', stopAutoPlay);
    galleryContainer.addEventListener('mouseleave', startAutoPlay);
});

// Animação de scroll para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.feature-card, .step-card, .benefit-card'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar classe ao header quando rolar a página
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
    }
    
    lastScroll = currentScroll;
});


function openChat() {
    const btn = document.querySelector('.chat-window-toggle');
    btn.click();
}