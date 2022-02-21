import React from 'react';
import Search from './Search/Search';
import Category from './Category/Category';
import Price from './Price/Price';
import css from './SideBar.module.sass';

const SideBar = () => {
  return (
    <>
      <aside className={css.sideBar}>
        <Search />
        <Category />
        <Price />
      </aside>
    </>
  );
};

export default SideBar;
