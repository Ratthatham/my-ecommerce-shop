import React from "react";
import './forminput.css'

const FormInput = ({label, ...inputOptions }) => {
    return (
        <div className="group">
            <input className="form-input" {...inputOptions} />
            {label && (
                <label className="" >
                    {label}
                </label>
            )}
        </div>
    )
}

export default FormInput;