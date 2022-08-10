import React from "react"
import { useState } from "react";

const SignUpForm = () =>{
    //ใช้ useState เข้ามาเก็บค่าจากform
    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
        console.log(formFields);
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={()=>{}}>
                <label>Display Name</label>
                <input type = 'text' required onChange={handleChange} name='displayName' />

                <label>Email</label>
                <input type = 'email' required onChange={handleChange} name='email'/>

                <label>Password</label>
                <input type = 'password' required onChange={handleChange} name='password'/>

                <label>Confirm Password</label>
                <input type = 'password' required onChange={handleChange} name='condirmPassword'/>

                <button type="submit">SignUp</button>
            </form>
        </div>

    )
}

export default SignUpForm;