// Navigation and Video Controls
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize Vimeo player
    const iframe = document.querySelector('#vimeo-player');
    const player = new Vimeo.Player(iframe);
    
    // Video control buttons
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteBtn = document.getElementById('mute-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    
    // Play/pause control
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            player.getPaused().then(function(paused) {
                if (paused) {
                    player.play();
                    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    player.pause();
                    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
        });
    }
    
    // Mute/unmute control
    if (muteBtn) {
        muteBtn.addEventListener('click', function() {
            player.getVolume().then(function(volume) {
                if (volume > 0) {
                    player.setVolume(0);
                    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                } else {
                    player.setVolume(1);
                    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                }
            });
        });
    }
    
    // Fullscreen control
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            player.requestFullscreen().catch(function(error) {
                console.log('Fullscreen error:', error);
            });
        });
    }
    
    // Update play button state when video state changes
    player.on('play', function() {
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });
    
    player.on('pause', function() {
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Email functionality
    const requestInfoBtn = document.getElementById('request-info');
    if (requestInfoBtn) {
        requestInfoBtn.addEventListener('click', function() {
            window.location.href = 'mailto:investor.relations@lipidose.com?subject=Lipidose Information Request';
        });
    }
    
    // PDF download functionality
    function downloadPDF() {
        const link = document.createElement('a');
        link.href = 'assets/Lipidose_Pitch_Deck.pdf';
        link.download = 'Lipidose_Pitch_Deck.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const downloadBtn = document.getElementById('download-pitch-deck');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadPDF);
    }
    
    // Update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
