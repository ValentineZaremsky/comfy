import React from 'react';
import { Link } from 'react-router-dom';
import { ProductProps } from '../..';
import Header from '../Header/Header';
import Featured from './Featured/Featured';
import css from './Home.module.sass';

interface HomeProps {
  products: Array<ProductProps>;
}

const Home = (props: HomeProps) => {
  return (
    <>
      <section className={css.welcome}>
        <Header />
        <div className={css.container}>
          <div className={css.motto}>Rest, Relax, Unwind</div>
          <div className={css.caption}>Embrace your choices – we do</div>
          <Link to={'products'} className={css.link}>
            <div className={css.button}>Show now</div>
          </Link>
        </div>
      </section>
      <Featured products={props.products} />
    </>
  );
};

export default Home;
