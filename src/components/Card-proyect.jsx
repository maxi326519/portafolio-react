import React from 'react'

import './styles/Card-proyect.scss'
import link from '../assets/svg/link-solid.svg'
import github from '../assets/svg/network/github.svg'

export default function Card({name, content, img}){
    return (
        <div className='proyect-card width-container'>
            <div className='card__img'>
                <img src={img} alt="proyect"/>
            </div>
            <button>Mostrar mas</button>
            <div className="card__links">
                <img src={link} alt="link"></img>
                <img src={github} alt="link"></img>
            </div>
            <div className='card__text'>
                <h3 className='card__name'>{name}</h3>
                <p className='card__description'>{content}</p>
            </div>
        </div>
    )
}