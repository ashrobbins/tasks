function tasks( state = {}, action ) {
    const { type, payload } = action;
    switch ( type ) {

        case 'STORE_TASKS': {

            return {
                ...state,
                list: payload
            };
        }

        case 'UPDATE_FILTER': {

            return {
                ...state,
                filter: payload
            };
        }

        default:
            return state;
    }
}

export default tasks;
