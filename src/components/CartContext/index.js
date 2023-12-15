import { createContext } from "react"
import { useState } from "react"


export const CartContext = createContext();

export function ProvideCart({ children }) {
    const [cartItems, setCartItems] = useState([])
    function removeCart(product) {
        setCartItems(cartItems.filter(cart => cart.id !== product.id))
    }
    function addToCart(product, quantity = 1) {

        const existCartItem = cartItems.find(item =>
            item.id === product.id
        )
        if (existCartItem) {
            const cartItem = cartItems.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity++ }
                } else {
                    return item
                }
            })
            setCartItems(cartItem)
        } else {
            setCartItems([...cartItems, { ...product, quantity: quantity }])
        }
    }
    console.log(cartItems)

    return (
        <CartContext.Provider value={{ addToCart, cartItems, removeCart }} >
            {children}
        </CartContext.Provider>
    )
}