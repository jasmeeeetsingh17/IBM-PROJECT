
// Simple animation counter for impact section
function animateCounter(id, end, duration) {
    const el = document.getElementById(id);
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
        start += 1;
        el.innerText = start;
        if (start >= end) clearInterval(timer);
    }, stepTime);
}

window.addEventListener('scroll', () => {
    const impact = document.querySelector('.impact');
    const rect = impact.getBoundingClientRect();
    if (rect.top < window.innerHeight && !impact.dataset.animated) {
        impact.dataset.animated = true;
        animateCounter('treeCount', 5000, 2000);
        animateCounter('carbonOffset', 1200, 2000);
    }
});