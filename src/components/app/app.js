import React from 'react';
import classes from './app.module.scss';
import logo from './logo.png'
import '../../font/font.scss';

import FilterTicket from '../filter-ticket/filter-ticket';
import CardTicket from '../card-ticket/card-ticket'

const App = () => {
  
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img className={classes['header__logo']} src={logo} alt="site logo"/>
      </header>
      <main className={classes.main}>
        <FilterTicket />
        <div className={classes['list-ticket']}>
          <button type="button" className={classes['list-ticket__btn']}>САМЫЙ ДЕШЕВЫЙ</button>
          <button type="button" className={classes['list-ticket__btn']}>САМЫЙ БЫСТРЫЙ</button>
          <CardTicket />
          <CardTicket />
          <CardTicket />
        </div>
      </main>
    </div>
  );
};

export default App;
