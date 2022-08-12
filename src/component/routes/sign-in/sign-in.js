import React from "react";
import { signInWithGooglePopup,  createUserDataFromAuth } from "../../../firebase/firebase";
import SignUp from "../sign-up/sign-up";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        
        await createUserDataFromAuth(response.user)
    }

  


    return(
        <div>
            <h1>This is SignIn</h1>
            <button onClick={logGoogleUser}>
                sign in with google
            </button>
            <SignUp/>
           
        </div>
    )
}

export default SignIn;