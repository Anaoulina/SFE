// Alert.js
import React from 'react';
import './alertCss.css';

function Alert({ type, message }) {
    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    );
}

export default Alert;
