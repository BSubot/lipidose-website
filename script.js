
// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        try {
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error('Target element not found');
            }
        } catch (error) {
            console.error('Smooth scroll error:', error);
        }
    });
});

// Email functionality for "Request More Info" button
document.getElementById('request-info').addEventListener('click', function(e) {
    try {
        window.location.href = 'mailto:investor.relations@lipidose.com?subject=Lipidose Information Request';
    } catch (error) {
        console.error('Email request error:', error);
        alert('There was an error opening your email client. Please email investor.relations@lipidose.com directly.');
    }
});

// PDF download functionality for "Download Pitch Deck" button
document.getElementById('download-pitch-deck').addEventListener('click', function(e) {
    try {
        // Create link element
        const link = document.createElement('a');
        link.href = './assets/Lipidose_Pitch_Deck.pdf';
        link.download = 'Lipidose_Pitch_Deck.pdf';
        link.target = '_blank';

        // Append to body, click, then remove
        document.body.appendChild(link);
        link.click();

        // Small delay before removing element
        setTimeout(() => {
            document.body.removeChild(link);
        }, 100);
    } catch (error) {
        console.error('Download error:', error);
        alert('There was an error downloading the pitch deck. Please try again later.');
    }
});

// Mobile menu toggle (if implemented in future)
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
        try {
            mobileMenu.classList.toggle('hidden');
        } catch (error) {
            console.error('Mobile menu toggle error:', error);
        }
    });
}

// Video responsiveness adjustments
function adjustVideoSize() {
    try {
        const videoContainer = document.querySelector('.video-container');
        if (videoContainer) {
            const width = videoContainer.offsetWidth;
            const height = width * 0.5625; // 16:9 aspect ratio

            // Only adjust height for smaller screens where needed
            if (window.innerWidth < 1200) {
                videoContainer.style.height = height + 'px';
            }
        }
    } catch (error) {
        console.error('Video sizing error:', error);
    }
}

// Run video adjustment on page load and resize
window.addEventListener('load', adjustVideoSize);
window.addEventListener('resize', adjustVideoSize);

// Form validation (for future form implementations)
function validateForm(formElement) {
    try {
        let isValid = true;
        const requiredFields = formElement.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');

                // Create error message if it doesn't exist
                let errorMsg = field.nextElementSibling;
                if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                    errorMsg = document.createElement('span');
                    errorMsg.classList.add('error-message');
                    errorMsg.textContent = 'This field is required';
                    field.parentNode.insertBefore(errorMsg, field.nextSibling);
                }
            } else {
                field.classList.remove('error');

                // Remove error message if it exists
                const errorMsg = field.nextElementSibling;
                if (errorMsg && errorMsg.classList.contains('error-message')) {
                    errorMsg.remove();
                }
            }
        });

        return isValid;
    } catch (error) {
        console.error('Form validation error:', error);
        return false;
    }
}

// Contact form event listener (for future implementations)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        try {
            if (!validateForm(this)) {
                e.preventDefault();
            }
        } catch (error) {
            console.error('Form submission error:', error);
            e.preventDefault();
        }
    });
}

// Automatic copyright year update
document.addEventListener('DOMContentLoaded', function() {
    try {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    } catch (error) {
        console.error('Year update error:', error);
    }
});

// Helper functions for animations and interactions
function animateElement(element, animationClass) {
    try {
        if (element) {
            element.classList.add(animationClass);
            element.addEventListener('animationend', function() {
                element.classList.remove(animationClass);
            }, {once: true});
        }
    } catch (error) {
        console.error('Animation error:', error);
    }
}

// Document loaded notification (for development purposes)
console.log('Lipidose™ script loaded successfully.');
