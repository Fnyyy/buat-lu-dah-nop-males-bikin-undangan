window.addEventListener('load', () => {
    // Hide loader after 1.5 seconds for a cool "app loading" effect
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const inviteContainer = document.getElementById('invite-container');
        
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.visibility = 'hidden';
            loader.style.display = 'none';
            inviteContainer.classList.remove('hidden');
        }, 500);
    }, 1500);
});

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const inviteContainer = document.getElementById('invite-container');
const rundownContainer = document.getElementById('rundown-container');

// When Yes is clicked, show the rundown
yesBtn.addEventListener('click', () => {
    // Add a little exit animation to the invite container
    inviteContainer.style.transform = 'scale(0.8)';
    inviteContainer.style.opacity = '0';
    
    setTimeout(() => {
        inviteContainer.classList.add('hidden');
        rundownContainer.classList.remove('hidden');
        
        // Entrance animation for rundown
        rundownContainer.style.transform = 'scale(0.8)';
        rundownContainer.style.opacity = '0';
        
        // Force reflow
        void rundownContainer.offsetWidth;
        
        rundownContainer.style.transform = 'scale(1)';
        rundownContainer.style.opacity = '1';
    }, 300);
});

// Function to move the No button randomly
const moveNoButton = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Calculate random position, keeping button within viewport bounds
    const randomX = Math.floor(Math.random() * (windowWidth - btnWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - btnHeight));
    
    // Change button position
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = '999';
    
    // Optional: make it shrink a bit or look silly
    noBtn.style.transform = `scale(${Math.random() * 0.4 + 0.8})`;
};

// Desktop: move on hover
noBtn.addEventListener('mouseover', moveNoButton);

// Mobile: move on touch
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent accidental click if touch is too fast
    moveNoButton();
});

// Just in case they somehow click it
noBtn.addEventListener('click', () => {
    noBtn.innerText = "Tetep gamau jir 😜";
    moveNoButton();
});
