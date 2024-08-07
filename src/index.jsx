import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import LandingPageComponent from './components/landing-page/landing-page-component';
import Header from './components/header/header';
import Slogan from './components/slogan/slogan';
import About from './components/about/about';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Slogan/>
            <About/>
            <LandingPageComponent/>
        </div>
    );
}

root.render(<App/>);
reportWebVitals();
