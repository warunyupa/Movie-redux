import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <nav>
      <div className='container'>
        <ul className='nav-wrapper'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
