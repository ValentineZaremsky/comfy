import React from 'react';
import css from './Search.module.sass';

const Search = () => {
  return (
    <>
      <div className={css.search}>
        <input type="text" placeholder="Search..." />
      </div>
    </>
  );
};

export default Search;
