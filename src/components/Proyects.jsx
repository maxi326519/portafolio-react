import React from 'react'

import Card from './Card-proyect'

import './styles/Proyects.scss'

export default function Proyects(){
    return (
        <div className='proyects-container'>
            <h2>Proyectos</h2>
            <div className='proyects width-container'>
                <Card name="Proyecto" content="Proyecto desarrollado durante el curso de henry"/>
                <Card name="Proyecto"/>
                <Card name="Proyecto"/>
                <a>More proyects</a>
            </div>
        </div>
    )
}