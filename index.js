document.getElementById('wishButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.textContent = "May all your dreams come true! ❤️"; 
    surpriseMessage.classList.remove('hidden');
});
