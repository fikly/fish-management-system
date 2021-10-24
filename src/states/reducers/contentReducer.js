import produce from 'immer';
import {SEARCH_LIST, SET_LIST} from '../actions/contentAction';

const initialState = {
    list: [],
};
const contentReducer = produce((state = {...initialState}, action) => {
    switch (action.type) {
    case SET_LIST:
        state.list = action.data;
        initialState.list = action.data;
        break;
    case SEARCH_LIST:
        const search = action.data;
        const filterList = initialState.list.filter((row) => (
            (row.komoditas && row.komoditas.toLowerCase().indexOf(search) > -1) ||
            (row.area_provinsi && row.area_provinsi.toLowerCase().indexOf(search) > -1) ||
            (row.area_kota && row.area_kota.toLowerCase().indexOf(search) > -1) ||
            (row.size && row.size.toLowerCase().indexOf(search)) > -1 ||
            (row.price && row.price.toLowerCase().indexOf(search)) > -1
        ));
        state.list = filterList;
        break;
    default:
        return state;
    }
});

export default contentReducer;
