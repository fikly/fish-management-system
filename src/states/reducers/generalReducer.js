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
const generalReducer = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_MENU:
        return {
            ...state,
            showMenu: !state.showMenu,
        };
    case SET_MODAL_STATUS:
        return {
            ...state,
            showModal: action.data,
        };
    default:
        return state;
    }
};

export default generalReducer;
