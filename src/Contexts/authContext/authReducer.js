import React from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuth: true,
                userDetails: {
                    ...state.userDetails,
                    ...action.payload
                }
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false,
                userDetails: {
                    mobile: '',
                    profilePhoto: '',
                    name: '',
                    email: '',
                    gender: 'Male',
                    city: ''
                }
            }
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'LOADED':
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export { reducer }
