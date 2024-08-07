import React from 'react';
import './slogan.scss';

const openLink = () => {
    window.open("https://picpay.com/");
 }

const Slogan = () => {
    return (
        <>
        
        <div className="slogan-container">
            <div className="slogan-content">
                <h1>João Albuquerque</h1>
                <h2>desenvolvedor de software</h2>
                <p className="subtext">
                    Eu sou um desenvolvedor front-end especializado na construção de experiências digitais.
                    Atualmente, eu estou trabalhando no <span onClick={() => openLink()} className="highlight">Picpay</span>
                </p>
                <div className="cv-button"></div>
            </div>
            <div className="spliner-viwer">
                <spline-viewer url="https://prod.spline.design/YRfReBj71YbaxhBf/scene.splinecode"></spline-viewer>
            </div>
        </div>
        </>
    );
}

export default Slogan;