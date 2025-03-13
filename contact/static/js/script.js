// Function to toggle the mobile menu
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-item");

    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();

    // Loop through links and set the active class
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let submitBtn = document.getElementById("submitBtn");
    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true; // Disable button to prevent multiple clicks

    let formData = new FormData(this);

    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show response from server
        submitBtn.innerHTML = "Submit";
        submitBtn.disabled = false;
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        alert("Error sending message.");
        submitBtn.innerHTML = "Submit";
        submitBtn.disabled = false;
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formStatus = document.getElementById("form-status");

    formStatus.textContent = "Sending message...";
    formStatus.style.color = "white";
    formStatus.style.display = "block";

    setTimeout(() => {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "#FFD700";
    }, 2000);
});





