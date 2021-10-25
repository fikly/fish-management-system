import {KOTA, PROVINSI, UKURAN, URUTKAN} from '~/constants/variable';
import {SET_LIST, SET_QUERY_LIST} from '../actions/contentAction';

const initialState = {
    list: [],
    originalList: [],
    queryList: {},
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_LIST:
        return {
            ...state,
            list: action.data,
            originalList: action.data,
        };
    case SET_QUERY_LIST:
        const query = {
            ...state.queryList,
            ...action.data,
        };
        const originalList = state.originalList;
        const search = (query['search'] ? query['search'].toLowerCase() : '');
        const searchList = originalList.filter((row) => (
            (row.komoditas && row.komoditas.toLowerCase().indexOf(search) > -1) ||
            (row.area_provinsi && row.area_provinsi.toLowerCase().indexOf(search) > -1) ||
            (row.area_kota && row.area_kota.toLowerCase().indexOf(search) > -1) ||
            (row.size && row.size.toLowerCase().indexOf(search)) > -1 ||
            (row.price && row.price.toLowerCase().indexOf(search)) > -1
        ));

        const provinceFilter = (query[PROVINSI] ? query[PROVINSI].value.toLowerCase() : '');
        const cityFilter = (query[KOTA] ? query[KOTA].value.toLowerCase() : '');
        const sizeFilter = (query[UKURAN] ? query[UKURAN].value.toLowerCase() : '');
        const filterList = searchList.filter((row) => (
            (row.area_provinsi && row.area_provinsi.toLowerCase().indexOf(provinceFilter) > -1) &&
            (row.area_kota && row.area_kota.toLowerCase().indexOf(cityFilter) > -1) &&
            (row.size && row.size.toLowerCase().indexOf(sizeFilter)) > -1
        ));

        const sort = query[URUTKAN];
        if (sort) {
            const sorting = sort.value.split('-');
            filterList.sort(function(a, b) {
                const objA = (sorting[0] === 'size' || sorting[0] === 'price') ? parseInt(a[sorting[0]]) : a[sorting[0]];
                const objB = (sorting[0] === 'size' || sorting[0] === 'price') ? parseInt(b[sorting[0]]) : b[sorting[0]];

                if (sorting[1] === 'asc') {
                    if ( objA < objB ) {
                        return -1;
                    };
                    if ( objA > objB ) {
                        return 1;
                    }
                    return 0;
                }

                if ( objA > objB ) {
                    return -1;
                };
                if ( objA < objB ) {
                    return 1;
                }

                return 0;
            });
        }

        return {
            ...state,
            queryList: query,
            list: filterList,
        };
    default:
        return state;
    }
};

export default contentReducer;
