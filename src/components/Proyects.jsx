import React from 'react'

import Card from './Card-proyect'

import './styles/Proyects.scss'
import weather from '../assets/img/weather-app.png'
import pomodro from '../assets/img/pomodoro.png'
import todo from '../assets/img/to-do.png'

export default function Proyects(){
    return (
        <div id='proyects-container'>
            <h2>Proyects</h2>
            <div className='proyects width-container'>
                <Card 
                    name="Weather App"
                    content="This project was developed at Henry's Bootcamp with React and Redux. The public weather api was used "
                    img={weather}
                    url={'https://the-weather-webapp.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/clima-app'}
                />
                <Card 
                    name="Pomodoro App"
                    content="The app for manage your time more efficuently, breaking it up into small pomodoro beats and adding breaks in between"
                    img={pomodro}
                    url={'https://pomodoro-page.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/pomodoro-app'}
                />
                <Card 
                    name="To Do App"
                    content="The to do app to manage your tasks, adding date limite and time limite for them, and grouping them into categories"
                    img={todo}
                    url={'https://the-todo-list-webapp.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/to-do-list-app'}
                />
            </div>
        </div>
    )
}