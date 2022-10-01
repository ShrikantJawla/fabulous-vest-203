import React from 'react'
import { appReducer } from './AppReducer'
import { AuthContext } from '../authContext/authContext'

const AppContext = React.createContext()

export function useAppContext() {
  return React.useContext(AppContext)
}

const initialState = {
  location: '',
}

export default function AppContextProvider({ children }) {
  const { authState } = React.useContext(AuthContext)
    initialState.location = authState.userDetails.city;
    const [appState, appDispatch] = React.useReducer(appReducer, initialState);
  const value = {
    appState,
    appDispatch,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
