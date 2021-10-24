import produce from 'immer';
import {BiBookContent, BiHome} from 'react-icons/bi';
import {SET_MODAL_STATUS, TOGGLE_MENU} from '../actions/generalAction';

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
    showModal: false,
};
const generalReducer = produce((state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_MENU:
        state.showMenu = !state.showMenu;
    case SET_MODAL_STATUS:
        state.showModal = action.data;
        break;
    default:
        return state;
    }
});

export default generalReducer;
