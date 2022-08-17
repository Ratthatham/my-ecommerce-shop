import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../asset/shoping-bag.svg'
import './shop-icon.css'

const CartIcon = () => {
    return(
        <div className='shop-icon-container'>
            <ShoppingIcon className='shop-icon'/>
            <span className='shop-icon-counter'>0</span>
        </div>
    )
}

export default CartIcon;    