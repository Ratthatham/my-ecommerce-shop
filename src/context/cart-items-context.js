import React from "react";
import { createContext, useState } from "react";

export const CartItemsContext = createContext({
    addCartItems: null,
    setAddCartItems: () => null
})

export const CartItemsProvider = (children) => {
    const [addCartItems, setAddCartItems] = useState(null);
    const value = {addCartItems, setAddCartItems}
    return(
        <CartItemsContext.Provider value={value}>{children}</CartItemsContext.Provider>
    )
} 