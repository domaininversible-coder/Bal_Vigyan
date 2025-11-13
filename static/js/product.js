// Add-to-cart button functionality (temporary alert for now)
document.querySelector('.add-to-cart').addEventListener('click', () => {
    const productName = document.querySelector('h1').textContent;
    alert(`${productName} added to cart 🛒`);
});
