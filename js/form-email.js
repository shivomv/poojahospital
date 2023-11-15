document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        submitForm();
    });

    function submitForm() {
        // Get form data
        var formData = new FormData(form);

        // Send data to Google Apps Script
        fetch("https://script.google.com/macros/s/AKfycbx1bF6L2rIcI6FIqdfk4bprtT9QIMbcdhbNR6YU4A-5qPEGKsnlzgo3Sc093DFs4hjC/exec", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // console.log("Form submitted successfully:", data);
            alert("Form Submitted Successfully.");
            form.reset();
            // Handle success, e.g., show a thank you message
        })
        .catch(error => {
            console.error("Error submitting form:");
            // console.error("Error submitting form:", error);
            // Handle error, e.g., show an error message
        });
    }
});