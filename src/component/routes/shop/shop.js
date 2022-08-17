import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import ProductCard from "../../product-card/product-card";
import {ProductContext} from '../../../context/product.context'
import './shop.css'

const Shop = () => {
  const {products} =useContext(ProductContext)
    return (
      <div className="products-container">
        {
          products.map((product) => 
            <ProductCard key={product.id} product = {product}/>
          )
        }
        <Outlet/>
      </div>
      
      )
  }

  export default Shop;