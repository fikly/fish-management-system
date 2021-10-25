import {lazy} from 'react';
import {SET_QUERY_LIST} from './states/actions/contentAction';

const Homepage = lazy( () => import('~/views/containers/homepages') );

const routes = [
    {title: 'Content List', container: Homepage, exact: true, path: '/', searchAction: SET_QUERY_LIST},
];

export default routes;
