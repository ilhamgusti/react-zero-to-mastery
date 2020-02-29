import React from 'react'
import './search-box.style.css'

export const SearchBox =({handleChange,placeholder})=>{
    return (
        <input className="search" placeholder={placeholder} onChange={handleChange}/>
        )
}