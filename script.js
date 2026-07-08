const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    });


    if (response.ok) {

        form.style.display = "none";
        successMessage.style.display = "block";
        form.reset();

    } else {

        alert("Something went wrong. Please try again.");

    }

});