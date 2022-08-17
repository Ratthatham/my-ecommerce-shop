import React from "react";
import Button from "../button/button";
import './shop-icon-dropdown.css'

const ShopIconDropDown = () => {
    return(
        <div className="shop-icon-dropdown-container">
            <div className="dropdown-list"/>
            <div className="emtry-massge"/>
            <Button buttonType='inverted'>Checkout</Button>
        </div>
    )
}

export default ShopIconDropDown;