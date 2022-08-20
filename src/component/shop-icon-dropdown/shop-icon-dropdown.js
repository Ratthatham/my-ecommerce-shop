import React from "react";
import Button from "../button/button";
import CartItems from "../cart-items/cart-items";
import './shop-icon-dropdown.css'
import { useContext } from "react";
import { CartsContext } from "../../context/cartscontext";
import { useNavigate } from "react-router-dom";

const ShopIconDropDown = () => {
    const {cartItems} = useContext(CartsContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <div className="shop-icon-dropdown-container">
            <div className="dropdown-list">
                {
                    cartItems.map((item) => <CartItems key={item.id} cartItem={item}/>)
                }
            </div>
                <Button buttonType='inverted' onClick = {goToCheckoutHandler}>
                        Checkout
                </Button>
            </div>
    )
}

export default ShopIconDropDown;