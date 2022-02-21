import React from 'react';
import Header from '../Header/Header';
import Bread from '../Bread/Bread';
import SideBar from '../SideBar/SideBar';
import ItemsList from '../ItemsList/ItemsList';
import { ProductProps } from '../..';
import css from './Products.module.sass';

interface ProductsProps {
  products: Array<ProductProps>;
}

const Products = (props: ProductsProps) => {
  return (
    <>
      <Header />
      <Bread name="Products" />
      <section className={css.products}>
        <SideBar />
        <ItemsList products={props.products} />
      </section>
    </>
  );
};

export default Products;
