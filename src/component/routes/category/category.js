import React from "react";
import { useContext, useState, useEffect} from "react";
import ProductCard from "../../product-card/product-card";
import { CategoriesContext } from "../../../context/categories.context";
import './category.css'
import { useParams } from "react-router-dom";

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category]);
    console.log(category);
    

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category, categoriesMap ])
    

    return(
        <div className="category-container">
            {products &&
                products.map((product)=><ProductCard key={product.id} product={product}/>)
            }
        </div>
    )
}

export default Category;