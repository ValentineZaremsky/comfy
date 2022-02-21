import React from 'react';
import { Link } from 'react-router-dom';
import ItemsList from '../../ItemsList/ItemsList';
import { ProductProps } from '../../..';
import css from './Featured.module.sass';

interface FeaturedProps {
  products: Array<ProductProps>;
}

const Featured = (props: FeaturedProps) => {
  let longList = props.products.slice();
  let position = Math.floor(Math.random() * (longList.length - 2));
  let shortList = longList.splice(position, 3);

  return (
    <>
      <section className={css.featured}>
        <h1 className={css.title}>Featured</h1>
        <div className={css.list}>
          <ItemsList products={shortList} />
        </div>
        <Link to={'products'} className={css.link}>
          <div className={css.button}>All products</div>
        </Link>
      </section>
    </>
  );
};

export default Featured;
