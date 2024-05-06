document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        fetch("https://formspree.io/f/mayrvkor", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(result => {
                alert("Message sent successfully!");
                form.reset(); // Reset the form after successful submission
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Failed to send message.");
            });
    });
});
