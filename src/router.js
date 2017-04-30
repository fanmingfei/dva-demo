import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/Index';
import IntroPage from './routes/Intro';
import ListPage from './routes/List';

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={IndexPage} />
            <Route path="/list">
                <Route path=":type:page" component={IntroPage} />
            </Route>
            <Route path="/intro">
                <Route path=":type:id" component={IntroPage} />
            </Route>
        </Router>
    );
}

export default RouterConfig;
