import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderButtons } from '../../store/store'

import './Header.css'

export default function Header() {

    const isOnLocal  = () => {
        localStorage.setItem('work', 1)
    }

    return (
        <nav className='header'>
            {HeaderButtons.map(data => (
                <NavLink onClick={isOnLocal} className='header-button' to={data.url} >
                    <p className='header-name'>{data.name}</p>
                    <p className='header-description'>{data.description}</p>
                </NavLink>
            ))}
        </nav>
    )
}