import React from 'react'

import './styles/Nav.scss'
import bars from '../assets/svg/bars-solid.svg'
import arrow from '../assets/svg/chevron-up-solid.svg'

export default function Nav(){
    return (
        <div className='nav-container'>
            <nav className='width-container'>
                <ul>
                    <li className='nav-icon'><img src={bars} alt='bars'/></li>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#proyects-container'>Proyects</a></li>
                    <li><a href='#skills'>Skills</a></li>
{/*                     <li><a href='#contact'>Contact</a></li> */}
                    <li className='nav-arrow'><img src={arrow} alt='arrow'/></li>
                </ul>
            </nav>
        </div>
    )
}