import React from 'react';

const InputComponent = ({ icon, placeholder, type, name, onChange }) => {
    return (
        <div className="form_group">
            {
                icon && (
                    <span className="form_icon">
                        <i className={`fa fa-${icon}`}></i>
                    </span>
                )
            }
            <input
                className="form_field"
                type={type}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default InputComponent;