import './glass.component.scss'
import React from 'react';

const GlassComponent = ({children}) => {
    return (
        <div className="glass">
            <div className="glass-content">
                {children}
            </div>
        </div>
    );
}

export default GlassComponent;