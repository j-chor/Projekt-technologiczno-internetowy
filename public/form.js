const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const resetButton = document.querySelector("#reset");
const sendButton = document.querySelector("#send");

const minUsernameLength = 6;
const minPasswordLength = 8;

function showOrHideError(input, message) {
    const box = input.parentElement;
    const errorMessage = box.querySelector(".error");
    errorMessage.textContent = message;
}

function checkInputLength(input, minLength) {
    if (input.value.length < minLength) {
        showOrHideError(input, `${input.name} powinno zawierać minimum ${minLength} znaków`);
        return false;
    }
    else showOrHideError(input, '');
    return true;
}
function checkPasswordValue() {
    if (password.value !== password2.value) {
        showOrHideError(password2, "Hasła się różnią!")
        return false;
    }
    else showOrHideError(password2, "")
    return true;
}

function checkEmail(email) {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (!(regex.test(email.value))) {
        showOrHideError(email, "Adres email nieprawidłowy");
        return false;
    } else {
        showOrHideError(email, "");
        return true;
    }
}

resetButton.addEventListener('click', () => {
    console.log("działa");
});

sendButton.addEventListener('click', (e) => {
    if(!(checkInputLength(username, minUsernameLength) && checkInputLength(password, minPasswordLength) && checkPasswordValue() && checkEmail(email))) {
        e.preventDefault();
    }
    // checkInputLength(username, minUsernameLength);
    // checkInputLength(password, minPasswordLength);
    // checkPasswordValue();
    // checkEmail(email);
});
