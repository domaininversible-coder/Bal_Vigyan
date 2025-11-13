// Simple newsletter form handler
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Thanks for joining our green community, ${email}! 🌿`);
    e.target.reset();
});

// Simple scroll animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.feature, .product-card').forEach((el) => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
