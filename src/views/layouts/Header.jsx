import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';

const Header = ({title}) => {
    return (
        <div className="header-layout background-white d-flex justify-content-between align-items-center with-shadow">
            <h1 className="font-600 color-primary font-22">{title}</h1>
            <div className="d-flex align-items-center flex-grow-1 justify-content-end align-items-center">
                <button className="btn custom-btn primary-btn mr-32p font-14">+ Add New</button>
                <div className="search-form d-flex align-items-center with-shadow">
                    <BiSearchAlt className="color-greyLight mr-8p font-20" />
                    <input type="text" placeholder="Looking for..." className="form-control form-control-custom" />
                </div>
            </div>
        </div>
    );
};

export default Header;
