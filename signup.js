document.querySelector(".Signup button").addEventListener("click", function () {

    // GET VALUES
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("mail").value.trim();
    const password = document.getElementById("pass").value.trim();
    const address = document.getElementById("address").value.trim();
    const contact = document.getElementById("contect").value.trim();
    const city = document.getElementById("city").value.trim();

    // ✅ VALIDATION
    if (!name || !email || !password || !address || !contact || !city) {
        alert("Please fill all fields!");
        return;
    }

    // ✅ EMAIL FORMAT CHECK
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // GET OLD USERS
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ CHECK DUPLICATE EMAIL
    const isExist = users.some(user => user.email === email);

    if (isExist) {
        alert("This email is already registered!");
        return;
    }

    // CREATE USER OBJECT
    const user = {
        name,
        email,
        password,
        address,
        contact,
        city
    };
    
    // ADD NEW USER
    users.push(user);

    // SAVE USER
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login with your email and password.");

    // GO TO LOGIN
    window.location.href = "login.html";
});

