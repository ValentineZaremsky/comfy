import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart/Cart';
import css from './Header.module.sass';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.menu}>
        <div>
          <Link to={'/'}>Home</Link>
        </div>
        <div>
          <Link to={'/products'}>Products</Link>
        </div>
        <div>
          <Link to={'/about'}>About</Link>
        </div>
      </div>
      <div className={css.logo}>
        <Link to={'/'}>comfy</Link>
      </div>
      <Cart />
    </header>
  );
};

export default Header;
