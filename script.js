function validateForm() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Name validation (A-Z)
    var nameRegex = /^[A-Za-z]+$/;
    if (!name.match(nameRegex)) {
        alert("Please enter a valid name with only alphabets (A-Z).");
        return false;
    }

    // Email validation (@)
    var emailRegex = /@/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address containing '@'.");
        return false;
    }

    // Password validation (1 Upper case, 1 Digit, 1 Special character, minimum 8 characters)
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordRegex)) {
        alert("Please enter a valid password with 1 upper case, 1 digit, 1 special character, and at least 8 characters.");
        return false;
    }

    // Checkbox validation
    var checkbox = document.getElementById("cb1");
    if (!checkbox.checked) {
        alert("Please agree to the terms and conditions.");
        return false;
    }

    // If all validations pass, the form is submitted
    alert("Form submitted successfully!");
    return true;
}
