import React from "react";
import SignInForm from "../../sign-in-form/sign-in-form";
import SignUpForm from "../../sign-up-form/sign-up-form";
import './authentication.css'


const Authentication = () => {
    return(
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
        
    )
}

export default Authentication;