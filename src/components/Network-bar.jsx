import React from 'react'

import Icon from './Network-icon.jsx'

import LinkedIn from '../assets/svg/network/linkedin.svg'
import GitHub from '../assets/svg/network/github.svg'
import './styles/Network-bar.css'

export default function Network(){
    return (
        <div className='network'>
            <Icon icon={LinkedIn}/>
            <Icon icon={GitHub}/>
        </div>
    )
}