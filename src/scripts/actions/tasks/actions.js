/**
    Action: Hydrates redux store with tasks
    @param {Object} payload - payload object
*/
export function storeTasks( payload ) {
    return {
        type: 'STORE_TASKS',
        payload
    };
}

/**
    Action: Updates tasks.filter with tag provided
    @param {Object} payload - payload object
*/
export function updateFilter( payload ) {
    return {
        type: 'UPDATE_FILTER',
        payload
    };
}
