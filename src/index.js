import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilterProvider } from './context';
import { CartProvider } from './context';
import { ScrollToTop } from './components';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <CartProvider>
        <ToastContainer autoClose = {5000} position = {"bottom-right"} theme = {"colored"} icon={true} />
      <ScrollToTop />
      <App />
   </CartProvider>
    </FilterProvider>
    </Router>
  </React.StrictMode>
);