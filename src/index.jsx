import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoadingComponent from './components/loading/home-component'
import reportWebVitals from './reportWebVitals';
import LandingPageComponent from './components/landing-page/landing-page-component';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <div className="App">
            <LandingPageComponent/>
        </div>
    );
}

root.render(<App/>);

reportWebVitals();
