import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BillContextProvider } from './context/billContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BillContextProvider>
       <App /> 
    </BillContextProvider> 
);
