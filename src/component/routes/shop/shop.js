import React from "react";
import { Outlet } from "react-router-dom";

const Shop = () => {
    return (
      <div>
        <h1>This is my shop</h1>
        <Outlet/>
      </div>
      
      )
  }

  export default Shop;