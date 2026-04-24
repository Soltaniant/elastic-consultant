'use strict';

// ============================================
// SMOOTH SCROLL
// ============================================
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

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply to elements
document.querySelectorAll('.problem-item, .service-card, .exp-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ============================================
// TRACK PHONE CLICKS
// ============================================
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone click tracked');
        // Add analytics here
        // gtag('event', 'phone_click');
    });
});

// ============================================
// TRACK MESSENGER CLICKS
// ============================================
document.querySelectorAll('.messenger-link').forEach(link => {
    link.addEventListener('click', () => {
        const messenger = link.textContent.trim();
        console.log(`Messenger click: ${messenger}`);
        // gtag('event', 'messenger_click', { messenger: messenger });
    });
});

console.log('✓ Site loaded');