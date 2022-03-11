import React from 'react';

function InputField({type, name, inputId, placeholder}){
    return(
        <div className='input-group flex flex-col gap-y-2 text-left 
        my-4 mx-auto w-4/5 md:w-3/4 lg:w-3/5'>
        <label htmlFor={inputId}>{name}</label>
        <input className='border-2 border-solid p-2 rounded border-current' type={type} 
        id={inputId} placeholder={placeholder} />
        </div>
    );
}

export {InputField};