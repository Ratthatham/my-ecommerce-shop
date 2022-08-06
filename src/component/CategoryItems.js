import React from "react";
import './categories.css'

const CategoryItems = ({catagories}) =>{
    return(
      <div className="categories-container">
        {catagories.map(({title, id, imageUrl})=>(
          <div key = {id} className='category-container'>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}>
            </div>  
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>
          </div>    
        ))}
      </div>  
    )
}

export default CategoryItems;