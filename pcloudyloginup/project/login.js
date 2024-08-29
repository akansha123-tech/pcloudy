document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var emailInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if (emailInput === storedEmail && passwordInput === storedPassword) {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});
