import React, { Fragment, useContext } from "react";
import ProductCard from "../../product-card/product-card";
import { CategoriesContext } from "../../../context/categories.context";
import './shop.css'
import CategoryPreview from "../../category-preview/category-preview";


const Shop = () => {
  const {categoriesMap} =useContext(CategoriesContext)
  
    return (
      
      <Fragment >
        {
          Object.keys(categoriesMap).map((title) => 
            <Fragment key={title}>
              <h2>{title.toUpperCase()}</h2>
              <div className="products-container">
                {
                  categoriesMap[title].map((product) => 
                    <ProductCard key={product.id} product = {product}/>  
                  )
                }
              </div> 
            </Fragment>
          )
        } 
      </Fragment>
      
      )
  }

  export default Shop;