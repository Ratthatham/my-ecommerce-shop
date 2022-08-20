import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../asset/shoping-bag.svg'
import { useContext } from 'react'
import { CartsContext } from '../../context/cartscontext'
import './shop-icon.css'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartsContext);
    
    

    return(
        <div className='shop-icon-container' onClick={()=>setIsCartOpen(!isCartOpen)}>
            <ShoppingIcon className='shop-icon'/>
            <span className='shop-icon-counter'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;