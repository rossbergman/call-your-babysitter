// Smooth scrolling for navigation links
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

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.party-card, .mix-card, .subscribe-form');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - scrolled / window.innerHeight;
            }
        });
    }

    // Enhance neon flicker effect on hover
    const neonTexts = document.querySelectorAll('.neon-text');
    neonTexts.forEach(text => {
        text.addEventListener('mouseenter', () => {
            text.style.animation = 'flicker 0.5s infinite alternate';
        });
        text.addEventListener('mouseleave', () => {
            text.style.animation = 'flicker 3s infinite alternate';
        });
    });

    // Add glow effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Add active state to navigation
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => navObserver.observe(section));
});

// Add custom cursor glow effect (optional)
let mouseGlow = null;

document.addEventListener('DOMContentLoaded', () => {
    // Create custom cursor glow
    mouseGlow = document.createElement('div');
    mouseGlow.className = 'mouse-glow';
    mouseGlow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 0, 110, 0.4), transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(mouseGlow);

    document.addEventListener('mousemove', (e) => {
        if (mouseGlow) {
            mouseGlow.style.left = (e.clientX - 10) + 'px';
            mouseGlow.style.top = (e.clientY - 10) + 'px';
        }
    });
});

// Easter egg: Konami code activates extra neon
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.filter = 'saturate(2) contrast(1.2)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 5000);
    }
});
