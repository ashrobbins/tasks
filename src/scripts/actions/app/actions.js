import * as actions from '../../actions';
/**
    Action: Hydrates redux store with app context
    @param {Object} payload - payload object
*/
export function updateAppContext( payload ) {
    return dispatch => {
        dispatch( setAppContext( payload ) );
    };
}

/**
    Action: Hydrates redux store with app context
    @param {Object} payload - payload object
*/
export function setAppContext( payload ) {
    return {
        type: 'SET_APP_CONTEXT',
        payload
    };
}
