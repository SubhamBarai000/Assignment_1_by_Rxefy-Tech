import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css'

const Navbar = ({ setCategory }) => {
  //const categories = ['health', 'technology', 'sports', 'business'];

  return (
    <nav>
      {/* {categories.map((category) => (
        <button key={category} onClick={() => setCategory(category)}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))} */}
      <Link to="/">Home</Link>
      <Link to="/bookmarks">Bookmarks</Link>
    </nav>
  );
};

export default Navbar;
