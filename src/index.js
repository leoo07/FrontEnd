import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Style from './components/LandingPage.module.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={Style.bgimage}>
    <App />
    </div>
  </React.StrictMode>
);
reportWebVitals();
