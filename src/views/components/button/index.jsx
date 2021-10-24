import React from 'react';

const Button = ({type, label, action, className, Icon}) => {
    return (
        <button onClick={() => action()} className={`btn custom-btn ${type}-btn ${className}`}>
            {Icon &&
            <Icon />}
            {label}
        </button>
    );
};

export default Button;
