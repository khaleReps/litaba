import React from 'react';

function Header() {
  return (
    <header>
      <h1>LITABA</h1>
      <nav>
        <ul className='header'>
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Sport</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Tech</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;