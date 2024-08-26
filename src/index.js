import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App1 from './components/App1';
import App2 from './components/App2';
import Parent1 from './components/Parent1';
import App3 from './components/App3';
import Func1 from './components/Func1';
import { Func2 } from './Func2';
import Parent2 from './Parent2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App1/>
    <App2/>
    <Parent1/>
    <App3/>
    <Func1/>
    <Func2/>
    <Parent2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
