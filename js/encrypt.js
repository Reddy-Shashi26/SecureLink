document.getElementById('encryptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let link = document.getElementById('link').value.trim();
    const password = document.getElementById('password').value;

    // Auto-correct accidental wrong domain
    link = link.replace("https://reddy-shashi26.github.io/", "");

    if (!link.startsWith("http")) {
        link = "https://" + link;
    }

    const encryptedLink = btoa(JSON.stringify({ link, password }));

    const generatedLinkContainer = document.getElementById('generatedLinkContainer');
    const generatedLinkBox = document.getElementById('generatedLink');
    generatedLinkBox.href = `${window.location.origin}/SecureLink/decrypt.html?data=${encryptedLink}`;
    generatedLinkBox.textContent = `${window.location.origin}/SecureLink/decrypt.html?data=${encryptedLink}`;

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
