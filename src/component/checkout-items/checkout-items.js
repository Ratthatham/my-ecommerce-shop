import React from "react";
import './checkout-items.css'
import { useContext } from "react";
import { CartsContext } from "../../context/cartscontext";

const CheckOutItems = () => {
    const {cartItems, addItemToCart,removeItemToCart, removeItemToCartImmediately} = useContext(CartsContext);
    return(
        <div>
            {
                cartItems.map((cartItem) => {
                    return (
                        <div className="checkoutitems-container" key={cartItem.id}>
                            <img  alt={cartItem.name} className='checkoutitems-image' src={cartItem.imageUrl}/>
                            <span className="checkoutitems-name">{cartItem.name}</span>
                            <div className="checkoutitems-quantity-container">
                                <span className='checkoutitems-decrease' onClick={() => removeItemToCart(cartItem)}>{"\u003c"}</span>
                                <span className="checkoutitems-quantity">{cartItem.quantity}</span>
                                <span className="checkoutitems-increase" onClick={() => addItemToCart(cartItem)}>{"\u003E"}</span>    
                            </div>
                            <span className="checkoutitems-name">{cartItem.price}</span>
                            <span className="checkoutitems-remove" onClick={() => removeItemToCartImmediately(cartItem)}>X</span>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default CheckOutItems;
                            