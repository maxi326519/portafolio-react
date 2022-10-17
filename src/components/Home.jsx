import React from 'react'

import Links from './Links'

import './styles/Home.scss'
import img from '../assets/img/Perfil.jpg'

export default function Home(){
    return (
        <div className='width-container' id='home'>
            <div className='home-text'>
                <div className='home-text__container'>
                    <h2><b>Hello World!</b></h2>
                    <p><b>I'm Maximiliano Garcia</b></p>
                    <p><b>Full Stack Developer</b></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse placeat deleniti, eum, culpa at sed harum sit dolorum saepe adipisci officiis aliquam voluptates atque fugit blanditiis ipsam architecto molestiae!</p>
                    <a className="home-btn-contact" href='#contact'>CONTACT ME </a>
                    <Links/>
                </div>
            </div>
            <div className='home-img'>
                <div className='home-img__container'>
                    <img src={img} alt="perfil"/>
                </div>
            </div>
        </div>
    )
}