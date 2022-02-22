import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';
import { ReactComponent as CaretIcon } from '../../assets/caret.svg';
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import css from './Bag.module.sass';

const Bag = () => {
  return (
    <>
      <div className={css.dummy}>
        <h1>Dummy</h1>
      </div>

      <div className={css.tint}>
        <section className={css.bag}>
          <div className={css.close}>
            <CrossIcon />
          </div>
          <h1 className={css.title}>Your Bag</h1>
          <div className={css.list}>
            <div className={css.item}>
              <div className={css.leftSide}>
                <div className={css.photo}>
                  <img
                    src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                    alt="Mens Cotton Jacket"
                  />
                </div>
                <div className={css.info}>
                  <div className={css.name}>Mens Cotton Jacket</div>
                  <div className={css.price}>$55.99</div>
                </div>
              </div>
              <div className={css.rightSide}>
                <div className={css.quantity}>
                  <div className={css.up}>
                    <CaretIcon />
                  </div>
                  <div className={css.counter}>1</div>
                  <div className={css.down}>
                    <CaretIcon />
                  </div>
                </div>
                <div className={css.remove}>
                  <TrashIcon />
                </div>
              </div>
            </div>
            <div className={css.item}>
              <div className={css.leftSide}>
                <div className={css.photo}>
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt="Mens Casual Premium Slim Fit T-Shirts"
                  />
                </div>
                <div className={css.info}>
                  <div className={css.name}>Mens Casual Premium Slim Fit T-Shirts</div>
                  <div className={css.price}>$22.30</div>
                </div>
              </div>
              <div className={css.rightSide}>
                <div className={css.quantity}>
                  <div className={css.up}>
                    <CaretIcon />
                  </div>
                  <div className={css.counter}>2</div>
                  <div className={css.down}>
                    <CaretIcon />
                  </div>
                </div>
                <div className={css.remove}>
                  <TrashIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={css.total}>
            <div className={css.label}>Total: </div>
            <div className={css.amount}>$100.59</div>
          </div>
          <Link to={'/payment'} className={css.button}>
            <div className={css.caption}>Checkout</div>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Bag;
