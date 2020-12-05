import React from 'react';

export default function ({label, name, register, errorMessage,defaultValue="",className = "",disabled=false}) {
    return (
        <div className={`form-group ${className}`}>
            <h5 className="col-form-label">{label}</h5>
            <input type="text" className={"form-control" + (errorMessage? " is-invalid" : "")} placeholder={label}
                      name={name} ref={register} defaultValue={defaultValue} readOnly={disabled}/>

                <span className="error invalid-feedback">{errorMessage}</span>
        </div>
    );
}
