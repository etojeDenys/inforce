import React from "react";

import './form-input.styles.scss'

interface FormInputProps {
    label: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string|number,
    type: string,
    name: string
    min?:string
}

const FormInput: React.FC<FormInputProps> = ({handleChange, label, value, type, name,min}) => (
    <div className='group'>
        {
            label
                ?
                (<label className='form-input-label'>
                    {label}
                </label>)
                :
                null
        }
        <input className='form-input' onChange={handleChange} value={value} type={type} name={name} min={min}/>

    </div>
)

export default FormInput