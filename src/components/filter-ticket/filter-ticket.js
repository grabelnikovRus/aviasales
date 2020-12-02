import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';

import classes from './filter-ticket.module.scss';

const FilterTicket = (props) => {
  console.log(props)
  const { filter, all, no, one, two, three } = props;
  const { checkAllTransfers, checkNoTransfers, checkOneTransfer, checkTwoTransfers,
    checkThreeTransfers } = filter;

  return (
    <ul className={classes['list-filter']}>
      <li className={classes['list-filter__item']}>КОЛИЧЕСТВО ПЕРЕСАДОК</li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input type="checkbox" className={classes.check__input} onChange={all} checked={checkAllTransfers} />
          <span className={classes['check__box']}></span>Все
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input type="checkbox" className={classes.check__input} onChange={no} checked={checkNoTransfers} />
          <span className={classes['check__box']}></span>Без пересадок
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input type="checkbox" className={classes.check__input} onChange={one} checked={checkOneTransfer} />
          <span className={classes['check__box']}></span>1 пересадка
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input type="checkbox" className={classes.check__input} onChange={two} checked={checkTwoTransfers} />
          <span className={classes['check__box']}></span>2 пересадки
        </label>
      </li>
      <li className={classes['list-filter__item']}>
        <label className={`${classes['list-filter__check']} ${classes.check}`}>
          <input type="checkbox" className={classes.check__input} onChange={three} checked={checkThreeTransfers} />
          <span className={classes['check__box']}></span>3 пересадки
        </label>
      </li>
    </ul>
  );
};



const mapStateToProps = (state) => {
  return state
};

const mapDispatchTpProps = (dispatch) =>{
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchTpProps)(FilterTicket);
