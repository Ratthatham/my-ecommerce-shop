import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, createContext } from "react";

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

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find the cart item to remove 
    const exittingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
    //check if quantity is eqyal to 1, if it is remove that item from the cart
    if(exittingCartItem.quantity ===1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }
    //return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}

const removeCartItemImmediately = (cartItems, cartItemToRemoveImmediately) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemoveImmediately.id)
}

export const CartsContext = createContext({
        isCartOpen: false,
        setIsCartOpen: () => {},
        cartItems: [],
        addItemToCart: () => {},
        cartCount: 0,
        removeItemToCart: () =>{},
        removeItemToCartImmediately: () => {},
        cartTotal: 0
});

const CART_ACTION_TYPE = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

const cartReducer = (state, action) => {
    switch(action.type){
        case CART_ACTION_TYPE.SET_CART_ITEMS :
            return{
                ...state,
                ...action.payload,
            }
        case CART_ACTION_TYPE.SET_IS_CART_OPEN :
            return{
                ...state,
                isCartOpen: action.payload,
            }

        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}

export const CartsProvider = ({children}) => {
    const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);

        dispatch({
            type: 'SET_CART_ITEMS', 
            payload:{ 
                cartItems: newCartItems, 
                cartTotal: newCartTotal, 
                cartCount: newCartCount
            }
        })
            
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = (addCartItem(cartItems, productToAdd));
        updateCartItemsReducer(newCartItems);
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = (removeCartItem(cartItems, cartItemToRemove))
        updateCartItemsReducer(newCartItems);
    }

    const removeItemToCartImmediately = (cartItemToRemoveImmediately) => {
        const newCartItems = (removeCartItemImmediately(cartItems, cartItemToRemoveImmediately))
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch({type: CART_ACTION_TYPE.SET_IS_CART_OPEN, payload:bool})
    }

    const value = {
        isCartOpen, 
        setIsCartOpen,
        cartItems, 
        addItemToCart, 
        cartCount, 
        removeItemToCart,
        removeItemToCartImmediately,
        cartTotal
    };


    return(
        <CartsContext.Provider value={value}>{children}</CartsContext.Provider>
    )
}