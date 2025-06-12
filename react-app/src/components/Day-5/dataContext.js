import { createContext, useContext } from "react";

// step 1
export const dataContext = createContext()

// step 2
export const DataProvider = ({children}) => {
    const name = 'abdukadir'
    return <dataContext.Provider value={name}>{children}</dataContext.Provider>
}

// step 3
export const DataUse = () => useContext(dataContext)