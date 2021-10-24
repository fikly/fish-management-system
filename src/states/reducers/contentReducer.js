import produce from 'immer';
import {SET_LIST} from '../actions/contentAction';

const initialState = {
    list: [],
};
const contentReducer = produce((state = initialState, action) => {
    switch (action.type) {
    case SET_LIST:
        state.list = action.data;
    default:
        return state;
    }
});

export default contentReducer;
