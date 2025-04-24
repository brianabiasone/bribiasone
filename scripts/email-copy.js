document.addEventListener('DOMContentLoaded', function () {
    const emailButton = document.querySelector('.button-copy');

    // If email button doesn't exist on this page, exit early
    if (!emailButton) return;

    // Store original button content
    const originalHTML = emailButton.innerHTML;
    const checkmarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
        <path d="M6.75 12.2525L3.75 9.25254L2.25 10.7525L6.75 15.2525L15.75 6.25254L14.25 4.75254L6.75 12.2525Z" fill="#FFFFFF"/>
    </svg>`;

    // Anti-bot email obfuscation
    // Email is split into parts and stored as character codes
    const getEmail = () => {
        const part1 = String.fromCharCode(98, 114, 105, 97, 110, 97, 98, 105, 97, 115, 111, 110, 101, 49);
        const part2 = String.fromCharCode(64); // "@"
        const part3 = String.fromCharCode(103, 109, 97, 105, 108, 46, 99, 111, 109);
        return part1 + part2 + part3;
    };

    emailButton.addEventListener('click', function () {
        // Assemble and copy email to clipboard only when needed
        navigator.clipboard.writeText(getEmail())
            .then(() => {
                // Change text to "Copied" in italics and change icon to checkmark
                emailButton.innerHTML = `<i>Copied</i> ${checkmarkSvg}`;

                // Add visual feedback
                emailButton.classList.add('copied');

                // Revert back after 3 seconds
                setTimeout(() => {
                    // Restore original content
                    emailButton.innerHTML = originalHTML;
                    emailButton.classList.remove('copied');
                }, 3000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
});
