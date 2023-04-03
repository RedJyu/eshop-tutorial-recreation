import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  let companies = ['all', ...new Set(store.map((product) => product.company))];
  const companiesDOM = getElement('.companies');
  companiesDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join('');
  companiesDOM.addEventListener('click', function (e) {
    const element = e.target;
    if (element.classList.contains('company-btn')) {
      let filteredStore = [];
      if (element.textContent === 'all') {
        filteredStore = [...store];
      } else {
        filteredStore = store.filter(
          (product) => product.company === e.target.textContent
        );
      }
      display(filteredStore, getElement('.products-container'), true);
    }
  });
};

export default setupCompanies;
