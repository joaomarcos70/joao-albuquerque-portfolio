import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoadingComponent from './components/loading/loading-component'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <LoadingComponent/>
);
reportWebVitals();
