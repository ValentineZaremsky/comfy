import React from 'react';
import Header from '../Header/Header';
import Bread from '../Bread/Bread';
import css from './About.module.sass';

const About = () => {
  return (
    <>
      <Header />
      <Bread name="About" />
      <section className={css.about}>
        <h1 className={css.title}>Our History</h1>
        <p className={css.text}>
          Colonies something incredible is waiting to be known Flatland cosmic fugue Rig Veda
          tendrils of gossamer clouds. Dream of the mind's eye great turbulent clouds vastness is
          bearable only through love radio telescope Sea of Tranquility preserve and cherish that
          pale blue dot. Vanquish the impossible muse about two ghostly white figures in coveralls
          and helmets are softly dancing the only home we've ever known bits of moving fluff
          permanence of the stars?
        </p>
      </section>
    </>
  );
};

export default About;
