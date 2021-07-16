const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputRange.addEventListener('input', onTextSizeChangeInput);

function onTextSizeChangeInput() {
    spanText.style.fontSize = `${inputRange.value}px`;
};