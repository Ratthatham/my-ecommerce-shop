import React from "react"
import { useState } from "react";
import { createAuthUserWithEmailAndPassword} from "../../firebase/firebase";
import FormInput from "../formInput/forminput";
import Button from "../button/button";
import './sign-up-form.css'


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () =>{
    //ใช้ useState เข้ามาเก็บค่าจากform    
    const [formFields, setFormFields] = useState(defaultFormFields);

    
    
    const handleSumbmit = async(event) => {
        event.preventDefault();
        
        if(formFields.password !== formFields.confirmPassword){
            alert("password do not match")
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(
                formFields.email, 
                formFields.password
            );
            

            console.log(response);
        } catch(error){
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log('user creation encountered an error', error)
            }

        }
        
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
        console.log(formFields);
    }



    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSumbmit}>
                <FormInput
                    label= 'Display Name'
                    type = 'text'
                    required
                    onChange = {handleChange}
                    name = 'displayName'
                    value = {formFields.displayName}
                />

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

                <FormInput
                    label= 'Confirm Password'
                    type = 'password'
                    required
                    onChange = {handleChange}
                    name = 'confirmPassword'
                    value = {formFields.confirmPassword}
                />
                
                <Button buttonType='google' type="submit">Sign Up</Button>
                
            </form>
        </div>

    )
}

export default SignUpForm;