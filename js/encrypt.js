document.getElementById('encryptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const link = document.getElementById('link').value;
    const password = document.getElementById('password').value;

    // Encrypt the link and password (you can use your encryption logic here)
    const encryptedLink = btoa(JSON.stringify({ link, password })); // Placeholder encryption

    // Show the generated link and buttons
    const generatedLinkContainer = document.getElementById('generatedLinkContainer');
    const generatedLinkBox = document.getElementById('generatedLink');
    generatedLinkBox.href = `${window.location.origin}/SecureLink/decrypt.html?data=${encryptedLink}`;
    generatedLinkBox.textContent = ` ${window.location.origin}/SecureLink/decrypt.html?data=${encryptedLink}`;

    generatedLinkContainer.classList.remove('hidden');
});

// Function to copy the link
function copyLink() {
    const generatedLink = document.getElementById('generatedLink').textContent;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = generatedLink;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Link copied to clipboard!');
}
