import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  AMOUNT_OFFERS : 555,
};

ReactDOM.render(
  <React.StrictMode>
    <App amountOffers = {Settings.AMOUNT_OFFERS} />
  </React.StrictMode>,
  document.getElementById('root'));
