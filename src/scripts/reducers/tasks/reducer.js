function tasks( state = {}, action ) {
    const { type, payload } = action;
    switch ( type ) {

        // case 'SET_APP_CONTEXT': {

        //     return {
        //         ...state,
        //         context: payload
        //     };
        // }

        default:
            return state;
    }
}

export default tasks;
