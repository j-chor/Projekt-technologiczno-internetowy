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
    }
    else showOrHideError(input, '');
}
function checkPasswordValue() {
    if (password.value !== password2.value) {
        showOrHideError(password2, "Hasła się różnią!")
    }
}

function checkEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{​​1,3}​​\.[0-9]{​​1,3}​​\.[0-9]{​​1,3}​​\.[0-9]{​​1,3}​​\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{​​2,}​​))$/
    if (!(regex.test(email.value))) {
        showOrHideError(email, "Adres email nieprawidłowy");
    } else {
        showOrHideError(email, "");
    }
}

resetButton.addEventListener('click', () => {
    console.log("działa");
});

sendButton.addEventListener('click', (e) => {
    checkInputLength(username, minUsernameLength);
    checkInputLength(password, minPasswordLength);
    checkPasswordValue();
    checkEmail(email);
    
});
