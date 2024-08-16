

import React from 'react';
import "../style/CartItem.css";
import ImageComponent from './ImageComponent';

const CartItem = ({ item, updateCart, removeFromCart }) => (
  <div className="flex justify-between items-center border-b py-4">
    <ImageComponent src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
    <h2 className="flex-1 ml-4">{item.name}</h2>
    <div>
      <button onClick={() => updateCart(item, item.quantity - 1)}>-</button>
      <span className="mx-2">{item.quantity}</span>
      <button onClick={() => updateCart(item, item.quantity + 1)}>+</button>
    </div>
    <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
    <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500">Remove</button>
  </div>
);

export default CartItem;

