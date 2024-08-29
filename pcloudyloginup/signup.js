function validatePassword() {
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("password-error");

    if (passwordInput.value.includes(" ")) {
        passwordError.textContent = "❗Spaces are not allowed";
        passwordError.style.display = "block";
    } else {
        passwordError.textContent = "";
        passwordError.style.display = "none";
    }
}

function validateConfirmPassword() {
    var confirmPasswordInput = document.getElementById("confirm-password");
    var confirmPasswordError = document.getElementById("confirm-password-error");

    if (confirmPasswordInput.value.includes(" ")) {
        confirmPasswordError.textContent = "❗Spaces are not allowed";
        confirmPasswordError.style.display = "block";
    } else {
        confirmPasswordError.textContent = "";
        confirmPasswordError.style.display = "none";
    }
}

document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("confirm-password").addEventListener("input", validateConfirmPassword);

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;
    var confirmPasswordInput = document.getElementById("confirm-password").value;
    var passwordError = document.getElementById("password-error");
    var confirmPasswordError = document.getElementById("confirm-password-error");

    if (passwordError.style.display === "block" || confirmPasswordError.style.display === "block") {
        return;
    }

    localStorage.setItem('name', nameInput);
    localStorage.setItem('email', emailInput);
    localStorage.setItem('password', passwordInput);

    alert('Signup successful!');
    window.location.href = 'login.html'; 
});
