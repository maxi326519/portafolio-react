import React from 'react'

import './styles/Home.css'

export default function Home(){
    return (
        <div className='home width-container'>
            <div className='home-text'>
                <div className='home-text__container'>
                    <h2>Hello World!</h2>
                    <p>Soy Maximiliano Garcia</p>
                    <p>Full Stack Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse placeat deleniti, eum, culpa at sed harum sit dolorum saepe adipisci officiis aliquam voluptates atque fugit blanditiis ipsam architecto molestiae!</p>
                    <button>Contactar</button>
                </div>
            </div>
            <div className='home-img'>
                <div className='home-img__container'>
                    <img/>
                </div>
            </div>
        </div>
    )
}