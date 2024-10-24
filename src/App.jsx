import Button from "./components/Button";
import { useCart } from "./context/CartContext";
import { useTheme } from "./context/ThemeContext";
import('./App.css')


function App() {
  const { theme } = useTheme()
  const { addToCart, total } = useCart()

  const numeros = [100, 200, 300, 400, 500]

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <h1>El total es: {total}</h1>
      <ul>
        {numeros.map((numero) => {
          return (<li key={numero} onClick={() => addToCart(numero)}>{numero}</li>)
        })}
      </ul>
      <Button />
    </div>
  )
}

export default App
