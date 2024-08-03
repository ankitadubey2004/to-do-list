function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    return true;
}
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // You can add more validation or logic here if necessary

    // Redirect to login page after successful form submission
    window.location.href = 'index.html';
});
