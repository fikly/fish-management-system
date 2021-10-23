import React, {Fragment, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import Loading from '~/views/components/loading/Loading';
import Header from './Header';
import Sidebar from './Sidebar';

import './style/layout.scss';

const MainLayout = ({Container, title}) => {
    return (
        <Fragment>
            <Helmet>
                <title>Efishery Management System - {title}</title>
            </Helmet>
            <Suspense fallback={
                <Loading />
            }>
                <div className="main-layout d-flex">
                    <Sidebar />
                    <div className="main-content">
                        <Header title={title} />
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
