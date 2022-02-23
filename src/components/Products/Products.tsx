import React from 'react';
import Header from '../Header/Header';
import Bread from '../Bread/Bread';
import SideBar from '../SideBar/SideBar';
import ItemsList from '../ItemsList/ItemsList';
import { CategoriesProps, ProductProps } from '../..';
import css from './Products.module.sass';

interface ProductsProps {
  categories: Array<CategoriesProps>;
  products: Array<ProductProps>;
}

const Products = ({ categories, products }: ProductsProps) => {
  return (
    <>
      <Header />
      <Bread name="Products" />
      <section className={css.products}>
        <SideBar categories={categories} />
        <ItemsList products={products} />
      </section>
    </>
  );
};

export default Products;
