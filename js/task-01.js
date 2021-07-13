const category = document.querySelectorAll('.item');
console.log(`У списку ${category.length} категорії.`);

for (let i = 0; i < category.length; i += 1) {
    console.log(`Категорія: ${category[i].querySelector('h2').textContent}`);
    console.log(`Кількість елементів: ${category[i].querySelectorAll('li').length}`);
}