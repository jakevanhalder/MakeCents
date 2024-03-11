import { BillContext } from "../context/billContext"
import { useContext } from "react"

export const useBillContext = () => {
    const context = useContext(BillContext)

    if (!context)
    {
        throw Error('useBillContext must be used inside a BillContextProvider')
    }

    return context
}