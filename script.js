document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href*="https://mt0916264.github.io/ND/Gerador/index.html"]');
    links.forEach(link => {
        link.style.display = 'none';
        link.remove(); // Remove o link do DOM
    });
});
