document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (name.value.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.value.trim() === "") {
            alert("Please enter your message.");
            return;
        }

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Form submitted successfully!");

        form.reset();

    });
});
