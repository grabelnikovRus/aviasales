import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { thunkTickets } from '../../actions/actions';
import classes from './tickets.module.scss';
import { Spin } from 'antd';
import 'antd/lib/spin/style/index.css';

import Tickets from './tickets';

const TicketsContainer = ({ filter, tickets, id, fetching, getTick }) => {
  const savegetTick = useCallback(() => getTick(), [getTick]);

  useEffect(() => {
    if (id !== '') savegetTick();
  }, [id, savegetTick]);

  const {
    checkAllTransfers,
    checkNoTransfers,
    checkOneTransfer,
    checkTwoTransfers,
    checkThreeTransfers,
    min,
    quick,
  } = filter;

  const callbackChek = (item) => {
    if (checkAllTransfers) return item;

    if (checkNoTransfers && checkOneTransfer && checkTwoTransfers)
      return item.segments.every((i) => i.stops.length === 0 || i.stops.length === 1 || i.stops.length === 2);
    if (checkOneTransfer && checkTwoTransfers && checkThreeTransfers)
      return item.segments.every((i) => i.stops.length === 1 || i.stops.length === 2 || i.stops.length === 3);
    if (checkNoTransfers && checkOneTransfer && checkThreeTransfers)
      return item.segments.every((i) => i.stops.length === 0 || i.stops.length === 1 || i.stops.length === 3);
    if (checkNoTransfers && checkTwoTransfers && checkThreeTransfers)
      return item.segments.every((i) => i.stops.length === 0 || i.stops.length === 2 || i.stops.length === 3);

    if (checkNoTransfers && checkOneTransfer)
      return item.segments.every((i) => i.stops.length === 0 || i.stops.length === 1);
    if (checkOneTransfer && checkTwoTransfers)
      return item.segments.every((i) => i.stops.length === 1 || i.stops.length === 2);
    if (checkNoTransfers && checkTwoTransfers)
      return item.segments.evry((i) => i.stops.length === 0 || i.stops.length === 2);
    if (checkOneTransfer && checkThreeTransfers)
      return item.segments.every((i) => i.stops.length === 1 || i.stops.length === 3);
    if (checkTwoTransfers && checkThreeTransfers)
      return item.segments.every((i) => i.stops.length === 2 || i.stops.length === 3);
    if (checkNoTransfers && checkTwoTransfers)
      return item.segments.every((i) => i.stops.length === 0 || i.stops.length === 3);

    if (checkNoTransfers) return item.segments.every((i) => i.stops.length === 0);
    if (checkOneTransfer) return item.segments.every((i) => i.stops.length === 1);
    if (checkTwoTransfers) return item.segments.every((i) => i.stops.length === 2);
    if (checkThreeTransfers) return item.segments.every((i) => i.stops.length === 3);
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
        <Spin className={classes.spin} />
      </div>
    );
  }

  return <Tickets tickets={ticketsFilterSort} />;
};

const mapStateToProps = (state) => {
  const filter = state.filter;
  const tickets = state.ticketsArr.arrTickets
  const id = state.onLoad.id;
  const fetching = state.onLoad.isFetching;

  return { filter, tickets, id, fetching };
};

export default connect(mapStateToProps, { getTick: thunkTickets })(TicketsContainer);
