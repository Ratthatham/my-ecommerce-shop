import React from "react";
import { Outlet, Link} from "react-router-dom"; //เพิ่ม Link เอามาทำการเชื่อมแต่ละหน้าเว็บ
import { useContext } from "react";
import { UserContext } from "../../../context/context";
import { signOutUser } from "../../../firebase/firebase";
import ShoppingIcon from "../../shop-icon/shop-icon";
import ShopIconDropDown from "../../shop-icon-dropdown/shop-icon-dropdown";
import './navigation.css'


const NavigationBar = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    const sighOutHandle = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <div>
            <div className= "navigation">
                <Link className = 'logo-container' to= '/'>
                    <div>Logo</div>
                </Link>
                <div className = 'nav-links-container'>
                    <Link className = 'nav-link' to='/shop' >
                        <div>Shop</div>
                    </Link>
                    {
                        currentUser? <span className="nav-link" onClick={sighOutHandle}>Sign out</span>
                        :
                        <Link className="nav-link" to='/auth'>
                            <div>Sign In</div>
                        </Link>
                    }
                    <ShoppingIcon/>
                </div>     
                <ShopIconDropDown/>
            </div>
            <Outlet/>
        </div>
    )
  }

  export default NavigationBar;