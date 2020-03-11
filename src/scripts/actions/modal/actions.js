/**
    Action: Sets modal state to open and adds context
    @param {Object} payload - payload object
*/
export function openModal( payload ) {
    return {
        type: 'OPEN_MODAL',
        payload
    };
}

/**
    Action: Sets modal state to closed and resets context
*/
export function closeModal() {
    return {
        type: 'CLOSE_MODAL'
    };
}
