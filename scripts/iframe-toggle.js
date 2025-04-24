document.addEventListener('DOMContentLoaded', function () {
    // Select all buttons that are siblings to iframes
    const buttons = document.querySelectorAll('.case-study-button .button-social');

    buttons.forEach(button => {
        // Store original button text and content
        const originalText = button.textContent.trim();
        const originalHTML = button.innerHTML;

        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Find the parent container and toggle active class
            const container = this.closest('.case-study-button');
            container.classList.toggle('active');

            // Toggle button text
            if (container.classList.contains('active')) {
                // Save the original HTML in a data attribute
                button.setAttribute('data-original-html', originalHTML);

                // Change text to "collapse" and keep the icon
                const icon = button.querySelector('object');
                button.textContent = 'collapse ';
                if (icon) {
                    button.appendChild(icon.cloneNode(true));
                }
            } else {
                // Restore original HTML
                button.innerHTML = button.getAttribute('data-original-html');
            }
        });
    });
});
