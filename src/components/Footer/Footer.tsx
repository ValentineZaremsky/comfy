import React from 'react';
import css from './Footer.module.sass';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.copyright}>
          <span className={css.logo}>comfy</span>
          <span className={css.copysign}>&copy;</span>
          <span className={css.copyyear}>2022</span>
        </div>
        <div className={css.contacts}>
          <div className={css.phone}>+1 852 462 753</div>
          <div className={css.email}>sales@comfy.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
