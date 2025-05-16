// Sélection des éléments
const navLinks = document.querySelectorAll('.nav_link');
const sections = document.querySelectorAll('section');

// Fonction pour gérer le menu actif
function activeMenu() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_link[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav_link[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

// Écouteur d'événement pour le défilement
window.addEventListener('scroll', activeMenu);

// Animation de la section d'accueil
const homeSection = document.querySelector('.home');
const perfilImg = document.querySelector('.perfil_img');
const infoCircle = document.querySelector('.info_circle');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    if (scrollY > 0) {
        homeSection.style.transform = `translateY(${scrollY * 0.1}px)`;
        perfilImg.style.transform = `translateY(${scrollY * 0.2}px)`;
        infoCircle.style.transform = `translateY(${scrollY * 0.15}px)`;
    }
});

// Animation au chargement de la page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
}); 