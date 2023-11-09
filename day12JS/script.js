document.addEventListener("DOMContentLoaded", function() {
    const passwordField = document.getElementById("password");
    const lengthRange = document.getElementById("lengthRange");
    const lengthLabel = document.getElementById("lengthLabel");
    const numberCheckbox = document.getElementById("numberCheckbox");
    const charCheckbox = document.getElementById("charCheckbox");

    let length = 8;
    let integer = false;
    let char = false;

    const generatePassword = () => {
        let string = "abcdefghijklmnopqrstuvwxyz";
        if (integer) {
            string += "123456789";
        }
        if (char) {
            string += "!@#$%^&*()";
        }
        let newpassword = "";
        for (let i = 0; i < length; i++) {
            newpassword += string.charAt(Math.floor(Math.random() * string.length + 1));
        }
        passwordField.value = newpassword;
    };

    generatePassword();

    lengthRange.addEventListener("input", () => {
        length = parseInt(lengthRange.value);
        lengthLabel.textContent = `Length: ${length}`;
        generatePassword();
    });

    numberCheckbox.addEventListener("change", () => {
        integer = numberCheckbox.checked;
        generatePassword();
    });

    charCheckbox.addEventListener("change", () => {
        char = charCheckbox.checked;
        generatePassword();
    });

});
