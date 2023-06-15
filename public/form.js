const username = document.querySelector("#username")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const sendButton = document.querySelector("#send")

function showHideError(inputBox, errorMessage) {
    const errorBox = document.querySelector(`#${inputBox.id} + .error`);
    errorBox.textContent = errorMessage;
}

function checkInputLength(input, minLength) {
    if (input.value.length < minLength) {
        showHideError(input, `${input.name} powinno zawierać minimum ${minLength} znaków`);
        return false;
    }
    else showHideError(input, '');
    return true;
}

function checkEmail(email) {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (!(regex.test(email.value))) {
        showHideError(email, "Adres email nieprawidłowy");
        return false;
    } else {
        showHideError(email, "");
        return true;
    }
}

sendButton.addEventListener('click', (e) => {
    if(!(checkInputLength(username, 2) && checkInputLength(message, 20) && checkEmail(email))) {
        e.preventDefault();
    }
    else {
        alert("Kliknij \"OK\" aby wysłać formularz. Zostaniesz przekierowany/a na stronę główną.")
    }
})