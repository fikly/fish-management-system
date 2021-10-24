import produce from 'immer';
import {KOTA, PROVINSI, UKURAN} from '~/constants/variable';
import {FILTER_LIST, SEARCH_LIST, SET_LIST, SET_SORT_FILTER, SORT_LIST} from '../actions/contentAction';

const initialState = {
    list: [],
    sortFilter: {},
};
const sortingList = ( a, b, name, order) => {
    const objA = (name === 'size' || name === 'price' ? parseInt(a[name]) : a[name]);
    const objB = (name === 'size' || name === 'price' ? parseInt(b[name]) : b[name]);
    if ( order === 'asc' ) {
        if (objA < objB) {
            return -1;
        }
        if (objA > objB) {
            return 1;
        }
        return 0;
    }

    if (objA > objB) {
        return -1;
    }
    if (objA < objB) {
        return 1;
    }
    return 0;
};
const contentReducer = produce((state = {...initialState}, action) => {
    switch (action.type) {
    case SET_LIST:
        state.list = action.data;
        initialState.list = action.data;
        break;
    case SEARCH_LIST:
        const search = action.data.toLowerCase();
        const searchList = initialState.list.filter((row) => (
            (row.komoditas && row.komoditas.toLowerCase().indexOf(search) > -1) ||
            (row.area_provinsi && row.area_provinsi.toLowerCase().indexOf(search) > -1) ||
            (row.area_kota && row.area_kota.toLowerCase().indexOf(search) > -1) ||
            (row.size && row.size.toLowerCase().indexOf(search)) > -1 ||
            (row.price && row.price.toLowerCase().indexOf(search)) > -1
        ));
        state.list = searchList;
        break;
    case SET_SORT_FILTER:
        const sortFilter = action.data;
        state.sortFilter = sortFilter;
        break;
    case FILTER_LIST:
        const filter = action.data;
        const provinceFilter = (filter[PROVINSI] ? filter[PROVINSI].value.toLowerCase() : '');
        const cityFilter = (filter[KOTA] ? filter[KOTA].value.toLowerCase() : '');
        const sizeFilter = (filter[UKURAN] ? filter[UKURAN].value.toLowerCase() : '');

        const filterList = initialState.list.filter((row) => (
            (row.area_provinsi && row.area_provinsi.toLowerCase().indexOf(provinceFilter) > -1) &&
            (row.area_kota && row.area_kota.toLowerCase().indexOf(cityFilter) > -1) &&
            (row.size && row.size.toLowerCase().indexOf(sizeFilter)) > -1
        ));
        state.list = filterList;
        break;
    case SORT_LIST:
        const sort = action.data;
        const sorting = sort.split('-');
        state.list.sort((a, b) => sortingList(a, b, sorting[0], sorting[1]));
    default:
        return state;
    }
});

export default contentReducer;
