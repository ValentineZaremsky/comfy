import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../../assets/cart.svg';
import css from './Cart.module.sass';

const Cart = () => {
  return (
    <>
      <div className={css.cart}>
        <Link to={'/bag'} className={css.link}>
          <CartIcon className={css.icon} />
          <div className={css.bulb}>5</div>
        </Link>
      </div>
    </>
  );
};

export default Cart;
