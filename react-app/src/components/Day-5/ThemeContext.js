import { createContext, useContext, useState } from "react";

// step 1
export const ThemeContext = createContext()


// step 2
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}

// step 3
export const UseTheme = () => useContext(ThemeContext)

export const THEME = {
    LIGHT: 'Light',
    DARK: 'Dark'
}
