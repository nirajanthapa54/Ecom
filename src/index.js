import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';
import { CartProvider } from './context/cartContext';
import { FilterContextProvider } from './context/filterContext';
import { AppProvider } from './context/productcontext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-wc80scdy6lrv8jjp.us.auth0.com"
    clientId="T77FI0gjmwJe05Gdu7ERrGPQmMOn9Izy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AppProvider>
    <FilterContextProvider>
    <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>
);


reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals





