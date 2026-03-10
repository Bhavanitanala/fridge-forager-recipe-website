// scripts/other.js

document.addEventListener('DOMContentLoaded', function() {
    const pageContent = document.querySelector('.page-content');

    if (pageContent) {
        // --- "Back to Top" Button (Common) ---
        const backToTopBtn = document.createElement('button');
        backToTopBtn.textContent = 'Back to Top';
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            cursor: pointer;
            display: none;
        `;
        document.body.appendChild(backToTopBtn);

        window.addEventListener('scroll', function() {
            backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
