import React from 'react';

export default function ({label, name,register, errorMessage}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type="password" className={"form-control" + (errorMessage? " is-invalid" : "")} placeholder={label}
               name={name} ref={register} />

            <span className="error invalid-feedback">{errorMessage}</span>
        </div>
    );
}
