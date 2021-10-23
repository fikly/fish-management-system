import {BiBookContent, BiHome} from 'react-icons/bi';
import {GET_MENU_LIST} from '../actions/generalAction';

const initialState = {
    menuList: [
        {
            title: 'Dashboard',
            icon: BiHome,
            url: '#',
        },
        {
            title: 'Content',
            icon: BiBookContent,
            url: '/',
        },
    ],
};
export default (state = initialState, action) => {
    switch (action.type) {
    case GET_MENU_LIST:
        return state.menuList;
    default:
        return state;
    }
};
