import api from '../API/api';
import { HttpError } from '../API/api'

export const all = () => ({ type: 'ALL' });

export const no = () => ({ type: 'WHITHOUT' });

export const one = () => ({ type: 'ONE' });

export const two = () => ({ type: 'TWO' });

export const three = () => ({ type: 'THREE' });

export const minPrice = () => ({type: 'MIN'});

export const quickDist = () => ({type: 'QUICK'});

export const getId = (id) => ({
  type: 'GET_ID',
  payload: id,
});

export const isFetching = (payload) => ({
  type: 'IS_FETCHING',
  payload,
});

export const thunkId = () => (dispatch) => {
  dispatch(isFetching(true));
  api.getSearchId().then(({ searchId }) => {
    dispatch(getId(searchId));
  });
};

export const getTick = (tickets) => ({
  type: 'GET_TICKETS',
  payload: tickets,
});

let arrTickets = [];

export const thunkTickets = () => (dispatch, getState) => {
  const {
    onLoad: { id },
  } = getState();
  api
    .getAviaTickets(id)
    .then(({ tickets, stop }) => {
      arrTickets.push(...tickets);
      if (stop) {
        dispatch(isFetching(false));
        dispatch(getTick(arrTickets));
      } else {
        dispatch(thunkTickets());
      }
    })
    .catch((err) => {
      if (err instanceof HttpError) dispatch(thunkTickets());
    });
};


