import React from "react";
import Button from '../button/button'
import { useContext } from "react";
import { CartsContext } from "../../context/cartscontext";
import './product-card.css'


const ProductCard = ({product}) => {
    const {addItemToCart} =useContext(CartsContext)
    const addProductToCart = () => addItemToCart(product);

    return (
            <div className="product-card-container">
                <img src={product.imageUrl} alt='product'/>
                <div className="footer">
                    <span className="name">{product.name}</span>
                    <span className="price">{product.price}</span>
                </div>
                <Button buttonType='inverted' onClick={addProductToCart}>
                    Add to cart
                </Button>
            </div>
    )

}

export default ProductCard;