import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoriesProps } from '../../..';
import css from './Category.module.sass';

interface CategoryProps {
  categories: Array<CategoriesProps>;
}

const Category = ({ categories }: CategoryProps) => {
  let categoriesElements = categories.map((item) => (
    <li key={item.id}>
      <Link to={`/products/category/${item.id}`}>{item.title}</Link>
    </li>
  ));
  return (
    <>
      <div className={css.category}>
        <div className={css.header}>Categories</div>
        <ul className={css.list}>{categoriesElements}</ul>
      </div>
    </>
  );
};

export default Category;
