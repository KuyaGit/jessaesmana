// Smooth scrolling for anchor links
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

// Add animation to elements on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.project-card, .education-card, .skill-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Add active navigation link highlighting
function updateActiveNavLink() {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentLocation)) {
            link.style.borderBottom = '2px solid var(--accent-color)';
        }
    });
}

document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Form validation feedback
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function() {
        const submitBtn = this.querySelector('.submit-btn');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Re-enable button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }, 3000);
    });
}

// Add parallax effect to hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
}

// Mobile menu toggle (if needed for responsive design)
function initMobileMenu() {
    const nav = document.querySelector('nav');
    const navContainer = document.querySelector('nav .container');
    
    if (window.innerWidth <= 768) {
        // Add mobile menu functionality if needed
    }
}

window.addEventListener('resize', initMobileMenu);
document.addEventListener('DOMContentLoaded', initMobileMenu);

// Prevent form double submission
let isSubmitting = false;
if (form) {
    form.addEventListener('submit', function(e) {
        if (isSubmitting) {
            e.preventDefault();
            return false;
        }
        isSubmitting = true;
    });
}

// Add fade-in animation to all images
document.querySelectorAll('img').forEach(img => {
    img.style.animation = 'fadeIn 0.6s ease-out';
});

// Lazy load images (for better performance)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add page load animation
window.addEventListener('load', function() {
    document.body.style.animation = 'fadeIn 0.5s ease-out';
});

// Smooth navbar shadow on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    }
});

console.log('Portfolio website loaded successfully! 🎉');
