// Smooth Scrolling Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Simple Review Carousel (Auto-rotate)
    const reviewCards = document.querySelectorAll('.review-card');
    let currentReview = 0;
    
    function rotateReviews() {
        if (reviewCards.length > 0 && window.innerWidth <= 768) {
            reviewCards.forEach((card, index) => {
                card.style.display = index === currentReview ? 'block' : 'none';
            });
            
            currentReview = (currentReview + 1) % reviewCards.length;
        } else {
            reviewCards.forEach(card => {
                card.style.display = 'block';
            });
        }
    }
    
    // Initialize review display
    rotateReviews();
    
    // Auto-rotate reviews every 5 seconds on mobile
    setInterval(rotateReviews, 5000);
    
    // Re-check on window resize
    window.addEventListener('resize', rotateReviews);
    
    // Gallery lightbox effect (simple version)
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Create lightbox overlay
            const lightbox = document.createElement('div');
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                cursor: pointer;
            `;
            
            const img = document.createElement('img');
            img.src = this.src;
            img.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 8px;
            `;
            
            lightbox.appendChild(img);
            document.body.appendChild(lightbox);
            
            // Close lightbox on click
            lightbox.addEventListener('click', () => {
                document.body.removeChild(lightbox);
            });
            
            // Prevent body scroll when lightbox is open
            document.body.style.overflow = 'hidden';
            lightbox.addEventListener('click', () => {
                document.body.style.overflow = 'auto';
            });
        });
    });
    
    // Update WhatsApp links with actual phone number
    // Replace 'XXXXXXXXXX' with actual phone number when available
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.includes('XXXXXXXXXX')) {
                e.preventDefault();
                alert('Please update the WhatsApp phone number in the code before launching the website.');
            }
        });
    });
    
    // Update phone links
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.includes('XXXXXXXXXX')) {
                e.preventDefault();
                alert('Please update the phone number in the code before launching the website.');
            }
        });
    });
    
    // Lazy loading for images (additional optimization)
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Add hover effects to dish cards
    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNavigation = debounce(() => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, 50);
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Initialize on page load
    highlightNavigation();
});

// Console message for developers
console.log('%c🍛 Laja\'s Kitchens Website', 'color: #E67E22; font-size: 24px; font-weight: bold;');
console.log('%cRemember to:', 'color: #C0392B; font-size: 16px; font-weight: bold;');
console.log('1. Replace all placeholder images with actual client photos');
console.log('2. Update WhatsApp number (replace XXXXXXXXXX)');
console.log('3. Update phone number (replace XXXXXXXXXX)');
console.log('4. Update email address');
console.log('5. Update social media links');
console.log('6. Add actual customer testimonials');
console.log('7. Update operating hours');
console.log('8. Optimize and compress all images before deployment');