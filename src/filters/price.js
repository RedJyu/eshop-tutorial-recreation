import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Price:$${maxPrice}`;

  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Price:$${value}`;
    let filteredStore = store.filter((product) => product.price / 100 <= value);
    display(filteredStore, getElement('.products-container'));
    if (filteredStore.length < 1) {
      const products = getElement('.products-container', true);
      products.innerHTML = `<h3>Sorry nothing matches your price range</h3>`;
    }
  });
};

export default setupPrice;
