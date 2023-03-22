import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  form.addEventListener('keyup', function () {
    const value = nameInput.value;
    if (value) {
      const filteredStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      display(filteredStore, getElement('.products-container'));
      if (filteredStore.length < 1) {
        const noProducts = getElement('.products-container');
        noProducts.innerHTML = `<h3 class='filter-error'>no such products in our database, sorry</h3>`;
      }
    } else {
      display(store, getElement('.products-container'));
    }
  });
};

export default setupSearch;
