import React from 'react';

const Button = ({type, label, action}) => {
    return (
        <button onClick={() => action()} className={`btn custom-btn font-14 ${type}-btn`}>{label}</button>
    );
};

export default Button;
