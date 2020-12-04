import { v1 } from 'uuid';

const initialStateChek = {
  checkFilters: ['whithout'],
  checkAll: false,
};

const filters = ['whithout', 'one', 'two', 'three'];

const reducerCheck = (state = initialStateChek, action) => {
  const {checkFilters, checkAll} = state;
  switch (action.type) {
    case 'ALL':
      return { checkFilters: checkAll ? [] : Array.from(filters), checkAll: !checkAll }
    case 'WHITHOUT':
      const newArrWhithout = checkFilters.includes('whithout') ? checkFilters.filter(el => el !== 'whithout') : [ ...checkFilters, "whithout" ];
      return {checkAll: newArrWhithout.length === 4 ? true : false, checkFilters: newArrWhithout};
    case 'ONE':
      const newArrOne = checkFilters.includes('one') ? checkFilters.filter(el => el !== 'one') : [ ...checkFilters, "one" ];
      return {checkAll: newArrOne.length === 4 ? true : false, checkFilters: newArrOne};
    case 'TWO':
      const newArrTwo = checkFilters.includes('two') ? checkFilters.filter(el => el !== 'two') : [ ...checkFilters, "two" ];
      return {checkAll: newArrTwo.length === 4 ? true : false, checkFilters: newArrTwo};
    case 'THREE':
      const newArrThree = checkFilters.includes('three') ? checkFilters.filter(el => el !== 'three') : [ ...checkFilters, "three" ];
      return {checkAll: newArrThree.length === 4 ? true : false, checkFilters: newArrThree};
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
