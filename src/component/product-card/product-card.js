import React from "react";
import Button from '../button/button'
import './product-card.css'


const ProductCard = ({product}) => {

    return (
            <div className="product-card-container">
                <img src={product.imageUrl} alt='product'/>
                <div className="footer">
                    <span className="name">{product.name}</span>
                    <span className="price">{product.price}</span>
                </div>
                <Button buttonType='inverted'>Add to cart</Button>
            </div>
    )

}

export default ProductCard;