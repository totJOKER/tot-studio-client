import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderButtons } from '../../store/store'

import './Header.css'

export default function Header() {
    
    let [updateEl, setUpdateEl] = useState({
        url: `${localStorage.getItem("work")}`
    })
    


    return (
        <nav className='header'>
            {HeaderButtons.map(data => (
                <NavLink onClick={() => setUpdateEl({url: `${localStorage.getItem("work")}`})} className='header-button' to={data.name == 'Работы' ? updateEl.url : data.url} >
                    <p className='header-name'>{data.name}</p>
                    <p className='header-description'>{data.description}</p>
                </NavLink>
            ))}
        </nav>
    )
}