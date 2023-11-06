import { useState } from 'react'
import s from './style.module.css'

export function SearchBar({ currentInput, onChangeInput }) {

    const hanleInputChange = (e) => {
        const inputValue= e.target.value;
        onChangeInput(inputValue);
    }


    return(

        <input 
            onChange={hanleInputChange} 
            type="text" 
            className={`form-control ${s.searchInput}`}
        />

    )

}