const categoriesElem = document.querySelector('#categories');
const categoriesArr = [...categoriesElem.children];
console.log(`Number of categories: ${categoriesArr.length}`);

categoriesArr.forEach(category => {    
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.childElementCount}`);    
});

// другий варіант//

// categoriesArr.forEach(category => {    
//   const titleEl = category.querySelector('h2');
//   const itemsEl = category.querySelectorAll('ul li');

//   console.log(`Category: ${titleEl.textContent}`);
//   console.log(`Elements: ${itemsEl.length}`);    
// });



