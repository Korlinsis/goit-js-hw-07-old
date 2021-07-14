const refs = {
    value: document.querySelector('#value'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    btnDecrement: document.querySelector('[data-action="decrement"]'),
};

let counterValue = Number(refs.value.textContent);

const onBtnIncrementClick = function increment () {
    counterValue += 1;
    refs.value.textContent = counterValue;
};

const onBtnDecrementClick = function decrement () {
    counterValue -= 1;
    refs.value.textContent = counterValue;
};

refs.btnIncrement.addEventListener('click',onBtnIncrementClick);
refs.btnDecrement.addEventListener('click',onBtnDecrementClick);