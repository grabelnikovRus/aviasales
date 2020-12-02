import React, { useEffect } from 'react';
import classes from './app.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import logo from './logo.png';
import '../../font/font.scss';

import FilterTicket from '../filter-ticket/filter-ticket';
import Tickets from '../tickets/tickets-container';

const App = ({ thunkId, minPrice, quickDist }) => {
  useEffect(() => thunkId(), [thunkId])

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img className={classes['header__logo']} src={logo} alt="site logo"/>
      </header>
      <main className={classes.main}>
        <FilterTicket />
        <div className={classes['list-ticket']}>
          <button type="button" onClick={minPrice} className={classes['list-ticket__btn']}>САМЫЙ ДЕШЕВЫЙ</button>
          <button type="button" onClick={quickDist} className={classes['list-ticket__btn']}>САМЫЙ БЫСТРЫЙ</button>
          <Tickets />
        </div>
      </main>
    </div>
  );
};

const mapStateTpProps = ({thunkId, min, quick}) => {
  return { thunkId, min, quick }
}

const mapDispatchTpProps = (dispatch) => {
  const { thunkId, minPrice, quickDist } = bindActionCreators(actions, dispatch)
  return { thunkId, minPrice, quickDist }
}

export default connect(mapStateTpProps, mapDispatchTpProps)(App);
