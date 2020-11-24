import React from 'react';
import classes from'./filter-ticket.module.scss';

const FilterTicket = () => {
  return (
    <ul className={classes['list-filter']}>
      <li className={classes['list-filter__item']}>КОЛИЧЕСТВО ПЕРЕСАДОК</li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input type="checkbox" className={classes.check__input}/>
          <span className={classes['check__box']}></span>Все
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input type="checkbox" className={classes.check__input}/>
          <span className={classes['check__box']}></span>Бес пересадок
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input type="checkbox" className={classes.check__input}/>
          <span className={classes['check__box']}></span>1 пересадка
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input type="checkbox" className={classes.check__input}/>
          <span className={classes['check__box']}></span>2 пересадки
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input type="checkbox" className={classes.check__input}/>
          <span className={classes['check__box']}></span>3 пересадки
        </label>
      </li>
    </ul>

  );
};

export default FilterTicket;
