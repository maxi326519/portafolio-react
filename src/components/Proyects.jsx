import React from 'react'

import Card from './Card-proyect'

import './styles/Proyects.scss'
import img from '../assets/img/proyect1.png'

export default function Proyects(){
    return (
        <div className='proyects-container'>
            <h2>Proyectos</h2>
            <div className='proyects width-container'>
                <Card 
                    name="Weather App"
                    content="This project was developed at Henry's Bootcamp with React and Redux. The public weather api was used "
                    img={img}
                    url={'https://clima-app-a59af0.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/clima-app'}
                />
                <Card 
                    name="Weather App"
                    content="This project was developed at Henry's Bootcamp with React and Redux. The public weather api was used "
                    img={img}
                    url={'https://clima-app-a59af0.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/clima-app'}
                />
                <Card 
                    name="Weather App"
                    content="This project was developed at Henry's Bootcamp with React and Redux. The public weather api was used "
                    img={img}
                    url={'https://clima-app-a59af0.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/clima-app'}
                />
                <Card 
                    name="Weather App"
                    content="This project was developed at Henry's Bootcamp with React and Redux. The public weather api was used "
                    img={img}
                    url={'https://clima-app-a59af0.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/clima-app'}
                />
                <Card 
                    name="Weather App"
                    content="This project was developed at Henry's Bootcamp with React and Redux. The public weather api was used "
                    img={img}
                    url={'https://clima-app-a59af0.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/clima-app'}
                />
                <Card 
                    name="Weather App"
                    content="This project was developed at Henry's Bootcamp with React and Redux. The public weather api was used "
                    img={img}
                    url={'https://clima-app-a59af0.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/clima-app'}
                />
            </div>
        </div>
    )
}