import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nameFilter } from '../../store/actions';

import classes from './filter-ticket.module.scss';

const FilterTicket = (props) => {
  const { filter, nameFilt } = props;
  const { checkFilters, checkAll } = filter;

  const getNameFilter = (event) => {
    nameFilt(event.target.name);
  };

  return (
    <ul className={classes['list-filter']}>
      <li className={classes['list-filter__item']}>КОЛИЧЕСТВО ПЕРЕСАДОК</li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input
            type="checkbox"
            className={classes.check__input}
            onChange={(e) => getNameFilter(e)}
            name="all"
            checked={checkAll}
          />
          <span className={classes['check__box']}></span>Все
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input
            type="checkbox"
            className={classes.check__input}
            onChange={(e) => getNameFilter(e)}
            name="whithout"
            checked={checkFilters.includes('whithout')}
          />
          <span className={classes['check__box']}></span>Без пересадок
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input
            type="checkbox"
            className={classes.check__input}
            onChange={(e) => getNameFilter(e)}
            name="one"
            checked={checkFilters.includes('one')}
          />
          <span className={classes['check__box']}></span>1 пересадка
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input
            type="checkbox"
            className={classes.check__input}
            onChange={(e) => getNameFilter(e)}
            name="two"
            checked={checkFilters.includes('two')}
          />
          <span className={classes['check__box']}></span>2 пересадки
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input
            type="checkbox"
            className={classes.check__input}
            onChange={(e) => getNameFilter(e)}
            name="three"
            checked={checkFilters.includes('three')}
          />
          <span className={classes['check__box']}></span>3 пересадки
        </label>
      </li>
    </ul>
  );
};

FilterTicket.defaultProps = {
  filter: {
    checkFilters: ['whithout'],
    checkAll: false,
  },
  nameFilt: () => {},
};

FilterTicket.propTypes = {
  filter: PropTypes.shape({
    checkFilters: PropTypes.arrayOf(PropTypes.string),
    checkAll: PropTypes.bool
  }),
  nameFilt: PropTypes.func
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { nameFilt: nameFilter })(FilterTicket);


