import React from 'react';
import css from './Price.module.sass';

const Price = () => {
  return (
    <>
      <div className={css.price}>
        <div className={css.header}>Price</div>
        <input type="range" className={css.slider} id="range" aria-label="Price range" />
        <label className={css.value} htmlFor="range">
          Value: $80
        </label>
      </div>
    </>
  );
};

export default Price;
