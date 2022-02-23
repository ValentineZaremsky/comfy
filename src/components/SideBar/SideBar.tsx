import React from 'react';
import Search from './Search/Search';
import Category from './Category/Category';
import Price from './Price/Price';
import { CategoriesProps } from '../..';
import css from './SideBar.module.sass';

interface SideBarProps {
  categories: Array<CategoriesProps>;
}

const SideBar = ({ categories }: SideBarProps) => {
  return (
    <>
      <aside className={css.sideBar}>
        <Search />
        <Category categories={categories} />
        <Price />
      </aside>
    </>
  );
};

export default SideBar;
