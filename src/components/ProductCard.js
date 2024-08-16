

import React from 'react';
import '../style/ProductCard.css';
import ImageComponent from './ImageComponent';

const ProductCard = ({ product, addToCart }) => (
  <div className="border p-4">
    <ImageComponent src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <h2 className="text-lg font-bold">{product.name}</h2>
    <p>${product.price.toFixed(2)}</p>
    <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;


