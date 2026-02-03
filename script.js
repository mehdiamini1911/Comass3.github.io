// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send this to your backend
            // For now, we'll just show an alert
            alert(`Thank you for subscribing with ${email}! You'll receive updates about Compass3.`);
            this.reset();
        });
    }
    
    // Scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections for scroll animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Add current year to footer
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.current-year').forEach(element => {
        element.textContent = currentYear;
    });
    
    // Platform-specific download button handlers
    document.querySelectorAll('.btn-download').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.closest('.platform-card').querySelector('h3').textContent;
            alert(`Downloading Compass3 for ${platform}...\n\n(Note: This is a demo. In a real implementation, this would start the download.)`);
            
            // In a real implementation, you would redirect to the actual download link:
            // window.location.href = 'your-actual-download-link-here';
        });
    });
});
