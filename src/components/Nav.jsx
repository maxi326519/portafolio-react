import React from 'react'

import './styles/Nav.scss'

export default function Nav(){
    return (
        <div className='nav-container'>
            <nav className='width-container'>
                <h1>PORTAFOLIO</h1>
                <a href='#proyectos'>Proyectos</a>
                <a href='#skills'>Habilidades</a>
                <a href='#contact'>Contacto</a>
            </nav>
        </div>
    )
}