import {lazy} from 'react';
import {SEARCH_LIST} from './states/actions/contentAction';

const Homepage = lazy( () => import('~/views/containers/homepages') );

const routes = [
    {title: 'Content List', container: Homepage, exact: true, path: '/', searchAction: SEARCH_LIST},
];

export default routes;
