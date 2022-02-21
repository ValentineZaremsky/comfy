import React from 'react';
import { Link } from 'react-router-dom';
import { ProductProps } from '../..';
import css from './Item.module.sass';

const Item = (props: ProductProps): JSX.Element => {
  return (
    <>
      <div className={css.product}>
        <Link to={`/products/${props.id}`}>
          <div className={css.photo}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={css.name}>{props.title}</div>
          <div className={css.price}>${props.price}</div>
        </Link>
      </div>
    </>
  );
};

export default Item;
