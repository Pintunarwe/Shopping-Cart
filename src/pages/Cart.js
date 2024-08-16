// import React from 'react';
// import CartItem from '../components/CartItem';
// import '../style/Cart.css';

// const Cart = ({ cartItems, updateCart, removeFromCart }) => {
//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="p-4">
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <div>
//             {cartItems.map(item => (
//               <CartItem key={item.id} item={item} updateCart={updateCart} removeFromCart={removeFromCart} />
//             ))}
//           </div>
//           <div className="mt-8">
//             <h2 className="text-lg font-bold">Subtotal: ${subtotal.toFixed(2)}</h2>
//             {/* Discounts and Checkout button can be added here */}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;



// Cart.js
import React from 'react';
import CartItem from '../components/CartItem';
import '../style/Cart.css';

const Cart = ({ cartItems, updateCart, removeFromCart }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} updateCart={updateCart} removeFromCart={removeFromCart} />
            ))}
          </div>
          <div className="mt-8 bg-gray-100 p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">Subtotal: ${subtotal.toFixed(2)}</h2>
            {/* Discounts and Checkout button can be added here */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
