import produce from 'immer';
import {GET_LIST} from '../actions/contentAction';

const initialState = {
    list: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
    case GET_LIST:
        const data = [];
        return produce((state, draftState) => {
            draftState.list = data;
        });
    default:
        return state;
    }
};
