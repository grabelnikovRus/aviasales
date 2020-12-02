import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
  reducerCheck as filter, 
  reducerGetId as onLoad, 
  reducerGetTickets as ticketsArr,
  } from './reducer/reducer';
import App from './components/app/app';

const rootReducer = combineReducers({filter, onLoad, ticketsArr});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const Aviasales = () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  ) 
};

ReactDOM.render(<Aviasales />, document.getElementById('root'));
