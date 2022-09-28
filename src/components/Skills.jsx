import React from 'react'

import Icon from './Icon'

import './styles/Skills.css'

export default function Skills(){
    return(
        <div className='skills width-container'>
            <h2>Habilidades</h2>
            <div className='skills__container'>
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
            </div>
        </div>
    )
}