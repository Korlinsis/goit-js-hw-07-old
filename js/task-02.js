const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

for (let i = 0; i > ingredients.length; i += 1) {
  const liElement = document.createElement('li');
  liElement.textContent = `${ingredients[i]}`;
}
console.log(liElement);
