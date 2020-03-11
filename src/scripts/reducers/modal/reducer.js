/*
    Reducer: Handles all modal state updates
    @param {Array} state - modal state
    @param {Object} action - action object containing type and payload
 */
function modal( state = {}, action ) {
    const { type, payload } = action;

    switch ( type ) {

        case 'OPEN_MODAL':

            return {
                isOpen: true,
                context: payload
            };

        case 'CLOSE_MODAL':

            return {
                isOpen: false,
                context: null
            };

        default:
            return state;
    }
}

export default modal;
