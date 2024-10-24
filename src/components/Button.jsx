import { useTheme } from "../context/ThemeContext"


function Button() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme}>Valor del contexto: {theme}</button>
    )
}

export default Button