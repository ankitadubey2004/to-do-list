// document.getElementById('showRegister').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.getElementById('loginForm').classList.add('hidden');
//     document.getElementById('registerForm').classList.remove('hidden');
// });
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // You can add more validation or logic here before redirecting
    window.location.href = 'task.html';
});


document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('registerPassword').value;
    var confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Registration successful!');
        // Here you can add code to send form data to the server
    }
});
