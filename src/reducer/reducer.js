import { v1 } from 'uuid';

const initialState = {
  checkAllTransfers: true,
  checkNoTransfers: true,
  checkOneTransfer: true,
  checkTwoTransfers: true,
  checkThreeTransfers: true,
  min: false, 
  quick: false
};

const checkAllFlags = (obj) => {
  const newObj = { ...obj, checkAllTransfers: true, min: true, quick: true };
  return Object.values(newObj).every((i) => i === true);
};

const reducerCheck = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_TRANSFERS':
      const newObjChecked = { ...state };
      for (let prop in newObjChecked) {
        newObjChecked[prop] = state.checkAllTransfers === false ? true : false;
      }
      return { ...newObjChecked, min: false, quick: false};
    case 'NO_TRANSFERS':
      const newObjNo = Object.assign({}, state, {
        checkNoTransfers: !state.checkNoTransfers,
        checkAllTransfers: false,
        min: false, 
        quick: false
      });
      return !checkAllFlags(newObjNo) ? newObjNo : {...newObjNo, checkAllTransfers: true};
    case 'ONE_TRANSFER':
      const newObjOne = Object.assign({}, state, {
        checkOneTransfer: !state.checkOneTransfer,
        checkAllTransfers: false,
        min: false, 
        quick: false
      });
      return !checkAllFlags(newObjOne) ? newObjOne : {...newObjOne, checkAllTransfers: true};
    case 'TWO_TRANSFERS':
      const newObjTwo = Object.assign({}, state, {
        checkTwoTransfers: !state.checkTwoTransfers,
        checkAllTransfers: false,
        min: false, 
        quick: false
      });
      return !checkAllFlags(newObjTwo) ? newObjTwo : {...newObjTwo, checkAllTransfers: true};
    case 'THREE_TRANSFERS':
      const newObjThree = Object.assign({}, state, {
        checkThreeTransfers: !state.checkThreeTransfers,
        checkAllTransfers: false,
        min: false, 
        quick: false
      });
      return !checkAllFlags(newObjThree) ? newObjThree : {...newObjThree, checkAllTransfers: true};
    case 'GET_MIN_PRICE':
      return { ...state, quick: false, min: true }
    case 'GET_QUICK':
      return { ...state, quick: true, min: false }
    default:
      return state;
  }
};

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
      const newArrTickets = action.arrTickets.map(el => ({ ...el, id: v1() }))
      return { ...state ,arrTickets: newArrTickets };
    default: 
      return state;
  }
}

export { reducerCheck, reducerGetId, reducerGetTickets };
