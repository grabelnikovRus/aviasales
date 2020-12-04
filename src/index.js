import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import store from './store/configureStore'

const Aviasales = () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  ) 
};

ReactDOM.render(<Aviasales />, document.getElementById('root'));
