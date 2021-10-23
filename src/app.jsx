import React, {Fragment} from 'react';

import '~/assets/scss/general.scss';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routes from '~/routes';

import {Provider} from 'react-redux';
import configureStore from '~/states/ContainerReducer';

import MainLayout from '~/views/layouts/MainLayout';
import Page404 from '~/views/errors/Page404';

const App = () =>{
    return (
        <Fragment>
            <Provider store={configureStore()}>
                <BrowserRouter>
                    <Switch>
                        {routes.map(({path, exact, container, title}, i ) => (
                            <Route key={i} path={path} exact={exact} render={ () => (
                                <MainLayout Container={container} title={title} />
                            )}/>
                        ))}
                        <Route render={()=><Page404/>}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </Fragment>
    );
};
export default App;
