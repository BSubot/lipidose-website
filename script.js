// Video Controls and Functionality
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hero-video');
    const videoContainer = document.querySelector('.video-container');
    
    // Create video controls
    const controlsDiv = document.createElement('div');
    controlsDiv.id = 'video-controls';
    
    // Mute/unmute button
    const muteBtn = document.createElement('button');
    muteBtn.className = 'video-btn';
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    muteBtn.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
    
    // Play/pause button
    const playBtn = document.createElement('button');
    playBtn.className = 'video-btn';
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    playBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Add controls to container
    controlsDiv.appendChild(muteBtn);
    controlsDiv.appendChild(playBtn);
    videoContainer.appendChild(controlsDiv);
    
    // Ensure video plays when ready
    video.addEventListener('canplay', function() {
        video.play().catch(e => {
            console.log("Auto-play prevented. User interaction required.");
        });
    });
    
    // Email functionality
    document.getElementById('request-info').addEventListener('click', function() {
        window.location.href = 'mailto:investor.relations@lipidose.com?subject=Lipidose Information Request';
    });
    
    // PDF download functionality
    document.getElementById('download-pitch-deck').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'assets/Lipidose_Pitch_Deck.pdf';
        link.download = 'Lipidose_Pitch_Deck.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
