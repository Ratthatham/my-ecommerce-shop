import React from "react";
import './forminput.css'

const FormInput = ({label, ...inputOptions }) => {
    return (
        <div className="group">
            <input className="form-input" {...inputOptions} />
            <label className= {`${inputOptions.value.length? 'shrink': ''} form-input-label`} >
                {label}
            </label>
        </div>
    )
}

export default FormInput;