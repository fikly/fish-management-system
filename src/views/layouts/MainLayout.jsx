import React, {Fragment, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import Notifications from 'react-notify-toast';
import Loading from '~/views/components/loading';
import Header from './Header';
import Sidebar from './Sidebar';

import './style/layout.scss';

const MainLayout = ({Container, title, searchAction}) => {
    return (
        <Fragment>
            <Helmet>
                <title>Efishery Management System - {title}</title>
            </Helmet>
            <Suspense fallback={
                <Loading />
            }>
                <div className="main-layout d-flex">
                    <Notifications />
                    <Sidebar />
                    <div className="main-content">
                        <Header title={title} searchAction={searchAction} />
                        <div className="main-container">
                            <Container />
                        </div>
                    </div>
                </div>
            </Suspense>
        </Fragment>
    );
};

export default MainLayout;
