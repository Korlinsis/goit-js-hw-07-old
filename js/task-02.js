const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const liElements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  
  const liElement = document.createElement('li');
  liElement.textContent = ingredients[i];

  liElements.push(liElement);
}

const ulElement = document.querySelector('#ingredients');

ulElement.append(...liElements);
