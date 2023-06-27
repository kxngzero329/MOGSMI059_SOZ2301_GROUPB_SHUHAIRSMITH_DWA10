const COUNT_AMOUNT = 1;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-minus]');
const add = document.querySelector('[data-plus]');
const reset = document.querySelector('[data-reset]');

const subtractHandler = () => {
  const newValue = parseInt(number.value) - COUNT_AMOUNT;
  number.value = newValue;
};

const addHandler = () => {
  const newValue = parseInt(number.value) + COUNT_AMOUNT;
  number.value = newValue;
};

const resetHandler = () => {
  const newValue = 0;
  number.value = newValue;
  alert('You have reset the counter to 0')
};

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
reset.addEventListener('click', resetHandler);