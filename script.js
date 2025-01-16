// Function to show the selected section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Countdown Timer
function startCountdown(eventDate) {
    const timerElement = document.getElementById('timer');

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = eventDate - now;

        if (timeRemaining <= 0) {
            timerElement.innerHTML = "The event has started!";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timerElement.innerHTML = `
            ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds
        `;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately
}

// Set the event date (YYYY-MM-DD HH:MM:SS format)
const eventDate = new Date('2025-03-25T10:00:00');
startCountdown(eventDate);
