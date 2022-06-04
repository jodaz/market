import * as React from 'react'

const AdminContext = React.createContext()

const initialState = {
    title: 'Mercado'
}

function adminReducer(state, action) {
    if (action) {
        switch (action.type) {
            case 'SET_TITLE': {
                return {
                    ...state,
                    title: action.payload
                }
            }
            case 'RESET_ADMIN': {
                return initialState
            }
            default: {
                throw new Error(`Unhandled action type: ${action.type}`)
            }
        }
    }
}

function AdminProvider({ children }) {
    const [state, dispatch] = React.useReducer(adminReducer, initialState)

    const value = { state, dispatch }

    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export { AdminContext, AdminProvider }