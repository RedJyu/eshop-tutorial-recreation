import { getElement } from '../utils.js';

const cart = getElement('.cart-overlay');
const close = getElement('.cart-close');
const toggle = getElement('.toggle-cart');

toggle.addEventListener('click', () => {
  cart.classList.add('show');
});
close.addEventListener('click', () => {
  cart.classList.remove('show');
});

export const openCart = () => {
  cart.classList.add('show');
};
