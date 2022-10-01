export function appReducer(state, action) {
    switch (action.type) {
        case 'ADD_LOCATION':
            return {
                ...state,
                location: action.payload
            }
        default:
            return state;
    }
}