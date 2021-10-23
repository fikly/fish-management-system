import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';

const Header = ({title}) => {
    return (
        <div className="header-layout background-primary d-flex justify-content-between align-items-center with-shadow">
            <h1 className="font-600 color-white font-22">{title}</h1>
            <div className="d-flex align-items-center flex-grow-1 justify-content-end">
                <div className="search-form d-flex align-items-center">
                    <BiSearchAlt className="color-greyLight mr-8p font-20" />
                    <input type="text" placeholder="Looking for..." className="form-control form-control-custom" />
                </div>
            </div>
        </div>
    );
};

export default Header;
