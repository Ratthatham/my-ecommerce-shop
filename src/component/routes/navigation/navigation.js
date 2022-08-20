import React from "react";
import { Outlet} from "react-router-dom"; //เพิ่ม Link เอามาทำการเชื่อมแต่ละหน้าเว็บ
import { useContext } from "react";
import { UserContext } from "../../../context/context";
import { CartsContext } from "../../../context/cartscontext";
import { signOutUser } from "../../../firebase/firebase";
import CartIcon from "../../cart-icon/cart-icon";
import ShopIconDropDown from '../../shop-icon-dropdown/shop-icon-dropdown'
import { useNavigate } from "react-router-dom";
import './navigation.css'


const NavigationBar = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartsContext);

    const signOutHandle = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    const navigate = useNavigate(); //useNavigate 
    const goToHomePage = () => navigate('/');
    const goToShopPage = () => navigate('/shop');
    const goToSignInPage = () => navigate('/auth');

    return (
        <div>
            <div className= "navigation">
                <div className="logo-container" onClick={goToHomePage}>Logo</div>
                <div className = 'nav-links-container'>
                    <div className = 'nav-link' onClick={goToShopPage}>Shop</div>
                    {
                        currentUser? <span className="nav-link" onClick={signOutHandle}>Sign out</span>
                        :
                            <div className="nav-link" onClick={goToSignInPage}>Sign In</div>
                    }
                    <CartIcon/>
                </div>
                {
                    isCartOpen?<ShopIconDropDown/>:''
                }     
                {/* {isCartOpen && <ShopIconDropDown/>} */}
            </div>
            <Outlet/>
        </div>
    )
  }

  export default NavigationBar;