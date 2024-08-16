import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

const Header = ({ cartItems }) => (
  <header className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold"><Link to="/">E-Commerce</Link></h1>
    <Link to="/cart" className="relative">
      Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
    </Link>
  </header>
);

export default Header;
