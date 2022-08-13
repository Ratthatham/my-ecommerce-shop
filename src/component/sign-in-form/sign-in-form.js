import React from "react"
import { useState } from "react";
import FormInput from "../formInput/forminput";
import Button from "../button/button";
import { 
    signInWithGooglePopup,
    createUserDataFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../firebase/firebase";
import './sign-in-form.css'

const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () =>{
    //ใช้ useState เข้ามาเก็บค่าจากform    
    const [formFields, setFormFields] = useState(defaultFormFields);
    
    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }
    
    const handleSumbmit = async(event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(formFields.email, formFields.password)
            console.log(response);
            resetFormField();
           
        } catch(error){
            if(error.code === 'auth/wrong-password'){
                alert('Incorrect password')
            } else if (error.code === 'auth/user-not-found'){
                alert('Incorrect  Email')
            } else {
                console.log('user creation encountered an error',error);
            }

        }
        
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        await createUserDataFromAuth(response.user)
    }



    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSumbmit}>
                
                <FormInput
                    label= 'Email'
                    type = 'email'
                    required
                    onChange = {handleChange}
                    name = 'email'
                    value = {formFields.email}
                />

                <FormInput
                    label= 'Password'
                    type = 'password'
                    required
                    onChange = {handleChange}
                    name = 'password'
                    value = {formFields.password}
                />
                
                <div className="buttons-container">
                    <Button buttonType='inverted' type="submit">Sign In</Button>
                    <Button buttonType= 'google' type='button' onClick = {logGoogleUser}>Google sign in</Button>
                </div>
            </form>
        </div>

    )
}

export default SignInForm;