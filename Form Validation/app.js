var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var contactName = document.getElementById("contact-name").value;
    if(contactName.length === 0) {
        nameError.innerHTML = "name is required";
        return false;
    }
    if(!contactName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var contactPhone = document.getElementById("contact-phone").value;
    if(contactPhone.length === 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if(contactPhone.length !== 10) {
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    if(!contactPhone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var contactEmail = document.getElementById("contact-email").value;
    if(contactEmail.length === 0) {
        emailError.innerHTML = "Email is required"
        return false;
    }
    if(!contactEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var contactMessage = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - contactMessage.length;

    if(left > 0) {
        messageError.innerHTML = left + "more characters required";
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
}