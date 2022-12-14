import React from "react";
import './checkout.css'
import CheckOutItems from "../../checkout-items/checkout-items";
import { CartsContext } from "../../../context/cartscontext";
import { useContext } from "react";


const CheckOut = () => {
    const {cartTotal} = useContext(CartsContext)
    
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <CheckOutItems/>
            <span className="total">Total: ${cartTotal} </span>
        </div>
    )
}

export default CheckOut;