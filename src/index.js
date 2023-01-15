import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Products from './Components/Products'
import Contact from './Components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Products/>
    <Contact
      mapboxToken = {process.env.REACT_APP_MAPBOXTOKEN}
      serviceID = {process.env.REACT_APP_SERVICEID}
      templateID = {process.env.REACT_APP_TEMPLATEID}
      publicKey = {process.env.REACT_APP_PUBLICKEY}
      />  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
