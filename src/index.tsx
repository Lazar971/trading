import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import reportWebVitals from './reportWebVitals';

/* const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

ws.onopen = function (event) {
  this.send(JSON.stringify({
    event: 'subscribe',
    channel: 'ticker',
    symbol: 'tBTCEUR'
  }))
  this.send(JSON.stringify({
    event: 'subscribe',
    channel: 'ticker',
    symbol: 'tBTCUSD'
  }))
}

ws.onmessage = (msg) => console.log(msg); */

/* const w = new ws('wss://api-pub.bitfinex.com/ws/2')
w.on('message', (msg) => console.log(msg)) */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
