import React from 'react'

import './styles/Card-proyect.scss'
import link from '../assets/svg/link-solid.svg'
import github from '../assets/svg/network/github.svg'

export default function Card({name, content, img, url, urlGitHub}){
    return (
        <div className='proyect-card width-container'>
            <div className='card__img'>
                <img src={img} alt="proyect"/>
            </div>
            <div className="card__links">
                <a rel="noreferrer" target="_blank" href={url}><img src={link} alt="link"></img></a>
                <a rel="noreferrer" target="_blank" href={urlGitHub}><img src={github} alt="link"></img></a>
            </div>
            <div className='card__text'>
                <h3 className='card__name'>{name}</h3>
                <p className='card__description'>{content}</p>
                <a className='card__btn-more'>Read more</a>
            </div>
        </div>
    )
}