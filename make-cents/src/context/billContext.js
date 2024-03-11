import { createContext, useReducer } from "react"

export const BillContext = createContext()

export const billsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BILLS':
            return {
                bills: action.payload
            }
        case 'CREATE_BILL':
            return {
                bills: [action.payload, ...state.bills]
            }
        case 'UPDATE_BILL':
            return {
                bills: state.bills.filter((b) => b._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const BillContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(billsReducer, {bills: null})

    return (
        <BillContext.Provider value={{...state, dispatch}}> 
            {children}
        </BillContext.Provider>
    )
}