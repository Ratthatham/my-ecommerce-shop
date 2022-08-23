import React from 'react'
import './category-preview.css'
import ProductCard from '../product-card/product-card'
import { useNavigate } from 'react-router-dom'

const CategoryPreview = ({title, products}) => {
    const navigate = useNavigate();
    const goToPage = () => navigate(`/shop/${title}`);

    return(
        <div className='category-preview-container'>
            <h2>
                <span className='title' onClick={goToPage}>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx) => idx<4)
                    .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}

export default CategoryPreview;