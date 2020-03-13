import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

// create an object for the default data
const defaultState = {
    app: {
        context: null
    },
    modal: {
        isOpen: false,
        context: null
    },
    tasks: {
        list: [],
        filter: null
    }
};

/*
    This flag will need to be extended to also check which environment is running.
    Should be 'false' if prod, but 'true' otherwise
 */
const showDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
    rootReducer,
    defaultState,
    compose(
        applyMiddleware( thunk ),
        showDevTools ? window.__REDUX_DEVTOOLS_EXTENSION__() : ( func ) => func
    )
);

export const history = syncHistoryWithStore( browserHistory, store );

export default store;
