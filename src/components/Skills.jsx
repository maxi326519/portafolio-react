import React from 'react'

import Icon from './Icon'

import './styles/Skills.css'
import LogoHtml from '../assets/svg/html.svg'
import LogoCss from '../assets/svg/css.svg'
import LogoJS from '../assets/svg/javascript.svg'
import LogoNodeJS from '../assets/svg/nodejs.svg'
import LogoSass from '../assets/svg/sass.svg'
import LogoReact from '../assets/svg/react.svg'

export default function Skills(){
    return(
        <div className='skills width-container'>
            <h2>Habilidades</h2>
            <div className='skills__container'>
                <Icon svg={LogoHtml}/>
                <Icon svg={LogoCss}/>
                <Icon svg={LogoJS}/>
                <Icon svg={LogoNodeJS}/>
                <Icon svg={LogoSass}/>
                <Icon svg={LogoReact}/>
            </div>
        </div>
    )
}