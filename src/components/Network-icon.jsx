import React from 'react'

export default function NetworkIcon({icon}){
    return(
        <div className='network-icon'>
            <img className='svg' src={icon}></img>
        </div>
    )
}