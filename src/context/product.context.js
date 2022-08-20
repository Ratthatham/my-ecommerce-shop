import React from "react";
import { createContext, useState } from "react";
import PRODUCT_DATA from '../../src/shop-data.json'

export const ProductContext = createContext({
    Product: []
})

export const ProductProvider = ({children}) => {
    const [products] = useState(PRODUCT_DATA);
    const value = {products};
    return <ProductContext.Provider value = {value}>{children}</ProductContext.Provider>
    
}