import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { thunkTickets } from '../../store/actions';
import classes from './tickets.module.scss';
import { Spin } from 'antd';
import 'antd/lib/spin/style/index.css';

import Tickets from './tickets';

const TicketsContainer = ({ filter, filterBtn, tickets, id, fetching, getTick }) => {
  const savegetTick = useCallback(() => getTick(), [getTick]);

  useEffect(() => {
    if (id !== '') savegetTick();
  }, [id, savegetTick]);

  const { checkFilters, checkAll } = filter;
  const { min, quick } = filterBtn;

  const callbackChek = (item) => {
    if (checkAll) return item;

    const template = {
      0: 'whithout', 
      1: 'one', 
      2: 'two', 
      3: 'three'
    };

    return item.segments.every(el => checkFilters.includes(template[el.stops.length]))
  };

  const callbackSort = (prev, cur) => {
    if (min) return prev.price < cur.price ? -1 : 1;
    if (quick) {
      const a = prev.segments.reduce((acc, i) => {
        acc += i.duration;
        return acc;
      }, 0)
      const b = cur.segments.reduce((acc, i) => {
          acc += i.duration;
          return acc;
      }, 0) 
      return a < b ? -1 : 1;
    }
  };

  let ticketsFilterSort = tickets.filter(callbackChek).sort(callbackSort).slice(0, 200);

  if (fetching) {
    return (
      <div className={classes.popup}>
        <Spin />
      </div>
    );
  }

  if (!ticketsFilterSort.length) {
    return (
      <div className={classes.popup}>
        <p className={classes.lack}>По вашему запросу билетов нет</p>
      </div>
    );
  }

  return <Tickets tickets={ticketsFilterSort} />;
};

const mapStateToProps = (state) => {
  const filter = state.filter;
  const filterBtn = state.filterBtn;
  const tickets = state.ticketsArr.arrTickets
  const id = state.onLoad.id;
  const fetching = state.onLoad.isFetching;

  return { filter, filterBtn, tickets, id, fetching };
};

export default connect(mapStateToProps, { getTick: thunkTickets })(TicketsContainer);
