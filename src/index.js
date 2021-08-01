import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Calculadora from './containers/Calculadora';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Calculadora />
  </Provider>,
  document.getElementById('root')
);

