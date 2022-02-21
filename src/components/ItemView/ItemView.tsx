import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Bread from '../Bread/Bread';
import Stars from './Stars/Stars';
import { ProductProps } from '../..';
import css from './ItemView.module.sass';

interface ItemViewProps {
  products: Array<ProductProps>;
}

const ItemView = (props: ItemViewProps): JSX.Element => {
  let { id } = useParams<{ id?: string }>();
  let { products } = props;
  let [product] = Array.from(products).filter(
    (item: ProductProps) => Number(item.id) === Number(id),
  );
  const { title, price, description, category, image } = product;
  const { rate, count } = product.rating;
  const maxStars: number = 5;

  return (
    <>
      <Header />
      <Bread name="Item" />
      <div className={css.itemView}>
        <div className={css.leftSide}>
          <div className={css.photo}>
            <img src={image} alt={title} />
          </div>
        </div>
        <div className={css.rightSide}>
          <div className={css.title}>{title}</div>
          <div className={css.rating}>
            <span className={css.label}>Rating: </span>
            <Stars rate={rate} max={maxStars} />
            <span className={css.numbers}>{rate}</span>
            <span className={css.text}> / </span>
            <span className={css.numbers}>{count}</span>
            <span className={css.text}> votes</span>
          </div>
          <div className={css.purchase}>
            <div className={css.price}>
              <span className={css.label}>Price: </span>
              <span className={css.digits}>${price}</span>
            </div>
            <Link to={'/cart'} className={css.link}>
              <div className={css.button}>Buy now</div>
            </Link>
          </div>
          <div className={css.category}>
            <span className={css.label}>Category: </span>
            {category}
          </div>
          <div className={css.description}>
            <span className={css.label}>Description: </span>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemView;
