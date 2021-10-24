import React from 'react';

const Button = ({type, label, action, className}) => {
    return (
        <button onClick={() => action()} className={`btn custom-btn ${type}-btn ${className}`}>{label}</button>
    );
};

export default Button;
