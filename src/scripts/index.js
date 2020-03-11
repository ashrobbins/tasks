import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/';
import { App, TaskList } from './components';

const router = (
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ TaskList }></IndexRoute>
            </Route>
        </Router>
    </Provider>
);

render( router, document.getElementById( 'app' ) );
