const refs = {
    value: document.querySelector('#value'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    btnDecrement: document.querySelector('[data-action="decrement"]'),
};

const counterValue = refs.value.textContent;
console.log(counterValue);
console.log(typeof counterValue);

const onBtnIncrementClick = counterValue => {
    console.log('Натиснута кнопка +1');
    return counterValue + 1;
};

const onBtnDecrementClick = counterValue => {
    console.log('Натиснута кнопка -1');
    return counterValue - 1;
};

// function onBtnIncrementClick() {
//     console.log('Натиснута кнопка +1');
// }

// function onBtnDecrementClick() {
//     console.log('Натиснута кнопка -1');
// }


refs.btnIncrement.addEventListener('click',onBtnIncrementClick);
refs.btnDecrement.addEventListener('click',onBtnDecrementClick);