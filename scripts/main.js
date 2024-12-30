document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    
    if (startButton) {
        startButton.addEventListener('click', function() {
            window.location.href = 'historia.html';
        });
    }

    const envelope = document.getElementById('envelope');
    
    if (envelope) {
        envelope.addEventListener('click', function() {
            document.body.style.backgroundImage = "url('styles/paper_burned_background.jpg')";
            document.body.style.backgroundSize = "cover";
        });
    }

    const videoButton = document.getElementById('video-button');
    
    if (videoButton) {
        videoButton.addEventListener('click', function() {
            const video = document.createElement('video');
            video.src = 'videos/video1.mp4';
            video.controls = true;
            video.style.width = '100%';
            video.style.height = '100%';
            video.setAttribute('controls', 'controls');
            document.body.innerHTML = ''; // Clear the body
            document.body.appendChild(video);
            video.play();
        });
    }
});