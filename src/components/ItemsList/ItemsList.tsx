import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import { ProductProps } from '../..';
import css from './ItemsList.module.sass';

interface ItemsListProps {
  products: Array<ProductProps>;
}

const ItemsList = (props: ItemsListProps) => {
  let productsItems = props.products.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      description={item.description}
      category={item.category}
      rating={item.rating}
    />
  ));

  return (
    <>
      <section className={css.itemsList}>{productsItems}</section>
    </>
  );
};

export default ItemsList;
