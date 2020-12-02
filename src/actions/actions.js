import api from '../API/api';

export const all = () => ({ type: 'ALL_TRANSFERS' });

export const no = () => ({ type: 'NO_TRANSFERS' });

export const one = () => ({ type: 'ONE_TRANSFER' });

export const two = () => ({ type: 'TWO_TRANSFERS' });

export const three = () => ({ type: 'THREE_TRANSFERS' });

export const minPrice = () => ({type: 'GET_MIN_PRICE'});

export const quickDist = () => ({type: 'GET_QUICK'});

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
  arrTickets: tickets,
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
      if (err.message === '500') dispatch(thunkTickets());
    });
};


