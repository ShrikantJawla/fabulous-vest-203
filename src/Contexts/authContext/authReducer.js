// import React from 'react'

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
        case 'UPDATESTATE':
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    ...action.payload
                }
            }
        case 'LOCATIONUPDATER':
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    ...action.payload
                }
            }
        case 'HANDLELOCATIONUPDATER':
            return {
                ...state,
                locationUpdater: action.payload
            }
        default:
            return state;
    }
}

export { reducer }
