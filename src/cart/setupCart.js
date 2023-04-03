import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';

const cartItemCountDom = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    //add item
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    //display in DOM
    addToCartDOM(product);
  } else {
  }

  openCart();
};

const init = () => {
  console.log(cart);
};
init();
