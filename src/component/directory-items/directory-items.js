import React from "react";
import './directory-items.css'
import { useNavigate } from "react-router-dom";

const DirectoryItems = () =>{
  const navigate = useNavigate();

  const catagories = [
    {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        route: "shop/hats"

    },
    {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        route: "shop/jackets"
    },
    {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        route: "shop/sneakers"
      },
    {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        route: "shop/womens"
    },
    {
        id: 5,
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        route: "shop/mens"
    }
  ];

    return(
      <div className="directory-items-container">
        {catagories.map(({title, id, imageUrl, route})=>(
          <div key = {id} className='directory-container'>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}>
            </div>  
            <div className="body" onClick={() => {navigate(route)}}>
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>
          </div>    
        ))}
      </div>  
    )
}

export default DirectoryItems;