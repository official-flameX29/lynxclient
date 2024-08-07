document.addEventListener('scroll', () => {
    const scrollTopButton = document.getElementById('scroll-to-top');
    if (window.scrollY > window.innerHeight) {
        scrollTopButton.style.display = 'flex';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

document.getElementById('scroll-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('music-toggle').addEventListener('click', () => {
    // Logic to play/pause music
});
