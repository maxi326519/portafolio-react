import React from 'react'

import Card from './Card-proyect'

import './styles/Proyects.scss'
import img from '../assets/img/proyect1.png'

export default function Proyects(){
    return (
        <div className='proyects-container'>
            <h2>Proyectos</h2>
            <div className='proyects width-container'>
                <Card 
                    name="Weather App"
                    content="Proyecto desarrollado durante el curso de henry"
                    img={img}
                    url={'https://clima-app-a59af0.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/clima-app'}
                />
                <Card
                    name="Proyecto"
                    content=""
                    img={img}
                />
                <Card
                    name="Proyecto"
                    content=""
                    img={img}
                />
                <Card 
                    name="Weather App"
                    content="Proyecto desarrollado durante el curso de henry"
                    img={img}
                />
                <Card
                    name="Proyecto"
                    content=""
                    img={img}
                />
                <Card
                    name="Proyecto"
                    content=""
                    img={img}
                />
            </div>
        </div>
    )
}