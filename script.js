
document.addEventListener('DOMContentLoaded', () => {
    

    const links = document.querySelectorAll('header nav a, .logo');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            

            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, 
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    const observerOptions = {
        threshold: 0.1 
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);


    const elementsToReveal = document.querySelectorAll('.card, .skill-group, .adm-text, .especialidade-item');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal-hidden'); 
        revealOnScroll.observe(el);
    });


    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.8rem 10%';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        } else {
            header.style.padding = '1.2rem 10%';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        }
    });
});

const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('header nav');
const navLinks = document.querySelectorAll('header nav a');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navMenu.classList.remove('active');
    });
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header-scrolled', window.scrollY > 50);
});

let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            header.classList.toggle('header-scrolled', window.scrollY > 50);
            isScrolling = false;
        });
        isScrolling = true;
    }
});

const headerHeight = document.querySelector('header').offsetHeight;

window.scrollTo({
    top: targetSection.offsetTop - headerHeight,
    behavior: 'smooth'
});