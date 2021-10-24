import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import Button from '~/views/components/button';

const Header = ({title}) => {
    return (
        <div className="header-layout background-white d-flex with-shadow">
            <h1 className="font-600 color-primary font-22">{title}</h1>
            <div className="d-flex align-items-center flex-grow-1 justify-content-end align-items-center">
                <Button type="primary" label="+ Add New" action={() => console.log('tes')} />
                <div className="search-form d-flex with-shadow">
                    <BiSearchAlt className="color-greyLight mr-8p font-20" />
                    <input type="text" placeholder="Looking for..." className="form-control form-control-custom" />
                </div>
            </div>
        </div>
    );
};

export default Header;
