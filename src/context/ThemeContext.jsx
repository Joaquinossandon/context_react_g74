import { createContext, useState, useContext } from "react"

// crear contexto
const themeContext = createContext();

// proveer contexto
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newThemeValue = prevTheme === 'light' ? 'dark' : 'light'
            return newThemeValue
        })
    }

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}

// usar contexto
export const useTheme = () => {
    return useContext(themeContext) // retorna un objeto {theme, toggleTheme}
}

export default ThemeProvider