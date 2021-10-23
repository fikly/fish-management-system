import produce from 'immer';
import {BiBookContent, BiHome} from 'react-icons/bi';
import {TOGGLE_MENU} from '../actions/generalAction';

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
    showMenu: false,
};
const generalReducer = produce((state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_MENU:
        state.showMenu = !state.showMenu;
    default:
        return state;
    }
});

export default generalReducer;
