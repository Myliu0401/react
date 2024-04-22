import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const h1 = React.createElement('h1', {
  title: '这是一个react'
}, 'hello world',<span>111</span>);

ReactDOM.render(
  /*  <React.StrictMode>
     <App />
   </React.StrictMode>, */
  h1,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
