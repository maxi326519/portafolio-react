import React from 'react'

import './styles/Card-proyect.css'

export default function Card({name, content}){
    return (
        <div className='proyect-card'>
            <div className='card__img'>
                <img/>
            </div>
            <div className='card__text'>
                <h3 className='card__name'>{name}</h3>
                <div className='card__description'>
                    <p>{content}</p>
                    <button>Mostrar mas</button>
                </div>
            </div>
        </div>
    )
}