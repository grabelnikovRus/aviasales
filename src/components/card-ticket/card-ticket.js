import React from 'react';
import classes from './card-ticket.module.scss';
import { format } from 'date-fns';

const UlTicket = ({ origin, destination, date, duration, stops }) => {
  const departureDirection = `${origin} - ${destination}`;

  const departureTime = format(new Date(date), 'HH:mm');

  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  const travelTime = `${hours}ч ${minutes}м`;

  const countTransfers = `${!stops.length ? 'Без' : stops.length} 
    пересад${stops.length === 0 ? 'ок' : stops.length === 1 ? 'ка' : 'ки'}`;
  const transfers = stops.join(' ');

  return (
    <ul className={`${classes['card-ticket__item']} ${classes.item}`}>
      <li className={classes['item__direction']}>
        <span className={classes['item__title']}>{departureDirection}</span>
        <span className={classes['item__value']}>{departureTime}</span>
      </li>
      <li className={classes['item__time-path']}>
        <span className={classes['item__title']}>В ПУТИ</span>
        <span className={classes['item__value']}>{travelTime}</span>
      </li>
      <li className={classes['item__transfer']}>
        <span className={classes['item__title']}>{countTransfers}</span>
        <span className={classes['item__value']}>{transfers}</span>
      </li>
    </ul>
  );
};

const CardTicket = (tick) => {
  const { price, carrier, segments } = tick;

  const ul = segments.map((el, i) => <UlTicket {...el} key={i} />);

  return (
    <div className={classes['card-ticket']}>
      <ul className={`${classes['card-ticket__info']} ${classes.info}`}>
        <li className={classes['info__prices']}>{price}</li>
        <li className={classes['info__logo']}>
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="airline logo" />
        </li>
      </ul>
      {ul}
    </div>
  );
};

export default CardTicket;
