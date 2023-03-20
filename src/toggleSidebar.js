import { getElement } from './utils.js';

const toggleNav = getElement('.toggle-nav');
const sidebar = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');

toggleNav.addEventListener('click', () => {
  sidebar.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
});
