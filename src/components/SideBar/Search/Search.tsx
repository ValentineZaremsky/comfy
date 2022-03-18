import React from 'react';
import css from './Search.module.sass';

const Search = () => {
  // let state = props.productsPage;

  // let searchText = state.searchText;

  // let onMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   let text = event.target.value;
  //   props.changeMessage(text);
  // };

  return (
    <>
      <div className={css.search}>
        <input type="text" placeholder="Search..." />
        {/* <input type="text" value={searchText} placeholder="Search..." onChange={onMessageChange} /> */}
      </div>
    </>
  );
};

export default Search;
