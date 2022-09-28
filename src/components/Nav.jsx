import React from 'react'

import './styles/Nav.css'

export default function Nav(){
    return (
        <div className='nav-container'>
            <nav className='width-container'>
                <h1 className='nav-title'>PORTAFOLIO</h1>
                <a className='nav-link' href='#proyectos'>Proyectos</a>
                <a className='nav-link' href='#skills'>Habilidades</a>
                <a className='nav-link' href='#contact'>Contacto</a>
            </nav>
        </div>
    )
}