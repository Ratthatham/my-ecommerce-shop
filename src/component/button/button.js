import React from "react";
import './button.css'

const BUTTON_TYPE_CLASSED = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSED[buttonType]}`} 
        {...otherProps}
        >
            {children}
        </button> //default button
    )
}

export default Button;