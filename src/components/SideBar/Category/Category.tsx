import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Category.module.sass';

const Category = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return <div className={css.error}>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div className={css.loading}>Loading...</div>;
  } else {
    let categoryElements = items.map((item) => (
      <li key={item}>
        <Link to={`/products/category/${item}`}>{item}</Link>
      </li>
    ));
    return (
      <>
        <div className={css.category}>
          <div className={css.header}>Category</div>
          <ul className={css.list}>{categoryElements}</ul>
        </div>
      </>
    );
  }
};

export default Category;
