// JavaScript for Saifur's Creative Portfolio Website

// Smooth Scrolling
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Dynamic Year Update for Footer
const year = new Date().getFullYear();
document.querySelector('footer p').textContent = `© ${year} Saifur Rahman | Designed with passion.`;

// Animation on Scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});