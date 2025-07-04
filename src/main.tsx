import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import App from './App';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
);
