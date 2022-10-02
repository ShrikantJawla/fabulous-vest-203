export function appReducer(state, action) {
    switch (action.type) {
        case 'ADD_LOCATION':
            return {
                ...state,
                location: action.payload,
            }
        case 'ADD_DROP_LOCATION':
            return {
                ...state,
                dropLocation: action.payload,
            }
        case 'ADD_PICK_DROP_TIME':
            return {
                ...state,
                pickAndDropTime: {
                    ...state.pickAndDropTime,
                    ...action.payload,
                }
            }
        default:
            return state;
    }
}