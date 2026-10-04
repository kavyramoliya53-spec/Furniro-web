document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) return;

    // check element exists (important for different pages)
    const nameEl = document.getElementById("userName");
    const emailEl = document.getElementById("userEmail");
    const contactEl = document.getElementById("userContact");

    if (nameEl) nameEl.textContent = currentUser.name;
    if (emailEl) emailEl.textContent = "Email: " + currentUser.email;
    if (contactEl) contactEl.textContent = "Contact: " + currentUser.contact;
});