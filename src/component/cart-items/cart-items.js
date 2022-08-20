import React from "react";
import './cart-items.css'

const CartItems = ({cartItem}) => {
    
    return(
        <div className='cart-items-container'>
            <img className="cart-items-img" src={cartItem.imageUrl} alt={cartItem.name}/>
            <div className="item-detail">
                <span className="name">{cartItem.name}</span>
                <br/>
                <span className="price">
                    {cartItem.quantity} x ${cartItem.price} 
                </span>
            </div>
        </div>
    )
}

export default CartItems;