


// import React, { useState, useEffect } from 'react';
// import ProductCard from '../components/ProductCard';
// import productsData from '../data/products.json';
// import images from '../utils/importImages';

// const Home = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const updatedProducts = productsData.map(product => ({
//       ...product,
//       image: images[product.image]
//     }));
//     setProducts(updatedProducts);
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//       {products.map(product => (
//         <ProductCard key={product.id} product={product} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// };

// export default Home;


// Home.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import images from '../utils/importImages';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const updatedProducts = productsData.map(product => ({
      ...product,
      image: images[product.image]
    }));
    setProducts(updatedProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;
