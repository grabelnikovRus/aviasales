import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
  reducerCheck as filter, 
  reducerBtn as filterBtn,
  reducerGetId as onLoad, 
  reducerGetTickets as ticketsArr,
} from './reducer';


const rootReducer = combineReducers({filter, filterBtn, onLoad, ticketsArr});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;