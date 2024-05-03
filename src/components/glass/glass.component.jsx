import './glass.component.scss'
import React, { useEffect } from 'react';
import { injectCursorPosition } from '../spotlight/spotlight';


const GlassComponent = ({children}) => {

useEffect(() => {
    document.addEventListener('mousemove', (e) => {
        injectCursorPosition({ x: e.clientX, y: e.clientY });
    });
},[]);

    return (
        <div className="glass">
            <div className="glass-content">
                {children}
            </div>
        </div>
    );
}

export default GlassComponent;