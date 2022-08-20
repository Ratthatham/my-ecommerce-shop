import React, { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {



//find if cartItems contains productToAdd return value = bolean
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
//if found, increment quantity
    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

//return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartsContext = createContext({
        isCartOpen: false,
        setIsCartOpen: () => {},
        cartItems: [],
        addItemToCart: () => {},
        cartCount: 0
});

export const CartsProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    useEffect(()=> {
        const newCartCount = cartItems.reduce((total, cartItems) => total + cartItems.quantity, 0);
        setCartCount(newCartCount);
    },[cartItems])

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount};


    return(
        <CartsContext.Provider value={value}>{children}</CartsContext.Provider>
    )
}