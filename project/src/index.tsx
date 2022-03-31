import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getAuthAction, fetchOffersAction } from './store/api-actions';
import App from './components/app/app';
import { reviews } from './mocks/review';
import { store } from './types/state';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnyAction } from '@reduxjs/toolkit';

store.dispatch(fetchOffersAction() as unknown as AnyAction);
store.dispatch(getAuthAction() as unknown as AnyAction);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
