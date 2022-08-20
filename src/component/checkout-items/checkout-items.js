import React from "react";
import './checkout-items.css'
import { useContext } from "react";
import { CartsContext } from "../../context/cartscontext";

const CheckOutItems = () => {
    const {cartItems, addItemToCart, removeItemToCart} = useContext(CartsContext);
    return(
        <div>
            {
                cartItems.map((cartItem) => {
                    return (
                        <div key={cartItem.id}>
                            <h2>{cartItem.name}</h2>
                            <span>{cartItem.quantity}</span>
                            <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
                            <span onClick={() => addItemToCart(cartItem)}>increment</span>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default CheckOutItems;