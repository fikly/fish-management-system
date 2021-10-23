import React from 'react';
import {BiMenu} from 'react-icons/bi';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useLocation} from 'react-router';
import {LOGO_ALT} from '~/constants/variable';
import {TOGGLE_MENU} from '~/states/actions/generalAction';
import {logoImg} from '~/utils/image';

const Sidebar = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const general = useSelector((state) => state.general);
    const {menuList, showMenu} = general;

    return (
        <div className="sidebar-layout background-white">
            <div className="logo-content d-flex align-items-center background-primary">
                <img src={logoImg} alt={LOGO_ALT} />
                <div className="mobile-menu color-white font-32">
                    <BiMenu onClick={() => dispatch({type: TOGGLE_MENU})} />
                </div>
            </div>
            <ul className={`sidebar-menu ${showMenu ? 'show' : ''}`}>
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
