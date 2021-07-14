const inputField = document.querySelector('#name-input');
const nameElement = document.querySelector('#name-output');

const defaultName = nameElement.textContent;

inputField.addEventListener('input', onSpanChangeInput);

function onSpanChangeInput() {
    nameElement.textContent = inputField.value;
    if (inputField.value.length === 0) {
    nameElement.textContent = defaultName;
    };
};