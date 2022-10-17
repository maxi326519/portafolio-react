import React from 'react'

import './styles/Links.scss'

import github from '../assets/svg/network/github.svg'
import linkedin from '../assets/svg/network/linkedin.svg'

export default function Links(){
    return (
        <div className='links-container'>
            <a href='https://github.com/maxi326519'><img src={github} alt='arrow'/></a>
            <a href='https://www.linkedin.com/in/maxi-garcia-fsd/'><img src={linkedin} alt='arrow'/></a>
        </div>
    )
}