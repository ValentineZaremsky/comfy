import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import css from './Bread.module.sass';

interface BreadProps {
  name: string;
}
interface BreadFunc {
  (name: BreadProps): JSX.Element;
}

const Bread: BreadFunc = (props) => {
  return (
    <section className={css.bread}>
      <div className={css.container}>
        <div className={css.link}>
          <Link to={'/'}>Home</Link>
        </div>
        <div className={css.separator}>/</div>
        <div className={css.link}>{props.name}</div>
      </div>
    </section>
  );
};

export default Bread;
