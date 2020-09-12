import React from 'react';
import { BookContext } from '../../contexts/BookContext';

const Navbar = () => {
  const { books } = React.useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to the through</p>
    </div>
  );
};

export default Navbar;
