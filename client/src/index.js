import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import ScrollToTop from './App/Common/ScrollToTop/ScrollToTop'

import { store, persistor } from './App/Redux/Store'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ScrollToTop />
        <SnackbarProvider>
           <App />
        </SnackbarProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
