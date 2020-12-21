import { v1 } from 'uuid';

const initialStateChek = {
  checkFilters: ['whithout'],
  checkAll: false,
};

const filters = ['whithout', 'one', 'two', 'three'];

const reducerCheck = (state = initialStateChek, action) => {
  const {checkFilters, checkAll} = state;
  switch (action.type) {
    case 'CHANGE_FILTER':
      if (action.payload === 'all') {
        return { checkFilters: checkAll ? [] : Array.from(filters), checkAll: !checkAll };
      } else {
        const newArr = checkFilters.includes(action.payload) ? checkFilters.filter(el => el !== action.payload) : [ ...checkFilters, action.payload ];
        return {checkAll: newArr.length === 4 ? true : false, checkFilters: newArr};
      }
    default:
      return state;
  }
};

const initialStateBtn = {
  min: false, 
  quick: false
};

const reducerBtn = (state = initialStateBtn, action) => {
  switch(action.type) {
    case 'MIN':
      return {min: !state.min, quick: false}
    case 'QUICK':
      return {min: false, quick: !state.quick}
    default:
      return state
  }
}

const reducerGetId = (state = {id: '', isFetching: false}, action) => {
  switch (action.type) {
    case 'GET_ID':
      return {...state, id: action.payload};
    case 'IS_FETCHING':
      return {...state, isFetching: action.payload};
    default:
      return state
  }
}

const reducerGetTickets = (state = {arrTickets: []}, action) => {
  switch (action.type) {
    case 'GET_TICKETS':
      const newArrTickets = action.payload.map(el => ({ ...el, id: v1() }))
      return { ...state ,arrTickets: newArrTickets };
    default: 
      return state;
  }
}

export { reducerCheck, reducerBtn, reducerGetId, reducerGetTickets };
