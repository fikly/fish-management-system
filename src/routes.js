import {lazy} from 'react';

const Homepage = lazy( () => import('~/views/containers/homepages') );

const routes = [
    {title: 'Content List', container: Homepage, exact: true, path: '/'},
];

export default routes;
