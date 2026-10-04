document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const loginMessage = document.getElementById("loginMessage");

        emailError.textContent = "";
        passwordError.textContent = "";
        loginMessage.textContent = "";

        // Check empty fields
        if (!email) {
            emailError.textContent = "Please enter your email.";
            return;
        }

        if (!password) {
            passwordError.textContent = "Please enter your password.";
            return;
        }

        // Get registered users
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Find user
        const user = users.find(function (item) {
            return item.email.toLowerCase() === email.toLowerCase()
                && item.password === password;
        });

        // User not registered / wrong password
        if (!user) {
            loginMessage.textContent =
                "Invalid email or password. Please register first.";
            loginMessage.style.color = "red";
            return;
        }

        // Login successful
        localStorage.setItem("currentUser", JSON.stringify(user));

        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "green";

        // Redirect to website
        setTimeout(function () {
            window.location.href = "home.html";
        }, 500);
    });


    // Show / hide password
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    if (togglePassword) {

        togglePassword.addEventListener("click", function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";
                togglePassword.classList.remove("fa-eye");
                togglePassword.classList.add("fa-eye-slash");

            } else {

                passwordInput.type = "password";
                togglePassword.classList.remove("fa-eye-slash");
                togglePassword.classList.add("fa-eye");

            }

        });

    }

});