import React from 'react'

export default function Tecnology({ className, svg}){
    return (
        <div className={`icon ${className}`}>
            <img className='svg' src={svg} alt='icon-img'/>
        </div>
    )
}