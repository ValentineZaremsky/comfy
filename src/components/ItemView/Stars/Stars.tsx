import React from 'react';
import { ReactComponent as StarIcon } from '../../../assets/star.svg';
import css from './Stars.module.sass';

interface StarsProps {
  rate: number;
  max: number;
}

const Stars = ({ rate, max }: StarsProps) => {
  let percent = 100;
  const starLine = [];

  for (let i = 0; i < max; i++) {
    if (rate - i < 0) percent = 0;
    else if (rate - i < 1) percent = (Math.asin(2 * (rate - i) - 1) / Math.PI + 0.5) * 100;
    else percent = 100;

    starLine.push(
      <div className={css.out} key={i}>
        <StarIcon className={css.icon} />
        <div className={css.in} style={{ width: `${percent}%` }}>
          <StarIcon className={css.icon} />
        </div>
      </div>,
    );
  }

  return <div className={css.stars}>{starLine}</div>;
};

export default Stars;
