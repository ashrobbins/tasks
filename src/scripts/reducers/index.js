import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import app from './app/reducer';
import modal from './modal/reducer';
import tasks from './tasks/reducer';

const rootReducer = combineReducers( {
    app,
    modal,
    tasks,
    routing
});

export default rootReducer;
