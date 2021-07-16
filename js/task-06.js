const inputField = document.querySelector('#validation-input');
const inputDataLength = inputField.getAttribute("data-length");

inputField.addEventListener('blur', onBorderChangeInput);

function onBorderChangeInput() {
    if (inputField.value.length === Number(inputDataLength)) {
        inputField.classList.add("valid");
        inputField.classList.remove("invalid");
          } else {
        inputField.classList.remove("valid");
        inputField.classList.add("invalid");
    };
};
