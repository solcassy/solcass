document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');

    h1.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * 1000) - 500; // Random value between -250 and 250
        const randomY = Math.floor(Math.random() * 1000) - 500; // Random value between -250 and 250
        h1.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    h1.addEventListener('mouseout', () => {
        h1.style.transform = 'translate(0, 0)';
    });
});