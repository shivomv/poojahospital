// Validate Data 
function validateName() {
    var name = document.forms["contact-form"]["name"].value;
    var nameRegex = /^[A-Za-z]+$/;
    var errorElement = document.getElementById("error-msg");
    var submitBtn = document.getElementById("submitBtn");

    if (!name.match(nameRegex)) {
        errorElement.innerText = "Error: Name should only contain letters";
        submitBtn.disabled = true;
    } else {
        errorElement.innerText = "";
        submitBtn.disabled = false;
    }
}

function validatePhone() {
    var phone = document.forms["contact-form"]["phone"].value;
    var phoneRegex = /^[0-9]{10}$/;
    var errorElement = document.getElementById("error-msg");
    var submitBtn = document.getElementById("submitBtn");

    if (!phone.match(phoneRegex)) {
        errorElement.innerText = "Error: Phone number should be a valid mobile number";
        submitBtn.disabled = true;
    } else {
        errorElement.innerText = "";
        submitBtn.disabled = false;
    }
}

function validateAge() {
    var age = document.forms["contact-form"]["age"].value;
    var errorElement = document.getElementById("error-msg");
    var submitBtn = document.getElementById("submitBtn");

    if (isNaN(age) || age <= 0 || age > 120) {
        errorElement.innerText = "Error: Age should be a valid age";
        submitBtn.disabled = true;
    } else {
        errorElement.innerText = "";
        submitBtn.disabled = false;
    }
}

function validateGender() {
    var gender = document.forms["contact-form"]["gender"].value;
    var errorElement = document.getElementById("error-msg");
    var submitBtn = document.getElementById("submitBtn");

    if (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female") {
        errorElement.innerText = "Error: Gender should be Male or Female";
        submitBtn.disabled = true;
    } else {
        errorElement.innerText = "";
        submitBtn.disabled = false;
    }
}

function validateForm() {
    // You can implement the overall form validation logic here if needed
    // This function will be called when the form is submitted
    // Return true or false based on the overall validation result
}
// Send Data By Email 
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