import React from "react";
import { Outlet, Link} from "react-router-dom"; //เพิ่ม Link เอามาทำการเชื่อมแต่ละหน้าเว็บ
import './navigation.css'

const NavigationBar = () => {
    return (
      <div className= "navigation">
        <Link className = 'logo-container' to= '/'>
            <div>Logo</div>
        </Link>
        <div className = 'links-container'>
            <Link className = 'nav-link' to='/shop' >
                <div>Shop</div>
            </Link>
            <Link className="nav-link" to='/signin'>
                <div>Sign In</div>
            </Link>
        </div>
            <Outlet/>
      </div>
    )
  }

  export default NavigationBar;