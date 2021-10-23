/* eslint-disable no-unused-vars */
import React from 'react';
import {BiBookContent, BiHome} from 'react-icons/bi';
import {useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router';
import {LOGO_ALT} from '~/constants/variable';
import {logoImg} from '~/utils/image';

const Sidebar = () => {
    const history = useHistory();
    const location = useLocation();
    const general = useSelector((state) => state.general);
    const {menuList} = general;

    return (
        <div className="sidebar-layout background-white">
            <div className="logo-content d-flex justify-content-center align-items-center background-primary">
                <img src={logoImg} alt={LOGO_ALT} />
            </div>
            <ul className="sidebar-menu">
                {menuList.map((menu, i) => {
                    return (
                        <li onClick={() => history.push(menu.url)} key={i} className={`d-flex align-items-center font-18 font-400 ${menu.url === location.pathname ? 'active' : ''}`}>
                            <span className="mr-20p"><menu.icon /></span> {menu.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
