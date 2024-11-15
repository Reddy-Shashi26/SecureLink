


document.getElementById('decryptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    const urlParams = new URLSearchParams(window.location.search);
    const encryptedData = urlParams.get('data');

    if (!encryptedData) {
        alert('No encrypted data found!');
        return;
    }

    // Decrypt the data (using base64 decoding and your decryption method)
    const decryptedData = JSON.parse(atob(encryptedData)); // Placeholder decryption

    if (decryptedData.password === password) {
        // Correct password: Open the decrypted link in the same tab
        window.location.href = decryptedData.link;  // Redirect to the decrypted link in the same tab
    } else {
        // Wrong password: Add red border, shake the input and clear text
        passwordInput.classList.add('invalid');
        passwordInput.value = ''; // Clear the password input

        // Trigger the shake effect
        setTimeout(() => {
            passwordInput.classList.remove('invalid'); // Remove the red border after shaking
        }, 800); // Wait for the shake animation to finish

        
    }
});

