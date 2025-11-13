// Simple product filtering and search
const search = document.getElementById('search');
const filter = document.getElementById('filter');
const products = document.querySelectorAll('.product-card');

// Filter by category
filter.addEventListener('change', () => {
    const value = filter.value;
    products.forEach(p => {
        if (value === 'all' || p.dataset.category === value) {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    });
});

// Search by text
search.addEventListener('keyup', () => {
    const text = search.value.toLowerCase();
    products.forEach(p => {
        const name = p.querySelector('h3').textContent.toLowerCase();
        p.style.display = name.includes(text) ? 'block' : 'none';
    });
});

// Add to Cart (dummy for now)
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.parentElement.querySelector('h3').textContent;
        alert(`${product} added to cart! 🛒`);
    });
});
