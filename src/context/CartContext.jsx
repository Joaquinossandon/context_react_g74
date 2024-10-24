import { createContext, useContext, useEffect, useState } from "react"

const cartContext = createContext()

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = (number) => {
        setCart((prev) => [...prev, number])
    }

    useEffect(() => {
        const calcTotal = cart.reduce((acc, cur) => {
            return acc + cur
        }, 0)

        setTotal(calcTotal)
    }, [cart])



    return (
        <cartContext.Provider value={{ cart, addToCart, total }}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(cartContext)
}

export default CartProvider